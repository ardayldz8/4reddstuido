"use client";

import { Suspense, useRef, useLayoutEffect, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useLoader, useThree, invalidate } from '@react-three/fiber';
import { OrbitControls, useGLTF, useFBX, useProgress, Html, Environment, ContactShadows } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import * as THREE from 'three';

const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
const deg2rad = (d: number) => (d * Math.PI) / 180;
const ROTATE_SPEED = 0.005;
const INERTIA = 0.925;
const PARALLAX_MAG = 0.05;
const PARALLAX_EASE = 0.12;
const HOVER_MAG = deg2rad(6);
const HOVER_EASE = 0.15;

interface LoaderProps {
    placeholderSrc?: string;
}

const Loader = ({ placeholderSrc }: LoaderProps) => {
    const { progress, active } = useProgress();
    if (!active && placeholderSrc) return null;
    return (
        <Html center>
            {placeholderSrc ? (
                <img src={placeholderSrc} width={128} height={128} style={{ filter: 'blur(8px)', borderRadius: 8 }} alt="loading" />
            ) : (
                `${Math.round(progress)} %`
            )}
        </Html>
    );
};

interface DesktopControlsProps {
    pivot: THREE.Vector3;
    min: number;
    max: number;
    zoomEnabled: boolean;
}

const DesktopControls = ({ pivot, min, max, zoomEnabled }: DesktopControlsProps) => {
    return (
        <OrbitControls
            makeDefault
            enablePan={false}
            enableRotate={false}
            enableZoom={zoomEnabled}
            minDistance={min}
            maxDistance={max}
        />
    );
};

interface ModelInnerProps {
    url: string;
    xOff: number;
    yOff: number;
    pivot: THREE.Vector3;
    initYaw: number;
    initPitch: number;
    minZoom: number;
    maxZoom: number;
    enableMouseParallax: boolean;
    enableManualRotation: boolean;
    enableHoverRotation: boolean;
    enableManualZoom: boolean;
    autoFrame: boolean;
    fadeIn: boolean;
    autoRotate: boolean;
    autoRotateSpeed: number;
    onLoaded?: () => void;
    opacity?: number;
    color?: string;
}

