"use client";

import StaggeredMenu from "@/components/ui/StaggeredMenu";

const menuItems = [
    { label: "ANA SAYFA", link: "/" },
    { label: "ÜYELİK", link: "/membership/music-makers" },
    { label: "STÜDYOLAR", link: "/studios" },
    { label: "ETKİNLİKLER", link: "/events" },
];

const socialItems = [
    { label: "Instagram", link: "https://instagram.com" },
    { label: "Twitter", link: "https://twitter.com" },
    { label: "YouTube", link: "https://youtube.com" },
];

export default function Header() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100, pointerEvents: 'none' }}>
            <StaggeredMenu
                position="right"
                items={menuItems}
                socialItems={socialItems}
                displaySocials={true}
                displayItemNumbering={true}
                menuButtonColor="#fff"
                openMenuButtonColor="#000"
                changeMenuColorOnOpen={true}
                colors={['#4a0404', '#7f0606', '#b91313', '#ff3333']} // Red tones for animation layers
                accentColor="#FF3333" // REDD Studio red
                isFixed={true}
                closeOnClickAway={true}
                logoUrl="" // We don't need a logo inside the menu as it's already in the hero
            />
        </div>
    );
}
