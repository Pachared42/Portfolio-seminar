import React from 'react'
import StaggeredMenu from "../components/StaggeredMenu";
import { menuItems, socialItems } from '../constants/constants';

function Navbar() {
    return (
        <div>
            <StaggeredMenu
            className="fixed top-0 left-0 w-screen h-screen"
                position="right"
                items={menuItems}
                isFixed={true}
                socialItems={socialItems}
                displaySocials={true}
                displayItemNumbering={false}
                menuButtonColor="#fff"
                openMenuButtonColor="#000"
                changeMenuColorOnOpen={true}
                colors={['#222', '#111',]}
                logoUrl="https://pachara.vercel.app/Pachara.png"
                accentColor="#ff6b6b"
            />
        </div>
    )
}

export default Navbar