import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Trang chủ", path: "/" },
    { name: "Dịch vụ marketing", path: "/dich-vu-marketing" },
    { name: "Sản xuất video", path: "/dich-vu-san-xuat-video" },
    { name: "Khách hàng", path: "/khach-hang" },
    { name: "Liên hệ", path: "/lien-he" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl" : "bg-black/40 backdrop-blur-sm py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 group cursor-pointer">
          <div className="bg-white w-14 h-14 rounded-full shadow-lg group-hover:scale-105 transition-transform flex items-center justify-center overflow-hidden p-2">
            <img 
              src="https://ik.imagekit.io/39wvgoqre/V%20digital/V%20DIGITAL%20LOGO%20OK-01.png" 
              alt="V-digital concept Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-xl tracking-tighter leading-none group-hover:text-brand-lime transition-colors">V DIGITAL</span>
            <span className="text-brand-lime font-bold text-[10px] uppercase tracking-[0.3em] leading-none mt-1">Concept</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-sm font-bold transition-all hover:translate-y-[-1px] ${
                location.pathname === link.path ? "text-brand-lime" : "text-white/60 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/lien-he" className="px-6 py-2.5 bg-brand-primary text-white rounded-full text-sm font-bold hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-primary/10">
            Nhận mẫu Video AI
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 md:hidden shadow-2xl"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-lg font-bold ${
                location.pathname === link.path ? "text-brand-lime" : "text-white/70"
              }`} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/lien-he" 
            className="w-full py-4 bg-gradient-to-r from-brand-primary to-brand-lime text-white rounded-xl font-bold text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Nhận mẫu Video AI
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
