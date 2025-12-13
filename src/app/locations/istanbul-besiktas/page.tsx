"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Clock, Music, Headphones, Mic, Camera, ArrowRight } from "lucide-react";

const studioTypes = [
    { icon: Music, label: "Prodüksiyon" },
    { icon: Headphones, label: "DJ" },
    { icon: Mic, label: "Podcast" },
    { icon: Camera, label: "Fotoğraf" },
];

export default function LocationPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-24">
            {/* Hero Section */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-2 text-[#FF3333] mb-4">
                                <MapPin className="w-5 h-5" />
                                <span className="font-semibold">İstanbul</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                REDD <span className="text-[#FF3333]">Beşiktaş</span>
                            </h1>
                            <p className="text-gray-400 text-lg mb-8">
                                İstanbul'un kalbinde, Beşiktaş'ın en merkezi noktasında
                                profesyonel stüdyolarımızla hizmetinizdeyiz. Ulaşımı kolay,
                                7/24 erişim imkanı sunan lokasyonumuz yaratıcılığınız için
                                ideal ortamı sunuyor.
                            </p>

                            {/* Quick Info */}
                            <div className="flex flex-wrap gap-6 mb-8">
                                <div className="flex items-center gap-2 text-gray-300">
                                    <Clock className="w-5 h-5 text-[#FF3333]" />
                                    <span>7/24 Açık</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300">
                                    <Music className="w-5 h-5 text-[#FF3333]" />
                                    <span>12 Stüdyo</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/studios" className="btn btn-primary">
                                    Stüdyo Rezervasyonu
                                </Link>
                                <a
                                    href="https://maps.google.com/?q=Besiktas,Istanbul"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary"
                                >
                                    Yol Tarifi Al
                                </a>
                            </div>
                        </motion.div>

                        {/* Right - Map Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-[#222] flex items-center justify-center">
                                <div className="text-center p-8">
                                    <MapPin className="w-16 h-16 text-[#FF3333]/30 mx-auto mb-4" />
                                    <p className="text-gray-500">Harita</p>
                                    <p className="text-gray-600 text-sm mt-2">Beşiktaş, İstanbul</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Studio Types */}
            <section className="section bg-[#111]">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Mevcut <span className="text-[#FF3333]">Stüdyo Türleri</span>
                        </h2>
                        <p className="text-gray-400">
                            Beşiktaş lokasyonumuzda bulunan stüdyo çeşitleri
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {studioTypes.map((type, index) => (
                            <motion.div
                                key={type.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link href={`/studios?type=${type.label.toLowerCase()}`} className="group block">
                                    <div className="card text-center hover:border-[#FF3333]/50 transition-all">
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-[#FF3333]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <type.icon className="w-8 h-8 text-[#FF3333]" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-white group-hover:text-[#FF3333] transition-colors">
                                            {type.label}
                                        </h3>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Address & Contact */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="card"
                        >
                            <h3 className="text-xl font-semibold text-white mb-4">Adres</h3>
                            <p className="text-gray-400 mb-4">
                                Beşiktaş Mahallesi<br />
                                Örnek Sokak No: 123<br />
                                Beşiktaş, İstanbul 34353
                            </p>
                            <a
                                href="https://maps.google.com/?q=Besiktas,Istanbul"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-[#FF3333] hover:underline"
                            >
                                Haritada Göster
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="card"
                        >
                            <h3 className="text-xl font-semibold text-white mb-4">Çalışma Saatleri</h3>
                            <div className="space-y-2 text-gray-400">
                                <p className="flex justify-between">
                                    <span>Pazartesi - Cuma</span>
                                    <span className="text-white">7/24</span>
                                </p>
                                <p className="flex justify-between">
                                    <span>Cumartesi</span>
                                    <span className="text-white">7/24</span>
                                </p>
                                <p className="flex justify-between">
                                    <span>Pazar</span>
                                    <span className="text-white">7/24</span>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
