import { useState } from 'react'
import logo from "/Pachara.png"
import { NAVTGATION_LINKS } from '../constants/constants';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import { AnimatePresence, motion } from 'motion/react';
import { li } from 'motion/react-client';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -25;
            const elemantPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elemantPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div>
            <nav className='fixed left-0 right-0 top-4 z-50'>
                {/* Desktop Navbar */}
                <div className='mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex'>
                    <div className='flex items-center justify-center gap-6'>
                        <div>
                            <a href="/">
                                <img src={logo} alt="Logo" />
                            </a>
                        </div>
                        <div>
                            <ul className='flex items-center gap-4'>
                                {NAVTGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className="text-white hover:text-stone-300 transition-colors duration-300">
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Mobile Navbar */}
                <div className=''></div>
            </nav>
        </div>
    )
}

export default Navbar