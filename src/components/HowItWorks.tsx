import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", emoji: "📝", title: "Tu remplis le formulaire", desc: "Donne-nous tes infos : filière, moyenne, langue souhaitée. On évalue la faisabilité gratuitement." },
  { num: "02", emoji: "📞", title: "On te contacte en -1h", desc: "Un conseiller Sarab t'appelle pour discuter de ton projet, répondre à tes questions et te guider." },
  { num: "03", emoji: "📋", title: "Montage du dossier", desc: "On prépare ton dossier de A à Z : traductions, légalisations, candidatures aux universités." },
  { num: "04", emoji: "✈️", title: "Départ en Roumanie", desc: "Admission confirmée, visa obtenu, logement trouvé. Tu n'as plus qu'à faire tes valises !" },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="processus" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[150px] -translate-y-1/2" />
      <div className="max-w-4xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">Comment ça marche ? 🤔</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">4 étapes, <span className="gradient-text">zéro stress.</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">On gère tout le processus. Toi, tu te concentres sur tes études. 🧘</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 md:-translate-x-px" />
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className={`relative flex items-start gap-6 mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 z-10 shadow-[0_0_15px_hsl(42_90%_55%/0.6)]" />
              <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                <div className={`glass-card rounded-2xl p-6 inline-block text-left ${i % 2 === 0 ? "md:ml-auto" : ""}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{step.emoji}</span>
                    <span className="text-xs font-bold text-primary font-display tracking-wider">{step.num}</span>
                  </div>
                  <h3 className="text-lg font-bold font-display text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
