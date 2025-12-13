"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, MapPin, Users, Filter } from "lucide-react";
import { useState } from "react";

const categories = [
    { id: "all", label: "Tümü" },
    { id: "workshop", label: "Workshop" },
    { id: "masterclass", label: "Masterclass" },
    { id: "networking", label: "Networking" },
    { id: "showcase", label: "Showcase" },
];

const events = [
    {
        id: 1,
        title: "Beat Making Workshop",
        description: "Profesyonel prodüktörlerle beat yapımı teknikleri. Temel ritim yapılarından karmaşık aranjmanlara kadar her şeyi öğren.",
        date: "15 Aralık 2024",
        time: "14:00 - 18:00",
        location: "Beşiktaş",
        category: "workshop",
        capacity: 20,
        spotsLeft: 8,
        price: "₺500",
        instructor: "DJ Maestro",
    },
    {
        id: 2,
        title: "DJ Masterclass",
        description: "Deneyimli DJ'lerden mixing ve scratching teknikleri. Harmonic mixing, beat matching ve performans dinamikleri.",
        date: "20 Aralık 2024",
        time: "16:00 - 20:00",
        location: "Beşiktaş",
        category: "masterclass",
        capacity: 15,
        spotsLeft: 5,
        price: "₺750",
        instructor: "DJ Thunder",
    },
    {
        id: 3,
        title: "Networking Night",
        description: "Yaratıcı topluluğumuzla tanışma ve işbirliği fırsatları. Prodüktörler, DJ'ler ve müzisyenlerle bağlantı kur.",
        date: "25 Aralık 2024",
        time: "19:00 - 23:00",
        location: "Beşiktaş",
        category: "networking",
        capacity: 50,
        spotsLeft: 22,
        price: "Ücretsiz",
        instructor: null,
    },
    {
        id: 4,
        title: "Podcast 101",
        description: "Sıfırdan podcast yapımı. Ekipman seçimi, kayıt teknikleri, düzenleme ve yayınlama süreçleri.",
        date: "28 Aralık 2024",
        time: "11:00 - 15:00",
        location: "Beşiktaş",
        category: "workshop",
        capacity: 12,
        spotsLeft: 3,
        price: "₺400",
        instructor: "Podcast Pro",
    },
    {
        id: 5,
        title: "Üye Showcase",
        description: "REDD üyelerinin performansları ve prodüksiyonlarının sergilenmesi. Yeteneklerini göster, feedback al.",
        date: "30 Aralık 2024",
        time: "20:00 - 00:00",
        location: "Beşiktaş",
        category: "showcase",
        capacity: 100,
        spotsLeft: 45,
        price: "Ücretsiz",
        instructor: null,
    },
    {
        id: 6,
        title: "Mixing & Mastering",
        description: "Profesyonel mixing ve mastering teknikleri. EQ, kompresyon, stereo imaging ve loudness standartları.",
        date: "5 Ocak 2025",
        time: "13:00 - 18:00",
        location: "Beşiktaş",
        category: "masterclass",
        capacity: 12,
        spotsLeft: 7,
        price: "₺900",
        instructor: "Sound Engineer Pro",
    },
];

export default function EventsPage() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredEvents = activeFilter === "all"
        ? events
        : events.filter(e => e.category === activeFilter);

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
                            <span className="text-[#FF3333]">Etkinlikler</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Workshop'lar, masterclass'lar ve networking etkinlikleriyle
                            yeteneklerini geliştir ve bağlantılar kur.
                        </p>
                    </motion.div>

                    {/* Filters */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-3 mb-12"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveFilter(cat.id)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeFilter === cat.id
                                        ? "bg-[#FF3333] text-white"
                                        : "bg-[#111] text-gray-400 border border-[#222] hover:border-[#333]"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Events Grid */}
            <section className="pb-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="card h-full flex flex-col hover:border-[#FF3333]/50 transition-all group">
                                    {/* Image Placeholder */}
                                    <div className="aspect-video rounded-lg bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] mb-4 relative overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Calendar className="w-12 h-12 text-[#FF3333]/30" />
                                        </div>
                                        {/* Category Badge */}
                                        <div className="absolute top-3 left-3 bg-[#FF3333] text-white text-xs font-semibold px-3 py-1 rounded-full capitalize">
                                            {event.category}
                                        </div>
                                        {/* Price Badge */}
                                        <div className="absolute top-3 right-3 bg-[#0a0a0a]/80 text-white text-sm font-semibold px-3 py-1 rounded-full">
                                            {event.price}
                                        </div>
                                    </div>

                                    {/* Date & Time */}
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {event.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {event.time}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#FF3333] transition-colors">
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 flex-grow">
                                        {event.description}
                                    </p>

                                    {/* Meta */}
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            {event.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Users className="w-4 h-4" />
                                            {event.spotsLeft} kişilik yer
                                        </span>
                                    </div>

                                    {/* Instructor */}
                                    {event.instructor && (
                                        <p className="text-sm text-gray-400 mb-4">
                                            <span className="text-gray-500">Eğitmen:</span> {event.instructor}
                                        </p>
                                    )}

                                    {/* CTA */}
                                    <button className="btn btn-primary w-full">
                                        Katıl
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
