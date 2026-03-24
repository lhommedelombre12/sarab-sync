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
            <span className="animate-emoji-wave inline-block">👋</span>
            <span className="text-sm font-medium text-primary">Virtual Manager Agency</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            Tes DMs gérés,
            <br />
            <span className="gradient-text">ton agenda rempli.</span>
            <br />
            <span className="text-foreground/60 text-4xl md:text-5xl lg:text-5xl">
              Toi, tu bosses. 🚀
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed"
          >
            On gère tes messages, on organise tes rendez-vous directement dans ton agenda.
            Tu l'ouvres le matin et <strong className="text-foreground">tout est là</strong>. Magique ? Non, c'est Sarab. ✨
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(345 100% 65% / 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full text-lg font-semibold text-primary-foreground"
              style={{ background: "var(--gradient-hero)" }}
            >
              Démarre maintenant 🎯
            </motion.a>
            <motion.a
              href="#méthode"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full text-lg font-semibold border border-foreground/20 text-foreground hover:border-primary/50 transition-colors"
            >
              Comment ça marche ?
            </motion.a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {["😎", "🤩", "😍", "🔥"].map((e, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-lg border-2 border-background"
                >
                  {e}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">+30 créateurs</strong> nous font confiance
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
