"use client";

import StaggeredMenu from "@/components/ui/StaggeredMenu";

export default function Header() {
    const menuItems = [
        { label: "Ana Sayfa", link: "/" },
        { label: "Sanal Tur", link: "/tour" },
        { label: "Rezervasyon", link: "/rezervasyon" },
    ];

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100, pointerEvents: 'none' }}>
            <StaggeredMenu
                position="right"
                items={menuItems}
                socialItems={[
                    { label: "Instagram", link: "https://www.instagram.com/for4redd" },
                    { label: "WhatsApp", link: "https://wa.me/905419735370" },
                ]}
                displaySocials={true}
                displayItemNumbering={false}
                menuButtonColor="#fff"
                openMenuButtonColor="#000"
                changeMenuColorOnOpen={true}
                colors={['#4a0404', '#7f0606', '#b91313', '#ff3333']}
                accentColor="#FF3333"
                isFixed={true}
                closeOnClickAway={true}
                logoUrl=""
                comingSoon={false}
                address="Esenevler, Talatpaşa Cd, 34764 Ümraniye/İstanbul"
            />
        </div>
    );
}
