import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "@/assets/sarab-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-card py-3" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <img src={logo} alt="Sarab Agency" className="h-8 md:h-10" />
        <div className="hidden md:flex items-center gap-8">
          {["Services", "Méthode", "Témoignages", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2.5 rounded-full text-sm font-semibold text-primary-foreground"
          style={{ background: "var(--gradient-pink)" }}
        >
          On discute ? 💬
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
