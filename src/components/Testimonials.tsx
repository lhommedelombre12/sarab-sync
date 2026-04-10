import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Yasmine B.", field: "Médecine — Cluj-Napoca", emoji: "🩺", text: "Sarab m'a accompagnée de A à Z. Sans eux, je n'aurais jamais osé partir étudier la médecine en Roumanie. Aujourd'hui je suis en 3ème année !", stars: 5 },
  { name: "Karim M.", field: "Ingénierie — Bucarest", emoji: "⚙️", text: "Le processus était tellement simple. Ils ont géré tout le dossier, les traductions, le visa. J'ai juste eu à faire mes valises.", stars: 5 },
  { name: "Sofia L.", field: "Business — Timișoara", emoji: "📊", text: "J'hésitais entre plusieurs pays. Sarab m'a convaincu avec la Roumanie et franchement c'est le meilleur choix que j'ai fait. Coût de vie imbattable !", stars: 5 },
  { name: "Mehdi A.", field: "Dentaire — Iași", emoji: "🦷", text: "L'équipe est super réactive, ils répondent en moins d'une heure. Le remboursement en cas de non-admission m'a rassuré. Au final, j'ai été accepté !", stars: 5 },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="temoignages" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">Témoignages 💬</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Ils l'ont fait, <span className="gradient-text">pourquoi pas toi ?</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -5 }} className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 mb-6 leading-relaxed italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{t.emoji}</span>
                <div>
                  <h4 className="font-bold font-display text-foreground text-sm">{t.name}</h4>
                  <p className="text-xs text-muted-foreground">{t.field}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