const ModelInner = ({
    url,
    xOff,
    yOff,
    pivot,
    initYaw,
    initPitch,
    minZoom,
    maxZoom,
    enableMouseParallax,
    enableManualRotation,
    enableHoverRotation,
    autoFrame,
    fadeIn,
    autoRotate,
    autoRotateSpeed,
    onLoaded,
    opacity = 1,
    color = "#FF3333"
}: ModelInnerProps) => {
    const outer = useRef<THREE.Group>(null);
    const inner = useRef<THREE.Group>(null);
    const { camera, gl } = useThree();

    const vel = useRef({ x: 0, y: 0 });
    const tPar = useRef({ x: 0, y: 0 });
    const cPar = useRef({ x: 0, y: 0 });
    const tHov = useRef({ x: 0, y: 0 });
    const cHov = useRef({ x: 0, y: 0 });

    const ext = useMemo(() => url.split('.').pop()?.toLowerCase() || '', [url]);
    const content = useMemo(() => {
        if (ext === 'glb' || ext === 'gltf') return useGLTF(url).scene.clone();
        if (ext === 'fbx') return useFBX(url).clone();
        if (ext === 'obj') return useLoader(OBJLoader, url).clone();
        console.error('Unsupported format:', ext);
        return null;
    }, [url, ext]);

    const pivotW = useRef(new THREE.Vector3());

    useLayoutEffect(() => {
        if (!content || !inner.current || !outer.current) return;
        const g = inner.current;
        g.updateWorldMatrix(true, true);

        const sphere = new THREE.Box3().setFromObject(g).getBoundingSphere(new THREE.Sphere());
        const s = 2 / (sphere.radius * 2);
        g.position.set(-sphere.center.x, -sphere.center.y, -sphere.center.z);
        g.scale.setScalar(s);

        g.traverse((o) => {
            if ((o as THREE.Mesh).isMesh) {
                const mesh = o as THREE.Mesh;
                mesh.castShadow = true;
                mesh.receiveShadow = true;

                // Create simple transparent glass material
                const glassMaterial = new THREE.MeshStandardMaterial({
                    color: new THREE.Color("#aaccff"),
                    transparent: true,
                    opacity: opacity,
                    metalness: 0.9,
                    roughness: 0.1,
                    envMapIntensity: 1.0,
                });

                mesh.material = glassMaterial;
            }
        });

        g.getWorldPosition(pivotW.current);
        pivot.copy(pivotW.current);
        outer.current.rotation.set(initPitch, initYaw, 0);

        if (autoFrame && (camera as THREE.PerspectiveCamera).isPerspectiveCamera) {
            const persp = camera as THREE.PerspectiveCamera;
            const fitR = sphere.radius * s;
            const d = (fitR * 0.67) / Math.sin((persp.fov * Math.PI) / 180 / 2);
            persp.position.set(pivotW.current.x, pivotW.current.y, pivotW.current.z + d);
            persp.near = d / 10;
            persp.far = d * 10;
            persp.updateProjectionMatrix();
        }

        if (fadeIn) {
            let t = 0;
            const id = setInterval(() => {
                t += 0.05;
                const v = Math.min(t, 1);
                g.traverse((o) => {
                    if ((o as THREE.Mesh).isMesh) {
                        const mesh = o as THREE.Mesh;
                        if (mesh.material) {
                            (mesh.material as THREE.MeshStandardMaterial).opacity = v * opacity;
                        }
                    }
                });
                invalidate();
                if (v === 1) {
                    clearInterval(id);
                    onLoaded?.();
                }
            }, 16);
            return () => clearInterval(id);
        } else {
            onLoaded?.();
        }
    }, [content, autoFrame, camera, fadeIn, initPitch, initYaw, onLoaded, opacity, pivot, color]);

    useEffect(() => {
        if (!enableManualRotation || isTouch) return;
        const el = gl.domElement;
        let drag = false;
        let lx = 0, ly = 0;

        const down = (e: PointerEvent) => {
            if (e.pointerType !== 'mouse' && e.pointerType !== 'pen') return;
            drag = true;
            lx = e.clientX;
            ly = e.clientY;
            window.addEventListener('pointerup', up);
        };

        const move = (e: PointerEvent) => {
            if (!drag || !outer.current) return;
            const dx = e.clientX - lx;
            const dy = e.clientY - ly;
            lx = e.clientX;
            ly = e.clientY;
            outer.current.rotation.y += dx * ROTATE_SPEED;
            outer.current.rotation.x += dy * ROTATE_SPEED;
            vel.current = { x: dx * ROTATE_SPEED, y: dy * ROTATE_SPEED };
            invalidate();
        };

        const up = () => { drag = false; };

        el.addEventListener('pointerdown', down);
        el.addEventListener('pointermove', move);
        return () => {
            el.removeEventListener('pointerdown', down);
            el.removeEventListener('pointermove', move);
            window.removeEventListener('pointerup', up);
        };
    }, [gl, enableManualRotation]);

    useEffect(() => {
        if (isTouch) return;
        const mm = (e: PointerEvent) => {
            if (e.pointerType !== 'mouse') return;
            const nx = (e.clientX / window.innerWidth) * 2 - 1;
            const ny = (e.clientY / window.innerHeight) * 2 - 1;
            if (enableMouseParallax) tPar.current = { x: -nx * PARALLAX_MAG, y: -ny * PARALLAX_MAG };
            if (enableHoverRotation) tHov.current = { x: ny * HOVER_MAG, y: nx * HOVER_MAG };
            invalidate();
        };
        window.addEventListener('pointermove', mm);
        return () => window.removeEventListener('pointermove', mm);
    }, [enableMouseParallax, enableHoverRotation]);

    useFrame((_, dt) => {
        if (!outer.current) return;

        let need = false;
        cPar.current.x += (tPar.current.x - cPar.current.x) * PARALLAX_EASE;
        cPar.current.y += (tPar.current.y - cPar.current.y) * PARALLAX_EASE;
        const phx = cHov.current.x, phy = cHov.current.y;
        cHov.current.x += (tHov.current.x - cHov.current.x) * HOVER_EASE;
        cHov.current.y += (tHov.current.y - cHov.current.y) * HOVER_EASE;

        const ndc = pivotW.current.clone().project(camera);
        ndc.x += xOff + cPar.current.x;
        ndc.y += yOff + cPar.current.y;
        outer.current.position.copy(ndc.unproject(camera));

        outer.current.rotation.x += cHov.current.x - phx;
        outer.current.rotation.y += cHov.current.y - phy;

        if (autoRotate) {
            outer.current.rotation.y += autoRotateSpeed * dt;
            need = true;
        }

        outer.current.rotation.y += vel.current.x;
        outer.current.rotation.x += vel.current.y;
        vel.current.x *= INERTIA;
        vel.current.y *= INERTIA;
        if (Math.abs(vel.current.x) > 1e-4 || Math.abs(vel.current.y) > 1e-4) need = true;

        if (
            Math.abs(cPar.current.x - tPar.current.x) > 1e-4 ||
            Math.abs(cPar.current.y - tPar.current.y) > 1e-4 ||
            Math.abs(cHov.current.x - tHov.current.x) > 1e-4 ||
            Math.abs(cHov.current.y - tHov.current.y) > 1e-4
        ) need = true;

        if (need) invalidate();
    });

    if (!content) return null;
    return (
        <group ref={outer}>
            <group ref={inner}>
                <primitive object={content} />
            </group>
        </group>
    );
};

