import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Léa M.",
    role: "Coach fitness",
    avatar: "💪",
    text: "Avant Sarab, je passais 2h par jour dans mes DMs. Maintenant je me lève, j'ouvre mon agenda, et ma journée est planifiée. C'est un GAME CHANGER.",
    rating: 5,
  },
  {
    name: "Thomas K.",
    role: "Consultant business",
    avatar: "🧠",
    text: "J'étais sceptique au début. Mais quand j'ai vu mes rendez-vous augmenter de 300% en un mois... j'ai compris. Sarab c'est du sérieux.",
    rating: 5,
  },
  {
    name: "Sarah B.",
    role: "Créatrice de contenu",
    avatar: "🎨",
    text: "L'équipe Sarab comprend exactement mon ton et ma façon de parler. Mes abonnés ne voient même pas la différence. Incroyable 🫶",
    rating: 5,
  },
];

const TestimonialCard = ({ t, index }: { t: typeof testimonials[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -2 : 2 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass-card rounded-2xl p-8 relative"
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-foreground/90 mb-6 leading-relaxed italic">"{t.text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-2xl">
          {t.avatar}
        </div>
        <div>
          <p className="font-semibold font-display text-foreground">{t.name}</p>
          <p className="text-sm text-muted-foreground">{t.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="témoignages" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Ils nous kiffent 💜
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Ce que disent <span className="gradient-text">nos clients.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
