"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

const socialLinks = [
    { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
    { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert("Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

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
                            <span className="text-[#FF3333]">İletişim</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Sorularınız mı var? Bizimle iletişime geçmekten çekinmeyin.
                            En kısa sürede size dönüş yapacağız.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="pb-20">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="card">
                                <h2 className="text-2xl font-bold text-white mb-6">Mesaj Gönder</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                                                İsim
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#222] rounded-lg text-white placeholder-gray-500 focus:border-[#FF3333] focus:outline-none transition-colors"
                                                placeholder="Adınız"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                                                E-posta
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#222] rounded-lg text-white placeholder-gray-500 focus:border-[#FF3333] focus:outline-none transition-colors"
                                                placeholder="ornek@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
                                            Konu
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#222] rounded-lg text-white focus:border-[#FF3333] focus:outline-none transition-colors"
                                        >
                                            <option value="">Konu Seçin</option>
                                            <option value="membership">Üyelik Hakkında</option>
                                            <option value="booking">Rezervasyon</option>
                                            <option value="events">Etkinlikler</option>
                                            <option value="corporate">Kurumsal</option>
                                            <option value="other">Diğer</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                                            Mesaj
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#222] rounded-lg text-white placeholder-gray-500 focus:border-[#FF3333] focus:outline-none transition-colors resize-none"
                                            placeholder="Mesajınızı yazın..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            "Gönderiliyor..."
                                        ) : (
                                            <>
                                                Gönder
                                                <Send className="w-4 h-4 ml-2" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            {/* Quick Contact */}
                            <div className="card">
                                <h2 className="text-2xl font-bold text-white mb-6">İletişim Bilgileri</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-[#FF3333]/10 flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 text-[#FF3333]" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">E-posta</p>
                                            <a href="mailto:info@reddstudio.com" className="text-gray-400 hover:text-[#FF3333] transition-colors">
                                                info@reddstudio.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-[#FF3333]/10 flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6 text-[#FF3333]" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">Telefon</p>
                                            <a href="tel:+902121234567" className="text-gray-400 hover:text-[#FF3333] transition-colors">
                                                +90 (212) 123 45 67
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-[#FF3333]/10 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-[#FF3333]" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">Adres</p>
                                            <p className="text-gray-400">
                                                Beşiktaş Mahallesi<br />
                                                Örnek Sokak No: 123<br />
                                                Beşiktaş, İstanbul 34353
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="card">
                                <h3 className="text-xl font-bold text-white mb-4">Sosyal Medya</h3>
                                <div className="flex gap-4">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#FF3333] transition-all"
                                            aria-label={social.label}
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* FAQ Link */}
                            <div className="card bg-gradient-to-br from-[#FF3333]/10 to-transparent border-[#FF3333]/30">
                                <h3 className="text-xl font-bold text-white mb-2">Sıkça Sorulan Sorular</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    Sorularınızın cevaplarını FAQ sayfamızda bulabilirsiniz.
                                </p>
                                <a href="/faq" className="text-[#FF3333] hover:underline text-sm font-medium">
                                    SSS Sayfasına Git →
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
