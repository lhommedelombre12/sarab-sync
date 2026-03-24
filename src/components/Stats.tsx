import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "30+", label: "Créateurs accompagnés", emoji: "🎯" },
  { number: "5000+", label: "DMs gérés par mois", emoji: "💬" },
  { number: "300%", label: "De RDV en plus", emoji: "📈" },
  { number: "2h", label: "Gagnées par jour", emoji: "⏰" },
];

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <span className="text-3xl mb-3 block">{stat.emoji}</span>
              <p className="text-3xl md:text-4xl font-bold font-display gradient-text mb-2">{stat.number}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
