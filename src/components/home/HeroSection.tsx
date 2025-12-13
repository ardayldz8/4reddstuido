"use client";

import { motion } from "framer-motion";
import LightRays from "@/components/ui/LightRays";
import dynamic from "next/dynamic";

// Dynamic import to avoid SSR issues with Three.js
const ModelViewer = dynamic(() => import("@/components/ui/ModelViewer"), {
    ssr: false,
});

const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: "easeOut" as const,
        },
    }),
};

export default function HeroSection() {
    const reddLetters = "REDD".split("");
    const studioLetters = "STUDIO".split("");

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
            {/* 3D Model Background - Number 4 */}
            <ModelViewer
                url="/models/number4.glb"
                opacity={0.4}
                autoRotate={false}
                defaultZoom={2}
                modelXOffset={0}
                modelYOffset={-0.1}
                defaultRotationY={-15}
                enableMouseParallax={false}
                enableHoverRotation={false}
                enableManualZoom={false}
                fadeIn={true}
                environmentPreset="none"
            />

            {/* Light Rays Background - Coming from Left */}
            <LightRays
                raysOrigin="left"
                raysColor="#FF3333"
                raysSpeed={1.0}
                lightSpread={2.0}
                rayLength={2.5}
                fadeDistance={2.0}
                saturation={1.5}
                followMouse={true}
                mouseInfluence={0.08}
                noiseAmount={0.02}
                distortion={0.03}
            />

            {/* Content - REDD STUDIO Logo */}
            <div className="relative z-10 flex items-center justify-center px-6">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-start"
                >
                    {/* First Row: REDD + Red Square */}
                    <div className="flex items-center">
                        {/* REDD Letters */}
                        <div className="flex" style={{ letterSpacing: "0.35em" }}>
                            {reddLetters.map((letter, i) => (
                                <motion.span
                                    key={i}
                                    custom={i}
                                    variants={letterVariants}
                                    className="text-7xl md:text-8xl lg:text-[10rem] font-black text-white inline-block"
                                    style={{
                                        fontFamily: "Outfit, sans-serif",
                                        textShadow: "0 0 40px rgba(255, 51, 51, 0.3)",
                                        marginRight: "-0.02em",
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        color: "#FF3333",
                                        textShadow: "0 0 60px rgba(255, 51, 51, 0.8)",
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </div>

                        {/* Red Square - Same animation as letters */}
                        <motion.div
                            className="bg-[#FF3333]"
                            style={{
                                width: "clamp(48px, 7vw, 115px)",
                                height: "clamp(48px, 7vw, 115px)",
                                marginLeft: "0.4rem",
                                marginTop: "0.15em",
                                boxShadow: "0 0 40px rgba(255, 51, 51, 0.3)",
                            }}
                            custom={4} // After the 4 letters of REDD
                            variants={letterVariants}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 60px rgba(255, 51, 51, 0.8)",
                                transition: { duration: 0.2 }
                            }}
                        />
                    </div>

                    {/* Second Row: STUDIO */}
                    <div className="flex" style={{ letterSpacing: "-0.05em" }}>
                        {studioLetters.map((letter, i) => (
                            <motion.span
                                key={i}
                                custom={i + 5}
                                variants={letterVariants}
                                className="text-7xl md:text-8xl lg:text-[10rem] font-black text-white inline-block"
                                style={{
                                    fontFamily: "Outfit, sans-serif",
                                    textShadow: "0 0 40px rgba(255, 51, 51, 0.3)",
                                    marginRight: "-0.02em",
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    color: "#FF3333",
                                    textShadow: "0 0 60px rgba(255, 51, 51, 0.8)",
                                    transition: { duration: 0.2 }
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />


        </section>
    );
}
