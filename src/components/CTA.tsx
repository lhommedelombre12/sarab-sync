import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto relative"
      >
        <div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center"
          style={{ background: "var(--gradient-hero)" }}
        >
          {/* Floating decorations */}
          <div className="absolute top-6 left-6 text-4xl animate-float">✨</div>
          <div className="absolute bottom-6 right-6 text-4xl animate-bounce-soft">🚀</div>
          <div className="absolute top-10 right-16 text-2xl animate-wiggle">💬</div>

          {/* Hand-drawn arrow doodle */}
          <svg className="absolute bottom-10 left-10 w-16 h-16 opacity-20" viewBox="0 0 60 60" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3">
            <path d="M10 50 C20 20, 40 15, 50 10" />
            <path d="M42 8 L50 10 L46 18" />
          </svg>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold font-display text-primary-foreground mb-6"
          >
            Prêt à tout déléguer ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto"
          >
            Laisse tes infos plus bas et on te montre comment on peut transformer ton business.
            Spoiler : tu vas adorer. 😏
          </motion.p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-bold bg-background text-foreground hover:shadow-2xl transition-shadow"
          >
            Je veux être recontacté 📞
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
