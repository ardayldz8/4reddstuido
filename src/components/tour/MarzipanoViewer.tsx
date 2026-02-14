'use client';

import { useEffect, useRef } from 'react';

interface MarzipanoViewerProps {
    initialNode?: string;
    className?: string;
}

interface TourConfig {
    view: {
        start: { fov: number; tilt: number; pan: number };
        min?: { fov?: number; tilt?: number };
        max?: { fov?: number; tilt?: number };
    };
    nodes: Array<{
        id: string;
        input: {
            tileSize: number;
            levels: Array<{ width: number; height: number; preload: boolean }>;
        };
        hotspots: Array<{
            id: string;
            type: 'navigate' | 'info' | 'detail';
            title: string;
            tilt: number;
            pan: number;
            targetNode?: string;
        }>;
    }>;
}

interface MarzipanoTile {
    face: string | number;
    z: number;
    x: number;
    y: number;
}

interface MarzipanoScene {
    switchTo: (options?: { transitionDuration?: number }) => void;
    view: () => { setFov: (fov: number) => void };
    hotspotContainer: () => {
        createHotspot: (el: HTMLElement, coords: { yaw: number; pitch: number }) => void;
    };
}

interface MarzipanoViewerInstance {
    controls: () => {
        method: (name: string) => unknown;
        disableMethod: (name: string) => void;
        registerMethod: (name: string, method: unknown, active: boolean) => void;
    };
    createScene: (config: unknown) => MarzipanoScene;
    destroy?: () => void;
    _controlContainer?: HTMLElement;
}

interface MarzipanoModule {
    Viewer: new (container: HTMLElement, options: unknown) => MarzipanoViewerInstance;
    QtvrControlMethod: new (container: HTMLElement, pointerType: string, options: unknown) => unknown;
    DragControlMethod: new (container: HTMLElement, pointerType: string, options: unknown) => unknown;
    CubeGeometry: new (levels: Array<{ tileSize: number; size: number }>) => unknown;
    ImageUrlSource: new (factory: (tile: MarzipanoTile) => { url: string }) => unknown;
    RectilinearView: {
        new (params: { yaw: number; pitch: number; fov: number }, limiter: unknown): {
            setFov: (fov: number) => void;
        };
        limit: {
            traditional: (
                minTilt: number,
                maxTilt: number,
                minFov: number,
                maxFov: number
            ) => unknown;
        };
    };
    util: {
        degToRad: (deg: number) => number;
    };
}

const faceNameToIndex: Record<string, number> = {
    f: 0,
    r: 1,
    b: 2,
    l: 3,
    u: 4,
    d: 5
};

