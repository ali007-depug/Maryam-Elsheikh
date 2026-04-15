import { useEffect,useMemo, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Loader2, Menu, X } from "lucide-react"; 
import { Button } from "../ui/button";
import scrollToSection from "../../actions/ScrollFunction";
import { AnimatePresence, motion } from "framer-motion";

interface HeaderProps {
  name: string;
  portfolioType: "Chemical Engineer" | "Content Writer";
}

function Header({ name, portfolioType }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [fetching, setFetching] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  const headerMenu = useMemo(() => {
  return portfolioType === "Chemical Engineer"
    ? [
        { label: "Home", href: "hero" },
        { label: "About", href: "about" },
        { label: "Works", href: "works" },
        { label: "Contact", href: "contact" },
      ]
    : [
        { label: "Home", href: "hero" },
        { label: "About", href: "about" },
        { label: "Works", href: "works" },
        { label: "Gallery", href: "gallery" },
        { label: "Contact", href: "contact" },
      ];
}, [portfolioType]); 

  // --- ACTIVE LINK LOGIC ---
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Detect when section is in the upper part of screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Watch all sections that match our menu hrefs
    headerMenu.forEach((item) => {
      const section = document.getElementById(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [headerMenu]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Improved mobile click handler
  const handleMobileClick = (href: string) => {
    setIsOpen(false);
    // Timeout ensures the menu starts closing before the scroll jump occurs
    setTimeout(() => {
      scrollToSection(href);
    }, 100);
  };

  useEffect(() => {
    const getHeaderData = async () => {
      setFetching(true);
      try {
        const q = query(collection(db, "portfolioType"), where("type", "==", portfolioType.toLowerCase()));
        const snap = await getDocs(q);
        if (!snap.empty) {
          const pId = snap.docs[0].id;
          const hSnap = await getDocs(collection(db, "portfolioType", pId, "header"));
          if (!hSnap.empty) setAvatarUrl(hSnap.docs[0].data().avatarUrl);
        }
      } catch (error) { console.error("Fetch Error:", error); } 
      finally { setFetching(false); }
    };
    getHeaderData();
  }, [portfolioType]);

  const themeColor = portfolioType === "Chemical Engineer" ? "text-blue-400" : "text-orange-500";
  const bgColor = portfolioType === "Chemical Engineer" ? "bg-slate-900" : "bg-orange-950";

  return (
    <header className={`px-3 md:px-10 w-full z-[100] fixed top-0 text-white shadow-xl transition-colors duration-500 border-b border-white/5 ${bgColor}`}>
      <div className="mx-auto flex justify-between items-center h-16">
        
        {/* IDENTITY SECTION */}
        <div className="flex items-center space-x-3">
          <div className="relative h-10 w-10">
            {fetching && <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse" />}
            {!fetching && avatarUrl ? (
              <div className="relative h-10 w-10">
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/5 rounded-full">
                    <Loader2 size={14} className="animate-spin text-orange-400" />
                  </div>
                )}
                <img
                  src={avatarUrl}
                  alt={name}
                  onLoad={() => setImageLoaded(true)}
                  className={`h-10 w-10 rounded-full object-cover transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                />
              </div>
            ) : (
              !fetching && <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-black text-sm">{name.charAt(0)}</div>
            )}
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-sm">{name}</span>
            <span className="font-bold text-[10px] text-gray-400 uppercase tracking-widest">{portfolioType}</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden sm:flex space-x-2 items-center">
          {headerMenu.map((link, idx) => (
            <Button
              variant="ghost"
              key={idx}
              onClick={() => scrollToSection(link.href)}
              className={`text-[10px] font-black uppercase tracking-widest transition-all ${
                activeSection === link.href ? themeColor : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
              {activeSection === link.href && (
                <motion.div layoutId="activeUnderline" className={`absolute bottom-2 h-[2px] w-4 ${portfolioType === "Chemical Engineer" ? "bg-blue-400" : "bg-orange-500"}`} />
              )}
            </Button>
          ))}
        </nav>

        {/* Hamburger */}
        <button onClick={toggleMenu} className="sm:hidden p-2 relative z-[110]" aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`sm:hidden absolute top-16 left-0 w-full border-t border-white/5 shadow-2xl ${bgColor} backdrop-blur-xl`}
          >
            <nav className="flex flex-col p-4">
              {headerMenu.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleMobileClick(link.href)}
                  className={`w-full text-left px-6 py-5 text-[11px] font-black uppercase tracking-[0.2em] border-b border-white/5 last:border-none transition-colors ${
                    activeSection === link.href ? themeColor : "text-slate-400"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;