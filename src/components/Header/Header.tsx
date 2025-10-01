import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  name: string;
  avatarSrc?: string;
  portfolioType: "Chemical Engineer" | "Content Writer";
}

const Header: React.FC<HeaderProps> = ({ name, avatarSrc, portfolioType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const headerMenu =
    portfolioType === "Chemical Engineer"
      ? [
          { label: "Home", href: "#" },
          { label: "About", href: "#about" },
          { label: "Works", href: "#works" },
          { label: "Contact", href: "#contact" },
        ]
      : [
          { label: "Home", href: "#" },
          { label: "About", href: "#about" },
          { label: "Works", href: "#works" },
          { label: "Gallery", href: "#gallery" },
          { label: "Contact", href: "#contact" },
        ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`px-3 md:px-10 w-full z-90 fixed top-0  text-white ${
        portfolioType === "Chemical Engineer"
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700"
          : "bg-gradient-to-r from-orange-950 via-orange-900 to-orange-800"
      }`}
    >
      <div className="mx-auto flex justify-between items-center h-16">
        {/* Avatar + Name */}
        <div className="flex items-center space-x-2">
          {avatarSrc ? (
            <img
              src={avatarSrc}
              alt={name}
              className="w-10 h-10 outline rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center font-bold text-lg">
              {name.charAt(0).toUpperCase()}
            </div>
          )}
          <div className="flex flex-col leading-tight">
            <span className="font-bold">{name}</span>
            <span className="font-semibold text-xs text-gray-300">
              {portfolioType}
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden sm:flex space-x-6 sm:min-h-18 sm:items-center outlin ">
          {headerMenu.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className={`font-bold capitalize  sm:py-3 transition-all ${portfolioType === "Chemical Engineer" ? 'hover:border-b-2 hover:border-b-gray-400' : 'hover:border-b hover:border-b-orange-200'} `}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="sm:hidden relative w-6 h-6 flex flex-col justify-center items-center z-30"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <>
              <span className="w-6 h-0.5 bg-white mb-1" />
              <span className="w-6 h-0.5 bg-white mb-1" />
              <span className="w-6 h-0.5 bg-white" />
            </>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-20 bg-black/50 sm:hidden"
            onClick={toggleMenu}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className={`absolute right-0 top-0 py-20 text-center h-full w-3/4 max-w-xs ${
                portfolioType === "Chemical Engineer"
                  ? "bg-gray-700"
                  : "bg-orange-600"
              } p-8 flex flex-col space-y-6`}
              onClick={(e) => e.stopPropagation()}
            >
              {headerMenu.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-white text-lg font-semibold capitalize hover:text-orange-300 transition-colors"
                  onClick={toggleMenu}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
