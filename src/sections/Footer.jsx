import React from "react";

function Footer() {
    return (
        <footer className="pt-32 sm:pt-40 lg:pt-56 pb-8">
            <p className="text-center text-sm sm:text-base text-white/80">
                © {new Date().getFullYear()} Seminar Portfolio. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
