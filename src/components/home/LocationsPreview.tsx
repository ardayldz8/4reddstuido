"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const locations = [
    {
        id: "istanbul-besiktas",
        name: "İstanbul - Beşiktaş",
        address: "Beşiktaş, İstanbul",
        studios: 12,
        features: ["Prodüksiyon", "DJ", "Podcast", "Fotoğraf"],
        image: null, // Placeholder
        isComingSoon: false,
    },
    {
        id: "istanbul-kadikoy",
        name: "İstanbul - Kadıköy",
        address: "Kadıköy, İstanbul",
        studios: 0,
        features: ["Prodüksiyon", "DJ", "Podcast"],
        image: null,
        isComingSoon: true,
    },
];

export default function LocationsPreview() {
    return (
        <section className="section bg-[#0a0a0a]">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <span className="text-[#FF3333]">Lokasyonlarımız</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        İstanbul'un en merkezi noktalarında, profesyonel stüdyolarımızla hizmetinizdeyiz.
                    </p>
                </motion.div>

                {/* Location Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {locations.map((location, index) => (
                        <motion.div
                            key={location.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <Link
                                href={location.isComingSoon ? "#" : `/locations/${location.id}`}
                                className={`group block relative overflow-hidden rounded-2xl border transition-all duration-300 ${location.isComingSoon
                                        ? "border-[#222] cursor-not-allowed opacity-60"
                                        : "border-[#222] hover:border-[#FF3333]/50"
                                    }`}
                            >
                                {/* Image/Placeholder */}
                                <div className="aspect-[16/10] bg-gradient-to-br from-[#1a1a1a] to-[#111] relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <MapPin className="w-12 h-12 text-[#FF3333]/30" />
                                    </div>

                                    {/* Coming Soon Badge */}
                                    {location.isComingSoon && (
                                        <div className="absolute top-4 right-4 bg-[#FF3333] text-white text-xs font-semibold px-3 py-1 rounded-full">
                                            Yakında
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6 bg-[#111]">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-[#FF3333] transition-colors">
                                                {location.name}
                                            </h3>
                                            <p className="text-gray-500 text-sm flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {location.address}
                                            </p>
                                        </div>
                                        {!location.isComingSoon && (
                                            <div className="text-right">
                                                <p className="text-2xl font-bold text-white">{location.studios}</p>
                                                <p className="text-gray-500 text-xs">Stüdyo</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2">
                                        {location.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="text-xs text-gray-400 bg-[#1a1a1a] px-3 py-1 rounded-full"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Arrow */}
                                    {!location.isComingSoon && (
                                        <div className="mt-4 flex items-center text-[#FF3333] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                            Keşfet
                                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    )}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
