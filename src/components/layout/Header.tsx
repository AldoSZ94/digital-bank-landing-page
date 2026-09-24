import { useState } from "react";
import iconClose from "../../assets/img/icon-close.svg";
import iconHamburger from "../../assets/img/icon-hamburger.svg";
import logoDark from "../../assets/img/logo-dark.svg";
import { MainButton } from "../common/MainButton";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navLinks = [
    { text: "Home", href: "#" },
    { text: "About", href: "#" },
    { text: "Contact", href: "#" },
    { text: "Blog", href: "#" },
    { text: "Careers", href: "#" },
  ];

  return (
    <header className="relative z-30 bg-white">
      <div className="relative mx-auto flex w-9/10 max-w-300 items-center justify-between gap-3 py-6 min-[480px]:flex-col md:h-20 md:flex-row md:py-0">
        <a href="/" aria-label="Digitalbank - Home">
          <img className="w-50" src={logoDark} alt="" />
        </a>
        <nav
          className={`absolute top-full z-20 mt-4 w-full rounded-md bg-white py-6 transition-all duration-300 ${
            isMenuOpen
              ? "scale-100 opacity-100"
              : "pointer-events-none scale-95 opacity-0"
          } min-[480px]:static min-[480px]:mt-0 min-[480px]:block min-[480px]:w-auto min-[480px]:scale-100 min-[480px]:py-0 min-[480px]:opacity-100`}
          id="navigation"
          aria-label="Main navigation"
        >
          <ul className="flex flex-col items-center gap-2 md:h-full md:flex-row lg:gap-6">
            {navLinks.map((link) => {
              return (
                <li key={link.text} className="flex h-full">
                  <a
                    className="relative flex h-full items-center text-blue-950 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-green-500 after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 md:text-gray-600 md:hover:text-blue-950"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <MainButton className="hidden min-[480px]:block" />
        <button
          className="relative z-20 cursor-pointer min-[480px]:hidden"
          onClick={handleClickMenu}
          type="button"
          aria-controls="navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <img src={isMenuOpen ? iconClose : iconHamburger} alt="" />
        </button>
      </div>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-10 bg-black/30 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        } min-[480px]:opacity-0`}
      ></div>
    </header>
  );
};
