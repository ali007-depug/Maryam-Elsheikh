import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  name: string;
  avatarSrc?: string;
  links: { label: string; href: string }[];
  portfolioType:"Chemical Engineer" | "Content Writer";
}

const Header: React.FC<HeaderProps> = ({ name, avatarSrc, links,portfolioType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="px-3 md:px-10  w-full z-3 bg-white overflow-hidden">
      <div className="mx-auto flex justify-between items-center h-16">
        
        {/* Avatar */}
        <div className="flex items-center space-x-2">
          {avatarSrc ? (
            <img
              src={avatarSrc}
              alt={name}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-orange-400 text-white flex items-center justify-center font-bold text-lg">
              {name.charAt(0).toUpperCase()}
            </div>
          )}
          <div className="flex flex-col">
          <span className="font-bold text-orange600">{name}</span>
          <span className="font-semibold text-xs text-orange-00">{portfolioType}</span>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="hidden sm:flex space-x-6">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="hover:text-orange-500 font-bold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger / X Button */}
        <button
          onClick={toggleMenu}
          className="sm:hidde relative w-6 h-6 flex flex-col justify-center items-center focus:outline-none z-200"
        >
          {isOpen ? (
            // X icon
            // <GrClose className="bg-red-200 z-200 "/>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white z-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <>
              <span className={`w-6 h-0.5 ${portfolioType === 'Chemical Engineer' ? 'bg-gray-700' : 'bg-orange-400'} mb-1`}></span>
              <span className={`w-6 h-0.5 ${portfolioType === 'Chemical Engineer' ? 'bg-gray-700' : 'bg-orange-400'} mb-1`}></span>
              <span className={`w-6 h-0.5 ${portfolioType === 'Chemical Engineer' ? 'bg-gray-700' : 'bg-orange-400'}`}></span>
            </>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay with Spring Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-99 bg-black/50  sm:hidden"
            onClick={toggleMenu}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`absolute right-0 top-0 h-full w-[40%] ${portfolioType === 'Chemical Engineer' ? 'bg-gray-700' : 'bg-[#ff914d]'} p-6 flex flex-col space-y-4`}
              onClick={(e) => e.stopPropagation()}
            >
              {links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-white relative top-10 text-center hover:text-gray-200 transition-colors"
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
