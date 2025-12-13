"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Music, Headphones, Mic, Camera, Users, Clock, MapPin, Filter } from "lucide-react";

const studioTypes = [
    { id: "all", label: "Tümü", icon: Filter },
    { id: "production", label: "Prodüksiyon", icon: Music },
    { id: "dj", label: "DJ", icon: Headphones },
    { id: "podcast", label: "Podcast", icon: Mic },
    { id: "photo", label: "Fotoğraf", icon: Camera },
];

const studios = [
    {
        id: 1,
        name: "Studio A",
        type: "production",
        description: "Profesyonel müzik prodüksiyonu için tam donanımlı stüdyo.",
        capacity: 4,
        equipment: ["Neumann U87", "SSL Konsol", "ProTools HD"],
        hourlyRate: 250,
        location: "Beşiktaş",
    },
    {
        id: 2,
        name: "Studio B",
        type: "production",
        description: "Vokal kayıt ve mixing için optimize edilmiş stüdyo.",
        capacity: 3,
        equipment: ["Shure SM7B", "Universal Audio", "Ableton Live"],
        hourlyRate: 200,
        location: "Beşiktaş",
    },
    {
        id: 3,
        name: "DJ Room 1",
        type: "dj",
        description: "Pioneer CDJ-3000 ve DJM-900NXS2 ile donatılmış booth.",
        capacity: 2,
        equipment: ["Pioneer CDJ-3000", "DJM-900NXS2", "JBL Monitörler"],
        hourlyRate: 150,
        location: "Beşiktaş",
    },
    {
        id: 4,
        name: "DJ Room 2",
        type: "dj",
        description: "Denon SC6000 ve X1850 mixer ile donatılmış booth.",
        capacity: 2,
        equipment: ["Denon SC6000", "X1850 Mixer", "KRK Monitörler"],
        hourlyRate: 150,
        location: "Beşiktaş",
    },
    {
        id: 5,
        name: "Podcast Studio",
        type: "podcast",
        description: "4 kişilik akustik izolasyonlu podcast stüdyosu.",
        capacity: 4,
        equipment: ["Shure SM7B x4", "Rodecaster Pro II", "4K Kamera"],
        hourlyRate: 200,
        location: "Beşiktaş",
    },
    {
        id: 6,
        name: "Photo Studio",
        type: "photo",
        description: "100m² çekim alanı, profesyonel ışık sistemleri.",
        capacity: 8,
        equipment: ["Profoto D2", "Softboxlar", "Backdrop'lar"],
        hourlyRate: 300,
        location: "Beşiktaş",
    },
];

const getTypeIcon = (type: string) => {
    switch (type) {
        case "production": return Music;
        case "dj": return Headphones;
        case "podcast": return Mic;
        case "photo": return Camera;
        default: return Music;
    }
};

export default function StudiosPage() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredStudios = activeFilter === "all"
        ? studios
        : studios.filter(s => s.type === activeFilter);

    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-24">
            {/* Hero Section */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="text-[#FF3333]">Stüdyolar</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Profesyonel ekipmanlarla donatılmış stüdyolarımızdan birini seç,
                            hemen rezervasyon yap.
                        </p>
                    </motion.div>

                    {/* Filters */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-3 mb-12"
                    >
                        {studioTypes.map((type) => (
                            <button
                                key={type.id}
                                onClick={() => setActiveFilter(type.id)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeFilter === type.id
                                        ? "bg-[#FF3333] text-white"
                                        : "bg-[#111] text-gray-400 border border-[#222] hover:border-[#333]"
                                    }`}
                            >
                                <type.icon className="w-4 h-4" />
                                {type.label}
                            </button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Studios Grid */}
            <section className="pb-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredStudios.map((studio, index) => {
                            const TypeIcon = getTypeIcon(studio.type);
                            return (
                                <motion.div
                                    key={studio.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="card h-full flex flex-col hover:border-[#FF3333]/50 transition-all group">
                                        {/* Image Placeholder */}
                                        <div className="aspect-video rounded-lg bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] mb-4 flex items-center justify-center">
                                            <TypeIcon className="w-12 h-12 text-[#FF3333]/30" />
                                        </div>

                                        {/* Content */}
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <h3 className="text-xl font-semibold text-white group-hover:text-[#FF3333] transition-colors">
                                                    {studio.name}
                                                </h3>
                                                <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                                                    <TypeIcon className="w-4 h-4" />
                                                    <span className="capitalize">{studio.type === "production" ? "Prodüksiyon" : studio.type === "dj" ? "DJ" : studio.type === "podcast" ? "Podcast" : "Fotoğraf"}</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xl font-bold text-white">₺{studio.hourlyRate}</p>
                                                <p className="text-gray-500 text-xs">/saat</p>
                                            </div>
                                        </div>

                                        <p className="text-gray-400 text-sm mb-4 flex-grow">
                                            {studio.description}
                                        </p>

                                        {/* Meta */}
                                        <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                                            <span className="flex items-center gap-1">
                                                <Users className="w-4 h-4" />
                                                {studio.capacity} kişi
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {studio.location}
                                            </span>
                                        </div>

                                        {/* Equipment Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {studio.equipment.slice(0, 3).map((eq) => (
                                                <span
                                                    key={eq}
                                                    className="text-xs text-gray-400 bg-[#1a1a1a] px-2 py-1 rounded"
                                                >
                                                    {eq}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <Link href={`/studios/${studio.id}`} className="btn btn-primary w-full">
                                            Rezervasyon Yap
                                        </Link>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
