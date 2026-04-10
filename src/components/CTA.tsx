import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute top-4 left-8 text-4xl opacity-20 animate-float">🎓</div>
          <div className="absolute bottom-6 right-10 text-3xl opacity-20 animate-float-slow">🇷🇴</div>
          <div className="absolute top-1/2 left-4 text-2xl opacity-15 animate-bounce-soft">📚</div>
          <div className="absolute top-8 right-1/4 text-2xl opacity-15 animate-wiggle">✈️</div>

          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="text-3xl md:text-5xl font-bold font-display text-primary-foreground mb-6 relative">
            Ton avenir en Europe<br />commence ici. 🌟
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }} className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto relative">
            Rejoins les centaines d'étudiants qui ont fait confiance à Sarab pour construire leur avenir en Roumanie.
          </motion.p>
          <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }} className="inline-block px-10 py-4 rounded-full text-lg font-bold bg-background text-foreground hover:bg-background/90 transition-colors relative">
            Je commence maintenant 🚀
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
