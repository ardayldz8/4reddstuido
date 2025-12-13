"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight, Clock } from "lucide-react";

const upcomingEvents = [
    {
        id: 1,
        title: "Beat Making Workshop",
        description: "Profesyonel prodüktörlerle beat yapımı teknikleri.",
        date: "15 Aralık 2024",
        time: "14:00 - 18:00",
        location: "İstanbul - Beşiktaş",
        category: "Workshop",
        image: null,
    },
    {
        id: 2,
        title: "DJ Masterclass",
        description: "Deneyimli DJ'lerden mixing ve scratching teknikleri.",
        date: "20 Aralık 2024",
        time: "16:00 - 20:00",
        location: "İstanbul - Beşiktaş",
        category: "Masterclass",
        image: null,
    },
    {
        id: 3,
        title: "Networking Night",
        description: "Yaratıcı topluluğumuzla tanışma ve işbirliği fırsatları.",
        date: "25 Aralık 2024",
        time: "19:00 - 23:00",
        location: "İstanbul - Beşiktaş",
        category: "Networking",
        image: null,
    },
];

export default function EventsPreview() {
    return (
        <section className="section bg-[#111]">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-12"
                >
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Yaklaşan <span className="text-[#FF3333]">Etkinlikler</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl">
                            Workshop'lar, masterclass'lar ve networking etkinlikleriyle
                            yeteneklerini geliştir ve bağlantılar kur.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <Link
                            href="/events"
                            className="btn btn-secondary whitespace-nowrap inline-flex"
                        >
                            Tüm Etkinlikler
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </motion.div>

                {/* Events Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {upcomingEvents.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={`/events/${event.id}`} className="group block">
                                <div className="card h-full hover:border-[#FF3333]/50 transition-all duration-300">
                                    {/* Image Placeholder */}
                                    <div className="aspect-[16/9] rounded-lg bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] mb-4 overflow-hidden relative">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Calendar className="w-10 h-10 text-[#FF3333]/30" />
                                        </div>
                                        {/* Category Badge */}
                                        <div className="absolute top-3 left-3 bg-[#FF3333] text-white text-xs font-semibold px-3 py-1 rounded-full">
                                            {event.category}
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

                                    {/* Title & Description */}
                                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#FF3333] transition-colors">
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4">
                                        {event.description}
                                    </p>

                                    {/* Location */}
                                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                                        <MapPin className="w-4 h-4" />
                                        {event.location}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
