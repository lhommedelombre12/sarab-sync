import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    emoji: "🤙",
    title: "On se parle",
    description: "Un call rapide pour comprendre ton business, tes besoins et ta vibe. 15 min max, promis !",
  },
  {
    number: "02",
    emoji: "🔗",
    title: "On se connecte",
    description: "Tu nous donnes accès à tes DMs et ton Google Agenda. C'est tout ce qu'on a besoin.",
  },
  {
    number: "03",
    emoji: "🛋️",
    title: "Tu te détends",
    description: "Chaque matin, ouvre ton agenda : tes rendez-vous sont là. Tes DMs ? Déjà gérés. Easy.",
  },
  {
    number: "04",
    emoji: "💰",
    title: "Tu grandis",
    description: "Plus de prospects, plus de clients, plus de temps libre. Tu nous remercieras plus tard 😉",
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="méthode" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Notre méthode magique 🪄
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            4 étapes et c'est <span className="gradient-text">réglé.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-transparent hidden md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`flex items-center gap-8 mb-16 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className="glass-card rounded-2xl p-8 inline-block">
                  <motion.span
                    whileHover={{ scale: 1.3, rotate: 20 }}
                    className="text-3xl inline-block mb-4"
                  >
                    {step.emoji}
                  </motion.span>
                  <h3 className="text-xl font-bold font-display text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>

              {/* Center number */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="hidden md:flex w-16 h-16 rounded-full items-center justify-center text-lg font-bold font-display text-primary-foreground flex-shrink-0 z-10"
                style={{ background: "var(--gradient-hero)" }}
              >
                {step.number}
              </motion.div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
