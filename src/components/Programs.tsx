import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const programs = [
  {
    emoji: "🩺",
    title: "Médecine & Santé",
    fields: ["Médecine générale", "Dentaire", "Pharmacie", "Kinésithérapie"],
    duration: "6 ans",
    color: "from-red-500/20 to-red-500/5",
    borderColor: "hover:border-red-400/40",
  },
  {
    emoji: "⚙️",
    title: "Ingénierie & Tech",
    fields: ["Informatique", "Génie civil", "Mécanique", "Électronique"],
    duration: "4 ans",
    color: "from-accent/20 to-accent/5",
    borderColor: "hover:border-accent/40",
  },
  {
    emoji: "📊",
    title: "Business & Management",
    fields: ["MBA", "Finance", "Marketing", "Commerce international"],
    duration: "3-4 ans",
    color: "from-primary/20 to-primary/5",
    borderColor: "hover:border-primary/40",
  },
  {
    emoji: "🎨",
    title: "Autres filières",
    fields: ["Architecture", "Droit", "Lettres", "Sciences politiques"],
    duration: "3-5 ans",
    color: "from-emerald/20 to-emerald/5",
    borderColor: "hover:border-emerald/40",
  },
];

const Programs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="filieres" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Nos filières 📖
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Trouve <span className="gradient-text">ta voie</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quelle que soit ta filière, on a une université partenaire qui t'attend. 🎯
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className={`glass-card rounded-2xl p-8 ${prog.borderColor} transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-4xl block mb-3">{prog.emoji}</span>
                  <h3 className="text-xl font-bold font-display text-foreground">{prog.title}</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  {prog.duration}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {prog.fields.map((field) => (
                  <span
                    key={field}
                    className="px-3 py-1.5 rounded-lg bg-secondary/80 text-secondary-foreground text-sm"
                  >
                    {field}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
