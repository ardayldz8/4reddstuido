"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Music, Headphones, Mic, Camera, ArrowRight } from "lucide-react";

const studioTypes = [
    {
        id: "production",
        title: "Prodüksiyon Stüdyoları",
        description: "Profesyonel ses mühendisliği ekipmanları ile donatılmış stüdyolar.",
        icon: Music,
        href: "/studios?type=production",
        color: "#FF3333",
    },
    {
        id: "dj",
        title: "DJ Pratik Odaları",
        description: "Pioneer, Denon ve daha fazlası ile donatılmış DJ booth'ları.",
        icon: Headphones,
        href: "/studios?type=dj",
        color: "#FF5555",
    },
    {
        id: "podcast",
        title: "Podcast Stüdyoları",
        description: "Akustik izolasyonlu, profesyonel kayıt ortamları.",
        icon: Mic,
        href: "/studios?type=podcast",
        color: "#FF7777",
    },
    {
        id: "photo",
        title: "Fotoğraf Stüdyoları",
        description: "Işık sistemleri ve backdrop'lar ile tam donanımlı stüdyolar.",
        icon: Camera,
        href: "/studios?type=photo",
        color: "#FF9999",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export default function StudioTypes() {
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
                        Her yaratıcı için{" "}
                        <span className="text-[#FF3333]">özel stüdyolar</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Müzik prodüksiyonundan fotoğraf çekimine, ihtiyacınız olan her alan için
                        profesyonel ekipmanlarla donatılmış stüdyolarımız sizi bekliyor.
                    </p>
                </motion.div>

                {/* Studio Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {studioTypes.map((studio) => (
                        <motion.div key={studio.id} variants={cardVariants}>
                            <Link href={studio.href} className="group block h-full">
                                <div className="card h-full flex flex-col hover:border-[#FF3333]/50 transition-all duration-300">
                                    {/* Icon */}
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                                        style={{ backgroundColor: `${studio.color}20` }}
                                    >
                                        <studio.icon className="w-7 h-7" style={{ color: studio.color }} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#FF3333] transition-colors">
                                        {studio.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm flex-grow">
                                        {studio.description}
                                    </p>

                                    {/* Arrow */}
                                    <div className="mt-6 flex items-center text-[#FF3333] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                        Keşfet
                                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
