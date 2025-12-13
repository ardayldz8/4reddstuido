"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Target, Heart, Zap, ArrowRight } from "lucide-react";

const values = [
    {
        icon: Target,
        title: "Kalite",
        description: "Her detayda profesyonellik. Ekipmanlarımızdan stüdyo tasarımına kadar en iyisini sunuyoruz.",
    },
    {
        icon: Users,
        title: "Topluluk",
        description: "Birlikte daha güçlüyüz. Yaratıcıları bir araya getirerek işbirliği ve büyüme fırsatları yaratıyoruz.",
    },
    {
        icon: Heart,
        title: "Tutku",
        description: "Müziğe ve sanata olan tutkumuz her yaptığımızın temelinde. Bu tutku sizi de etkilesin.",
    },
    {
        icon: Zap,
        title: "Erişilebilirlik",
        description: "Profesyonel stüdyolar artık herkes için. Esnek üyelik planları ile hayallerine ulaş.",
    },
];

const team = [
    {
        name: "Ahmet Yılmaz",
        role: "Kurucu & CEO",
        bio: "10+ yıllık müzik prodüksiyonu deneyimi",
    },
    {
        name: "Elif Kaya",
        role: "Stüdyo Direktörü",
        bio: "Profesyonel ses mühendisi",
    },
    {
        name: "Mert Demir",
        role: "Topluluk Yöneticisi",
        bio: "Etkinlik ve topluluk uzmanı",
    },
    {
        name: "Zeynep Arslan",
        role: "Teknik Destek",
        bio: "Ekipman ve teknik danışman",
    },
];

export default function WhoWeArePage() {
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
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Biz <span className="text-[#FF3333]">REDD</span>&apos;iz
                        </h1>
                        <p className="text-gray-400 text-xl">
                            Ciddi yaratıcılar için ciddi bir yer yaratmak üzere yola çıktık.
                            Profesyonel stüdyo erişimini herkes için mümkün kılmak misyonumuz.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="section bg-[#111]">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                <span className="text-[#FF3333]">Hikayemiz</span>
                            </h2>
                            <div className="space-y-4 text-gray-400">
                                <p>
                                    REDD, 2024 yılında İstanbul&apos;da kuruldu. Amacımız basitti:
                                    Profesyonel stüdyo kalitesini, pahalı ekipmanları tek başına
                                    karşılayamayan yaratıcılara ulaştırmak.
                                </p>
                                <p>
                                    Kendimiz de müzisyen ve prodüktör olarak, kaliteli bir stüdyoya
                                    erişmenin ne kadar zor ve pahalı olduğunu biliyorduk. Saatlik
                                    kiralama maliyetleri, ekipman yatırımları... Bunların hepsi
                                    yaratıcılığın önünde birer engel oluyordu.
                                </p>
                                <p>
                                    Bugün, REDD olarak yüzlerce yaratıcıya ev sahipliği yapıyoruz.
                                    Sadece stüdyo değil, bir topluluk, bir aile olduk.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#222] flex items-center justify-center">
                                <div className="text-center p-8">
                                    <div className="w-24 h-24 mx-auto mb-4 rounded-xl bg-[#FF3333]/10 flex items-center justify-center">
                                        <span className="text-4xl font-bold text-[#FF3333]">R</span>
                                    </div>
                                    <p className="text-gray-500">Stüdyo Görseli</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
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
                            <span className="text-[#FF3333]">Değerlerimiz</span>
                        </h2>
                        <p className="text-gray-400">Her kararımızın arkasındaki ilkeler</p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="card text-center"
                            >
                                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#FF3333]/10 flex items-center justify-center">
                                    <value.icon className="w-7 h-7 text-[#FF3333]" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                                <p className="text-gray-400 text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
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
                            <span className="text-[#FF3333]">Ekibimiz</span>
                        </h2>
                        <p className="text-gray-400">REDD&apos;i mümkün kılan insanlar</p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#222] flex items-center justify-center">
                                    <Users className="w-10 h-10 text-[#FF3333]/30" />
                                </div>
                                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                                <p className="text-[#FF3333] text-sm mb-1">{member.role}</p>
                                <p className="text-gray-500 text-sm">{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Careers CTA */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl mx-auto text-center"
                    >
                        <h2 className="text-3xl font-bold mb-4">Ekibimize Katıl</h2>
                        <p className="text-gray-400 mb-8">
                            REDD büyüyor! Tutkulu ve yetenekli insanları ekibimize katılmaya davet ediyoruz.
                        </p>
                        <Link href="/careers" className="btn btn-primary">
                            Açık Pozisyonlar
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
