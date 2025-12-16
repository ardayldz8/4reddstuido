"use client";

import StaggeredMenu from "@/components/ui/StaggeredMenu";

export default function Header() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100, pointerEvents: 'none' }}>
            <StaggeredMenu
                position="right"
                items={[]}
                socialItems={[]}
                displaySocials={false}
                displayItemNumbering={false}
                menuButtonColor="#fff"
                openMenuButtonColor="#000"
                changeMenuColorOnOpen={true}
                colors={['#4a0404', '#7f0606', '#b91313', '#ff3333']}
                accentColor="#FF3333"
                isFixed={true}
                closeOnClickAway={true}
                logoUrl=""
                comingSoon={true}
            />
        </div>
    );
}

