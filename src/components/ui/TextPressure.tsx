"use client";

import React, { useRef, useEffect, useState } from "react";

interface TextPressureProps {
    text: string;
    fontFamily?: string;
    fontUrl?: string;
    width?: boolean;
    weight?: boolean;
    italic?: boolean;
    textColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    minFontSize?: number;
    className?: string;
}

export default function TextPressure({
    text = "REDD",
    fontFamily = "Outfit",
    fontUrl,
    width = true,
    weight = true,
    italic = true,
    textColor = "#FF3333",
    strokeColor = "#FF3333",
    strokeWidth = 0,
    minFontSize = 36,
    className = "",
}: TextPressureProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const spansRef = useRef<HTMLSpanElement[]>([]);
    const [fontSize, setFontSize] = useState(minFontSize);
    const [cursor, setCursor] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Load font if URL provided
        if (fontUrl) {
            const font = new FontFace(fontFamily, `url(${fontUrl})`);
            font.load().then((loadedFont) => {
                document.fonts.add(loadedFont);
            });
        }
    }, [fontFamily, fontUrl]);

    useEffect(() => {
        const updateFontSize = () => {
            if (!containerRef.current || !titleRef.current) return;

            const containerWidth = containerRef.current.offsetWidth;
            let newFontSize = containerWidth / (text.length * 0.5);
            newFontSize = Math.max(newFontSize, minFontSize);
            setFontSize(newFontSize);
        };

        updateFontSize();
        window.addEventListener("resize", updateFontSize);
        return () => window.removeEventListener("resize", updateFontSize);
    }, [text.length, minFontSize]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCursor({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        if (!titleRef.current) return;

        const spans = spansRef.current;

        spans.forEach((span) => {
            if (!span) return;

            const rect = span.getBoundingClientRect();
            const charCenterX = rect.left + rect.width / 2;
            const charCenterY = rect.top + rect.height / 2;

            const distance = Math.sqrt(
                Math.pow(cursor.x - charCenterX, 2) + Math.pow(cursor.y - charCenterY, 2)
            );

            // Max effect radius
            const maxDistance = 300;
            const proximity = Math.max(0, 1 - distance / maxDistance);

            // Font variation values
            const fontWeight = weight ? 100 + proximity * 800 : 400;
            const fontWidth = width ? 100 + proximity * 25 : 100;
            const fontItalic = italic ? proximity * 12 : 0;

            span.style.fontWeight = String(Math.round(fontWeight));
            span.style.fontStretch = `${Math.round(fontWidth)}%`;
            span.style.fontStyle = fontItalic > 0 ? `oblique ${fontItalic}deg` : "normal";
            span.style.opacity = String(0.4 + proximity * 0.6);
        });
    }, [cursor, weight, width, italic]);

    return (
        <div
            ref={containerRef}
            className={`text-pressure-wrapper ${className}`}
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <h1
                ref={titleRef}
                className="text-pressure-title"
                style={{
                    fontFamily,
                    fontSize: `${fontSize}px`,
                    textAlign: "center",
                    margin: 0,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    color: textColor,
                    whiteSpace: "nowrap",
                    WebkitTextStroke: strokeWidth > 0 ? `${strokeWidth}px ${strokeColor}` : undefined,
                }}
            >
                {text.split("").map((char, i) => (
                    <span
                        key={i}
                        ref={(el) => {
                            if (el) spansRef.current[i] = el;
                        }}
                        style={{
                            display: "inline-block",
                            transition: "font-weight 0.1s ease, font-stretch 0.1s ease, opacity 0.1s ease",
                            willChange: "font-weight, font-stretch, opacity",
                        }}
                    >
                        {char}
                    </span>
                ))}
            </h1>
        </div>
    );
}
