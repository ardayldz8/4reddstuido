"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

const membershipTiers = [
    {
        id: "basic",
        name: "Başlangıç",
        price: "₺2,499",
        period: "/ay",
        description: "Stüdyo deneyimine ilk adım.",
        features: [
            "Aylık 20 saat stüdyo",
            "Temel ekipman erişimi",
            "Topluluk etkinlikleri",
            "Hafta içi erişim",
        ],
        highlighted: false,
    },
    {
        id: "pro",
        name: "Pro",
        price: "₺4,999",
        period: "/ay",
        description: "Ciddi yaratıcılar için tam erişim.",
        features: [
            "Aylık 50 saat stüdyo",
            "Tüm ekipmanlara erişim",
            "Özel workshop'lar",
            "7/24 erişim",
            "Öncelikli rezervasyon",
            "1 ücretsiz misafir/ay",
        ],
        highlighted: true,
    },
    {
        id: "unlimited",
        name: "Sınırsız",
        price: "₺7,999",
        period: "/ay",
        description: "Profesyoneller için sınırsız.",
        features: [
            "Sınırsız stüdyo saati",
            "Premium ekipmanlara erişim",
            "Tüm workshop'lara ücretsiz katılım",
            "7/24 erişim",
            "Öncelikli rezervasyon",
            "3 ücretsiz misafir/ay",
            "Kişisel depolama alanı",
        ],
        highlighted: false,
    },
];

export default function MembershipPreview() {
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
                        <span className="text-[#FF3333]">Üyelik</span> Planları
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        İhtiyacına uygun planı seç, hemen yaratmaya başla.
                        Tüm planlarda iptal ücreti yok.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-start pt-6">
                    {membershipTiers.map((tier, index) => (
                        <motion.div
                            key={tier.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative rounded-2xl border p-6 lg:p-8 transition-all duration-300 ${tier.highlighted
                                ? "bg-gradient-to-br from-[#FF3333]/10 to-transparent border-[#FF3333] z-10"
                                : "bg-[#111] border-[#222] hover:border-[#333]"
                                }`}
                        >
                            {/* Popular Badge */}
                            {tier.highlighted && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF3333] text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                                    En Popüler
                                </div>
                            )}

                            {/* Tier Info */}
                            <div className="text-center mb-8">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {tier.name}
                                </h3>
                                <p className="text-gray-500 text-sm mb-4">{tier.description}</p>
                                <div className="flex items-end justify-center gap-1">
                                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                                    <span className="text-gray-500 mb-1">{tier.period}</span>
                                </div>
                            </div>

                            {/* Features */}
                            <ul className="space-y-4 mb-8">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-[#FF3333]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-[#FF3333]" />
                                        </div>
                                        <span className="text-gray-300 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Link
                                href={`/membership/${tier.id}`}
                                className={`btn w-full ${tier.highlighted ? "btn-primary" : "btn-secondary"
                                    }`}
                            >
                                Planı Seç
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center text-gray-500 text-sm mt-12"
                >
                    Tüm fiyatlara KDV dahildir. Kurumsal planlar için{" "}
                    <Link href="/contact" className="text-[#FF3333] hover:underline">
                        bizimle iletişime geçin
                    </Link>
                    .
                </motion.p>
            </div>
        </section>
    );
}
