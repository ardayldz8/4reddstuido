import Link from "next/link";
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

const footerLinks = {
    uyelik: {
        title: "Üyelik",
        links: [
            { href: "/membership/music-makers", label: "Müzisyenler" },
            { href: "/membership/djs", label: "DJ'ler" },
            { href: "/membership/podcasters", label: "Podcaster'lar" },
            { href: "/membership/photographers", label: "Fotoğrafçılar" },
            { href: "/membership/teams", label: "Takımlar" },
        ],
    },
    rezervasyon: {
        title: "Rezervasyon",
        links: [
            { href: "/studios", label: "Stüdyolar" },
            { href: "/private-events", label: "Özel Etkinlikler" },
            { href: "/events", label: "Etkinlikler" },
        ],
    },
    lokasyonlar: {
        title: "Lokasyonlar",
        links: [
            { href: "/locations/istanbul-besiktas", label: "İstanbul - Beşiktaş" },
        ],
    },
    sirket: {
        title: "Şirket",
        links: [
            { href: "/who-we-are", label: "Hakkımızda" },
            { href: "/contact", label: "İletişim" },
            { href: "/careers", label: "Kariyer" },
        ],
    },
};

const socialLinks = [
    { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
    { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
];

export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] border-t border-[#222]">
            {/* CTA Section */}
            <div className="border-b border-[#222]">
                <div className="container mx-auto px-6 py-16">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                                Yaratıcılığını <span className="text-[#FF3333]">REDD</span> ile keşfet
                            </h2>
                            <p className="text-gray-400 text-lg">
                                Premium stüdyolara sınırsız erişim için hemen üye ol.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/membership/music-makers" className="btn btn-primary">
                                Üye Ol
                            </Link>
                            <Link href="/studios" className="btn btn-secondary">
                                Stüdyo Rezervasyonu
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Links Section */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {/* Logo & Social */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-3xl font-bold">
                                <span className="text-[#FF3333]">REDD</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm mb-6">
                            Ciddi yaratıcılar için ciddi bir yer.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-[#111] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#FF3333] transition-all"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([key, section]) => (
                        <div key={key}>
                            <h4 className="text-white font-semibold mb-4">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 text-sm hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#222]">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} REDD Studio. Tüm hakları saklıdır.
                        </p>
                        <div className="flex gap-6">
                            <Link
                                href="/privacy-policy"
                                className="text-gray-500 text-sm hover:text-white transition-colors"
                            >
                                Gizlilik Politikası
                            </Link>
                            <Link
                                href="/terms"
                                className="text-gray-500 text-sm hover:text-white transition-colors"
                            >
                                Kullanım Şartları
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
