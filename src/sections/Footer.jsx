import React from "react";

function Footer() {
  return (
    <footer className="text-center pt-32 sm:pt-40 lg:pt-56 pb-8">
      <p className="text-sm sm:text-base text-slate-400">
        © {new Date().getFullYear()}{" "}
        <span className="font-medium text-slate-300">
          Frontend Devfolio
        </span>
      </p>

      <p className="mt-1 text-xs sm:text-sm text-slate-500">
        Built by{" "}
        <span className="text-slate-300 font-medium">Pachara Kalapakdee</span>
      </p>
    </footer>
  );
}

export default Footer;
