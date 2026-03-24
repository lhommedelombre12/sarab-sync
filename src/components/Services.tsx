import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Calendar, Sparkles, TrendingUp } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    emoji: "💬",
    title: "Gestion des DMs",
    description: "On répond à tes messages avec ton ton, ta vibe. Tes prospects se sentent écoutés, et toi tu gagnes du temps.",
    gradient: "from-pink to-accent",
  },
  {
    icon: Calendar,
    emoji: "📅",
    title: "Organisation Agenda",
    description: "Ton agenda, c'est devenu ton meilleur pote. Chaque matin, ta journée est planifiée. Zéro stress.",
    gradient: "from-accent to-blue",
  },
  {
    icon: Sparkles,
    emoji: "✨",
    title: "Production de contenu",
    description: "On gère ta prod' pour que ton contenu soit toujours frais, régulier, et engageant.",
    gradient: "from-blue to-cyan",
  },
  {
    icon: TrendingUp,
    emoji: "📈",
    title: "Croissance garantie",
    description: "Plus de prospects convertis, plus de rendez-vous, plus de temps pour toi. C'est mathématique.",
    gradient: "from-cyan to-pink",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="glass-card rounded-2xl p-8 group cursor-pointer relative overflow-hidden"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-accent/5" />

      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
          className="text-4xl mb-6 inline-block"
        >
          {service.emoji}
        </motion.div>
        <h3 className="text-xl font-bold font-display mb-3 text-foreground">{service.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Ce qu'on fait de mieux 🎨
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Tout ce que tu détestes faire,
            <br />
            <span className="gradient-text">on le fait pour toi.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pendant que tu fais ce que tu aimes, nous on s'occupe du reste. Deal ? 🤝
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