export default function MarzipanoViewer({ initialNode = 'node1', className }: MarzipanoViewerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const viewerRef = useRef<MarzipanoViewerInstance | null>(null);
    const scenesRef = useRef<Map<string, MarzipanoScene>>(new Map());

    useEffect(() => {
        let cancelled = false;
        const scenes = scenesRef.current;

        const init = async () => {
            if (!containerRef.current) return;

            const marzipanoModule = await import('marzipano');
            const Marzipano = ((marzipanoModule as { default?: unknown }).default ||
                marzipanoModule) as unknown as MarzipanoModule;

            const response = await fetch('/tour/config/tour-config.json');
            if (!response.ok) return;
            const config = (await response.json()) as TourConfig;
            if (cancelled) return;

            const viewer = new Marzipano.Viewer(containerRef.current, {
                stage: {
                    antialias: true
                }
            });
            viewerRef.current = viewer;

            const controls = viewer.controls();
            const controlContainer = viewer._controlContainer || containerRef.current;
            if (controls.method('mouseViewDrag')) {
                controls.disableMethod('mouseViewDrag');
            }
            if (controls.method('touchView')) {
                controls.disableMethod('touchView');
            }

            const smoothMouse = new Marzipano.QtvrControlMethod(controlContainer, 'mouse', {
                speed: 4,
                friction: 9,
                maxFrictionTime: 0.5
            });
            controls.registerMethod('smoothMouseQtvr', smoothMouse, true);

            const smoothTouch = new Marzipano.DragControlMethod(controlContainer, 'touch', {
                friction: 10,
                maxFrictionTime: 0.6
            });
            controls.registerMethod('smoothTouchDrag', smoothTouch, true);

            const initialFov = Marzipano.util.degToRad(150);
            const minTilt = Marzipano.util.degToRad(-90);
            const maxTilt = Marzipano.util.degToRad(90);
            const limiter = Marzipano.RectilinearView.limit.traditional(minTilt, maxTilt, initialFov, initialFov);

            config.nodes.forEach((node) => {
                const startYaw = Marzipano.util.degToRad(config.view.start.pan);
                const startPitch = Marzipano.util.degToRad(config.view.start.tilt);
                const levels = node.input.levels.map((level) => {
                    const baseSize = Math.max(level.width, level.height);
                    const tileSize = node.input.tileSize;
                    const size = Math.ceil(baseSize / tileSize) * tileSize;
                    return { tileSize, size };
                });

                const geometry = new Marzipano.CubeGeometry(levels);

                const source = new Marzipano.ImageUrlSource((tile: MarzipanoTile) => {
                    const faceIndex = typeof tile.face === 'string'
                        ? faceNameToIndex[tile.face]
                        : tile.face;

                    return {
                        url: `/tour/tiles/${node.id}/cf_${faceIndex}/l_${tile.z}/c_${tile.x}/tile_${tile.y}.jpg`
                    };
                });

                const view = new Marzipano.RectilinearView({
                    yaw: startYaw,
                    pitch: startPitch,
                    fov: initialFov
                }, limiter);

                const scene = viewer.createScene({
                    source,
                    geometry,
                    view,
                    pinFirstLevel: true
                });

                if (node.hotspots && node.hotspots.length) {
                    node.hotspots.forEach((hotspot) => {
                        if (hotspot.type !== 'navigate' || !hotspot.targetNode) return;

                        const el = document.createElement('button');
                        el.type = 'button';
                        el.textContent = hotspot.title;
                        el.setAttribute('aria-label', hotspot.title);
                        el.style.pointerEvents = 'auto';
                        el.style.padding = '0.5rem 0.75rem';
                        el.style.borderRadius = '9999px';
                        el.style.border = '1px solid rgba(255, 255, 255, 0.35)';
                        el.style.background = 'rgba(0, 0, 0, 0.45)';
                        el.style.color = '#fff';
                        el.style.fontSize = '0.8125rem';
                        el.style.fontWeight = '600';
                        el.style.cursor = 'pointer';
                        el.style.backdropFilter = 'blur(6px)';

                        el.addEventListener('click', () => {
                            const targetScene = scenes.get(hotspot.targetNode || '');
                            if (targetScene) {
                                targetScene.switchTo();
                                const view = targetScene.view();
                                view.setFov(initialFov);
                            }
                        });

                        const yaw = -Marzipano.util.degToRad(hotspot.pan);
                        const pitch = -Marzipano.util.degToRad(hotspot.tilt);
                        scene.hotspotContainer().createHotspot(el, { yaw, pitch });
                    });
                }

                scenes.set(node.id, scene);
            });

            const initialScene = scenes.get(initialNode) || scenes.values().next().value;
            if (initialScene) {
                initialScene.switchTo({ transitionDuration: 0 });
                const view = initialScene.view();
                view.setFov(initialFov);
                requestAnimationFrame(() => view.setFov(initialFov));
            }
        };

        init();

        return () => {
            cancelled = true;
            scenes.clear();
            if (viewerRef.current?.destroy) {
                viewerRef.current.destroy();
            }
            viewerRef.current = null;
        };
    }, [initialNode]);

    return <div ref={containerRef} className={className} />;
}
