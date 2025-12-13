"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Music, Headphones, Mic, Camera, Users } from "lucide-react";

interface MembershipPageProps {
    type: "music-makers" | "djs" | "podcasters" | "photographers" | "teams";
}

const membershipData = {
    "music-makers": {
        title: "Müzisyenler",
        subtitle: "Müzik prodüktörleri ve ses mühendisleri için",
        description: "Profesyonel stüdyo ekipmanları, akustik izolasyon ve yaratıcı bir ortam ile müziğini bir üst seviyeye taşı.",
        icon: Music,
        features: [
            "Profesyonel DAW stasyonları",
            "MIDI kontrolcüler ve synthler",
            "Yüksek kaliteli monitörler",
            "Akustik kabinler",
            "Mikrofon koleksiyonu",
            "Professional plugin'ler",
        ],
    },
    "djs": {
        title: "DJ'ler",
        subtitle: "DJ'ler ve performans sanatçıları için",
        description: "Pioneer, Denon ve daha fazlası ile donatılmış booth'larda pratik yap ve setlerini mükemmelleştir.",
        icon: Headphones,
        features: [
            "Pioneer CDJ-3000",
            "DJM-900NXS2 mixer",
            "Denon SC6000",
            "Technics 1210MK7",
            "Profesyonel monitörler",
            "Kayıt imkanı",
        ],
    },
    "podcasters": {
        title: "Podcaster'lar",
        subtitle: "Podcast yapımcıları ve içerik üreticileri için",
        description: "Akustik izolasyonlu stüdyolarda profesyonel podcast kayıtları yap.",
        icon: Mic,
        features: [
            "Shure SM7B mikrofonlar",
            "Rodecaster Pro II",
            "Akustik izolasyon",
            "Video kayıt imkanı",
            "Yeşil perde",
            "Profesyonel ışıklandırma",
        ],
    },
    "photographers": {
        title: "Fotoğrafçılar",
        subtitle: "Fotoğrafçılar ve görsel sanatçılar için",
        description: "Profesyonel ışık sistemleri ve backdrop'lar ile çekimlerini ger çekleştir.",
        icon: Camera,
        features: [
            "Profoto ışık sistemleri",
            "Çeşitli backdrop'lar",
            "Cyclorama duvarı",
            "Props ve akssesuarlar",
            "Makyaj odası",
            "Geniş çekim alanı",
        ],
    },
    "teams": {
        title: "Takımlar",
        subtitle: "Şirketler ve ekipler için özel çözümler",
        description: "Ekibiniz için özelleştirilmiş stüdyo çözümleri ve kurumsal üyelik avantajları.",
        icon: Users,
        features: [
            "Çoklu üye erişimi",
            "Özel stüdyo saatleri",
            "Toplantı odaları",
            "Etkinlik alanları",
            "Kurumsal faturalama",
            "Öncelikli destek",
        ],
    },
};

const pricingTiers = [
    {
        id: "basic",
        name: "Başlangıç",
        price: "₺2,499",
        period: "/ay",
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

export default function MembershipPageContent({ type }: MembershipPageProps) {
    const data = membershipData[type];
    const IconComponent = data.icon;

    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-24">
            {/* Hero Section */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#FF3333]/10 flex items-center justify-center">
                            <IconComponent className="w-10 h-10 text-[#FF3333]" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            {data.title} için <span className="text-[#FF3333]">REDD</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-4">{data.subtitle}</p>
                        <p className="text-gray-500">{data.description}</p>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
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
                            Stüdyolarda <span className="text-[#FF3333]">seni neler bekliyor?</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {data.features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-center gap-3 p-4 rounded-xl bg-[#1a1a1a] border border-[#222]"
                            >
                                <div className="w-8 h-8 rounded-lg bg-[#FF3333]/10 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-4 h-4 text-[#FF3333]" />
                                </div>
                                <span className="text-gray-300">{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Planını <span className="text-[#FF3333]">seç</span>
                        </h2>
                        <p className="text-gray-400">Tüm planlarda iptal ücreti yok.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {pricingTiers.map((tier, index) => (
                            <motion.div
                                key={tier.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative rounded-2xl border p-8 ${tier.highlighted
                                        ? "bg-gradient-to-br from-[#FF3333]/10 to-transparent border-[#FF3333] scale-105"
                                        : "bg-[#111] border-[#222]"
                                    }`}
                            >
                                {tier.highlighted && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF3333] text-white text-sm font-semibold px-4 py-1 rounded-full">
                                        En Popüler
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <h3 className="text-xl font-semibold text-white mb-4">{tier.name}</h3>
                                    <div className="flex items-end justify-center gap-1">
                                        <span className="text-4xl font-bold text-white">{tier.price}</span>
                                        <span className="text-gray-500 mb-1">{tier.period}</span>
                                    </div>
                                </div>

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

                                <Link
                                    href="/contact"
                                    className={`btn w-full ${tier.highlighted ? "btn-primary" : "btn-secondary"}`}
                                >
                                    Başvur
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section placeholder */}
            <section className="section bg-[#111]">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h2 className="text-3xl font-bold mb-4">Sorularınız mı var?</h2>
                        <p className="text-gray-400 mb-8">
                            Daha fazla bilgi için bizimle iletişime geçin.
                        </p>
                        <Link href="/contact" className="btn btn-secondary">
                            İletişime Geç
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
