"use client";

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

interface Text3DSceneProps {
    text: string;
    color?: string;
    opacity?: number;
    rotationSpeed?: number;
}

function Text3DScene({ text, color = "#ffffff", opacity = 0.08, rotationSpeed = 0.1 }: Text3DSceneProps) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // Subtle floating animation
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * rotationSpeed) * 0.1;
            meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * rotationSpeed * 0.5) * 0.05;
        }
    });

    return (
        <Center>
            <Text3D
                ref={meshRef}
                font="/fonts/helvetiker_bold.typeface.json"
                size={10}
                height={4}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.3}
                bevelSize={0.15}
                bevelOffset={0}
                bevelSegments={5}
            >
                {text}
                <meshStandardMaterial
                    color={color}
                    transparent
                    opacity={opacity}
                    metalness={0.5}
                    roughness={0.4}
                />
            </Text3D>
        </Center>
    );
}

interface Background3DTextProps {
    text?: string;
    color?: string;
    opacity?: number;
    className?: string;
}

export default function Background3DText({
    text = "4",
    color = "#ffffff",
    opacity = 0.08,
    className = ""
}: Background3DTextProps) {
    return (
        <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ zIndex: 0 }}>
            <Canvas
                camera={{ position: [0, 0, 20], fov: 50 }}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} />

                <Suspense fallback={null}>
                    <Text3DScene text={text} color={color} opacity={opacity} />
                </Suspense>
            </Canvas>
        </div>
    );
}
