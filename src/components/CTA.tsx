import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
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
            Un call de 15 minutes et on te montre comment on peut transformer ton business.
            Spoiler : tu vas adorer. 😏
          </motion.p>
          <motion.a
            href="https://calendly.com"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-bold bg-background text-foreground hover:shadow-2xl transition-shadow"
          >
            Réserve ton call gratuit 📞
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
