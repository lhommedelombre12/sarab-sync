import { motion } from "framer-motion";
import FloatingScene from "./FloatingScene";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding overflow-hidden pt-32">
      {/* Background blobs */}
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-20 -right-40 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="animate-emoji-wave inline-block">🎓</span>
            <span className="text-sm font-medium text-primary">Études en Roumanie</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            Tes études en
            <br />
            <span className="gradient-text">Roumanie,</span>
            <br />
            <span className="text-foreground/60 text-4xl md:text-5xl lg:text-5xl">
              on s'occupe de tout. 🇷🇴
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed"
          >
            Médecine, ingénierie, business — étudie en <strong className="text-foreground">français, anglais ou allemand</strong>.
            Accompagnement complet pour <strong className="text-primary">moins de 3 000€</strong>. ✨
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(42 90% 55% / 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full text-lg font-semibold text-primary-foreground"
              style={{ background: "var(--gradient-hero)" }}
            >
              Je veux étudier là-bas 🚀
            </motion.a>
            <motion.a
              href="#pourquoi"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full text-lg font-semibold border border-foreground/20 text-foreground hover:border-primary/50 transition-colors"
            >
              Pourquoi la Roumanie ?
            </motion.a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-wrap items-center gap-6"
          >
            {[
              { emoji: "🇫🇷", label: "Français" },
              { emoji: "🇬🇧", label: "Anglais" },
              { emoji: "🇩🇪", label: "Allemand" },
            ].map((lang) => (
              <div key={lang.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="text-xl">{lang.emoji}</span>
                <span>{lang.label}</span>
              </div>
            ))}
            <div className="h-6 w-px bg-border" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">100% remboursable</strong> si pas d'admission
            </p>
          </motion.div>
        </motion.div>

        {/* 3D Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:block h-[500px]"
        >
          <FloatingScene />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
