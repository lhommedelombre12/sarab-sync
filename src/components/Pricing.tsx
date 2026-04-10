import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, CreditCard, RefreshCw } from "lucide-react";

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const included = [
    "Évaluation de ton dossier",
    "Conseil personnalisé par téléphone",
    "Choix de l'université adaptée",
    "Constitution complète du dossier",
    "Traduction & légalisation des documents",
    "Suivi de la candidature",
    "Aide à l'obtention du visa",
    "Recherche de logement",
    "Accompagnement à l'arrivée",
  ];

  return (
    <section id="tarifs" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Tarif transparent 💎
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Tout compris, <span className="gradient-text">sans surprise.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-[80px]" />

          <div className="grid md:grid-cols-2 gap-10 items-center relative">
            {/* Price */}
            <div className="text-center md:text-left">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
              >
                <span className="text-muted-foreground text-lg">À partir de</span>
                <h3 className="text-6xl md:text-7xl font-bold font-display gradient-text-gold my-4">
                  -3 000€
                </h3>
                <p className="text-muted-foreground mb-8">Accompagnement complet de A à Z</p>
              </motion.div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <RefreshCw className="w-5 h-5 text-emerald flex-shrink-0" />
                  <span className="text-foreground"><strong>100% remboursable</strong> en cas de non-admission</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Aucune avance de frais</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <CreditCard className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">Paiement en plusieurs fois possible</span>
                </div>
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(42 90% 55% / 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-8 px-8 py-4 rounded-full text-lg font-semibold text-primary-foreground"
                style={{ background: "var(--gradient-hero)" }}
              >
                Démarrer mon inscription 🚀
              </motion.a>
            </div>

            {/* Inclus */}
            <div>
              <h4 className="text-lg font-bold font-display text-foreground mb-6">
                Ce qui est inclus ✅
              </h4>
              <ul className="space-y-3">
                {included.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