interface ModelViewerProps {
    url: string;
    width?: number | string;
    height?: number | string;
    modelXOffset?: number;
    modelYOffset?: number;
    defaultRotationX?: number;
    defaultRotationY?: number;
    defaultZoom?: number;
    minZoomDistance?: number;
    maxZoomDistance?: number;
    enableMouseParallax?: boolean;
    enableManualRotation?: boolean;
    enableHoverRotation?: boolean;
    enableManualZoom?: boolean;
    ambientIntensity?: number;
    keyLightIntensity?: number;
    fillLightIntensity?: number;
    rimLightIntensity?: number;
    environmentPreset?: 'apartment' | 'city' | 'dawn' | 'forest' | 'lobby' | 'night' | 'park' | 'studio' | 'sunset' | 'warehouse' | 'none';
    autoFrame?: boolean;
    placeholderSrc?: string;
    showScreenshotButton?: boolean;
    fadeIn?: boolean;
    autoRotate?: boolean;
    autoRotateSpeed?: number;
    onModelLoaded?: () => void;
    opacity?: number;
    color?: string;
    className?: string;
}

const ModelViewer = ({
    url,
    width = '100%',
    height = '100%',
    modelXOffset = 0,
    modelYOffset = 0,
    defaultRotationX = 0,
    defaultRotationY = 0,
    defaultZoom = 2,
    minZoomDistance = 0.5,
    maxZoomDistance = 10,
    enableMouseParallax = true,
    enableManualRotation = true,
    enableHoverRotation = true,
    enableManualZoom = true,
    ambientIntensity = 0.5,
    keyLightIntensity = 1,
    fillLightIntensity = 0.5,
    rimLightIntensity = 0.8,
    environmentPreset = 'studio',
    autoFrame = true,
    placeholderSrc,
    showScreenshotButton = false,
    fadeIn = true,
    autoRotate = true,
    autoRotateSpeed = 0.2,
    onModelLoaded,
    opacity = 0.15,
    color = "#FF3333",
    className = ''
}: ModelViewerProps) => {
    useEffect(() => { useGLTF.preload(url); }, [url]);
    const pivot = useRef(new THREE.Vector3()).current;
    const contactRef = useRef(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.Camera | null>(null);

    const initYaw = deg2rad(defaultRotationX);
    const initPitch = deg2rad(defaultRotationY);
    const camZ = Math.min(Math.max(defaultZoom, minZoomDistance), maxZoomDistance);

    return (
        <div
            className={className}
            style={{
                width,
                height,
                touchAction: 'pan-y pinch-zoom',
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                zIndex: 0
            }}
        >
            <Canvas
                shadows
                frameloop="demand"
                gl={{ preserveDrawingBuffer: true, alpha: true }}
                onCreated={({ gl, scene, camera }) => {
                    rendererRef.current = gl;
                    sceneRef.current = scene;
                    cameraRef.current = camera;
                    gl.toneMapping = THREE.ACESFilmicToneMapping;
                    gl.outputColorSpace = THREE.SRGBColorSpace;
                }}
                camera={{ fov: 50, position: [0, 0, camZ], near: 0.01, far: 100 }}
                style={{ touchAction: 'pan-y pinch-zoom' }}
            >
                {environmentPreset !== 'none' && <Environment preset={environmentPreset} background={false} />}

                <ambientLight intensity={ambientIntensity} />
                <directionalLight position={[5, 5, 5]} intensity={keyLightIntensity} castShadow />
                <directionalLight position={[-5, 2, 5]} intensity={fillLightIntensity} />
                <directionalLight position={[0, 4, -5]} intensity={rimLightIntensity} />

                <Suspense fallback={<Loader placeholderSrc={placeholderSrc} />}>
                    <ModelInner
                        url={url}
                        xOff={modelXOffset}
                        yOff={modelYOffset}
                        pivot={pivot}
                        initYaw={initYaw}
                        initPitch={initPitch}
                        minZoom={minZoomDistance}
                        maxZoom={maxZoomDistance}
                        enableMouseParallax={enableMouseParallax}
                        enableManualRotation={enableManualRotation}
                        enableHoverRotation={enableHoverRotation}
                        enableManualZoom={enableManualZoom}
                        autoFrame={autoFrame}
                        fadeIn={fadeIn}
                        autoRotate={autoRotate}
                        autoRotateSpeed={autoRotateSpeed}
                        onLoaded={onModelLoaded}
                        opacity={opacity}
                        color={color}
                    />
                </Suspense>

                {!isTouch && (
                    <DesktopControls pivot={pivot} min={minZoomDistance} max={maxZoomDistance} zoomEnabled={enableManualZoom} />
                )}
            </Canvas>
        </div>
    );
};

export default ModelViewer;
