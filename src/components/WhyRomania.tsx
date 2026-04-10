import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Stethoscope, Cpu, Briefcase, Globe, BookOpen, Building } from "lucide-react";

const WhyRomania = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: Stethoscope,
      title: "Médecine reconnue en Europe",
      desc: "Diplômes reconnus dans toute l'UE. Étudie la médecine, la dentaire ou la pharmacie dans des universités de renommée internationale.",
      emoji: "🏥",
    },
    {
      icon: Globe,
      title: "Études en 3 langues",
      desc: "Choisis d'étudier en français, anglais ou allemand. Pas besoin d'apprendre le roumain pour réussir.",
      emoji: "🌍",
    },
    {
      icon: Building,
      title: "Coût de vie abordable",
      desc: "Loyers, transports, nourriture — la Roumanie offre une qualité de vie étudiante imbattable en Europe.",
      emoji: "💶",
    },
    {
      icon: BookOpen,
      title: "Universités accréditées",
      desc: "Plus de 30 universités reconnues avec des cursus internationaux et des infrastructures modernes.",
      emoji: "📚",
    },
    {
      icon: Cpu,
      title: "Ingénierie de pointe",
      desc: "La Roumanie est un hub tech européen. Des formations en informatique et ingénierie au top.",
      emoji: "⚙️",
    },
    {
      icon: Briefcase,
      title: "Business & Management",
      desc: "MBA et licences en business avec stages en entreprises européennes. Un tremplin pour ta carrière.",
      emoji: "📊",
    },
  ];

  return (
    <section id="pourquoi" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Pourquoi la Roumanie ? 🇷🇴
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            L'Europe, sans se ruiner.
            <br />
            <span className="gradient-text">La qualité, garantie.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des universités reconnues, des frais accessibles, et un cadre de vie incroyable.
            La Roumanie, c'est le secret le mieux gardé des étudiants malins. 🧠
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card rounded-2xl p-8 group hover:border-primary/30 transition-all duration-300 cursor-default"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{reason.emoji}</span>
                <reason.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-display text-foreground mb-3 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRomania;
