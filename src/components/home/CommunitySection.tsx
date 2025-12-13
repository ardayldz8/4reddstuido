"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Calendar, Zap, Heart } from "lucide-react";

const features = [
    {
        icon: Users,
        title: "500+ Yaratıcı Topluluk",
        description: "Benzer tutkuları paylaşan yaratıcılarla tanış ve işbirliği yap.",
    },
    {
        icon: Calendar,
        title: "Özel Etkinlikler",
        description: "Workshop'lar, masterclass'lar ve networking etkinliklerine erişim.",
    },
    {
        icon: Zap,
        title: "7/24 Erişim",
        description: "İlham geldiği anda stüdyona git, gece gündüz çalış.",
    },
    {
        icon: Heart,
        title: "Destek Ekibi",
        description: "Teknik ekibimiz her zaman yanında, her sorunun çözümü bizde.",
    },
];

export default function CommunitySection() {
    return (
        <section className="section bg-[#111]">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-[#FF3333] font-semibold tracking-wider uppercase mb-4">
                            Sadece bir stüdyo değil
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Bir <span className="text-gradient">topluluk.</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            REDD sadece stüdyo değil, aynı zamanda tutkulu yaratıcıların bir araya
                            geldiği bir topluluk. Etkinlikler, workshop'lar ve networking fırsatlarıyla
                            kariyerini bir üst seviyeye taşı.
                        </p>

                        {/* Features Grid */}
                        <div className="grid sm:grid-cols-2 gap-6 mb-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-[#FF3333]/10 flex items-center justify-center flex-shrink-0">
                                        <feature.icon className="w-5 h-5 text-[#FF3333]" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                                        <p className="text-gray-500 text-sm">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <Link href="/events" className="btn btn-primary">
                            Etkinlikleri Keşfet
                        </Link>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Main Image Placeholder */}
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#222]">
                            {/* Decorative Elements */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#FF3333]/10 flex items-center justify-center">
                                        <Users className="w-12 h-12 text-[#FF3333]" />
                                    </div>
                                    <p className="text-gray-500">Topluluk Görseli</p>
                                </div>
                            </div>

                            {/* Floating Cards */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-8 right-8 bg-[#1a1a1a]/90 backdrop-blur-sm border border-[#333] rounded-xl p-4"
                            >
                                <p className="text-2xl font-bold text-white">100+</p>
                                <p className="text-gray-500 text-sm">Etkinlik / Yıl</p>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute bottom-8 left-8 bg-[#1a1a1a]/90 backdrop-blur-sm border border-[#333] rounded-xl p-4"
                            >
                                <p className="text-2xl font-bold text-[#FF3333]">500+</p>
                                <p className="text-gray-500 text-sm">Aktif Üye</p>
                            </motion.div>
                        </div>

                        {/* Accent Glow */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#FF3333]/20 rounded-full blur-3xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
