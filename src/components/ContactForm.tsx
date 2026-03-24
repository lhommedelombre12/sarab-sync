import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Instagram, Phone, User, MessageCircle } from "lucide-react";

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    instagram: "",
    whatsapp: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Prêt à scaler ? 🚀
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Laisse-nous tes infos,
            <br />
            <span className="gradient-text">on te recontacte en -1h.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pas de formulaire à rallonge. Juste l'essentiel pour qu'on puisse te contacter et te montrer ce qu'on peut faire pour toi. 💬
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left side — Why us */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { emoji: "⚡", title: "Réponse en -1h", desc: "On ne te fait pas attendre. Tu laisses tes infos, on te contacte dans l'heure." },
              { emoji: "🎯", title: "Call personnalisé", desc: "On étudie ton profil avant de t'appeler. Pas de blabla, que du concret." },
              { emoji: "🤝", title: "Sans engagement", desc: "Tu discutes, tu poses tes questions, zéro pression. Promis." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex gap-4 items-start"
              >
                <span className="text-2xl flex-shrink-0 mt-1">{item.emoji}</span>
                <div>
                  <h4 className="font-bold font-display text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Hand-drawn style illustration */}
            <div className="hidden lg:block pt-6">
              <svg viewBox="0 0 200 160" className="w-full max-w-[200px] mx-auto opacity-30" fill="none" stroke="hsl(345 100% 65%)" strokeWidth="1.5" strokeLinecap="round">
                {/* Cute phone doodle */}
                <rect x="55" y="10" width="90" height="140" rx="15" strokeDasharray="4 3" />
                <circle cx="100" cy="135" r="6" strokeDasharray="3 2" />
                <line x1="80" y1="25" x2="120" y2="25" strokeDasharray="3 3" />
                {/* Chat bubbles */}
                <rect x="65" y="40" width="50" height="20" rx="10" strokeDasharray="3 2" />
                <rect x="85" y="70" width="50" height="20" rx="10" strokeDasharray="3 2" />
                <rect x="65" y="100" width="50" height="20" rx="10" strokeDasharray="3 2" />
                {/* Stars around */}
                <path d="M35 30 L38 20 L41 30 L31 24 L45 24Z" strokeWidth="1" strokeDasharray="2 2" />
                <path d="M155 50 L158 40 L161 50 L151 44 L165 44Z" strokeWidth="1" strokeDasharray="2 2" />
                <path d="M30 110 L33 100 L36 110 L26 104 L40 104Z" strokeWidth="1" strokeDasharray="2 2" />
              </svg>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-3xl p-10 text-center"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="text-6xl block mb-6"
                >
                  🎉
                </motion.span>
                <h3 className="text-2xl font-bold font-display text-foreground mb-3">
                  C'est noté {formData.name} !
                </h3>
                <p className="text-muted-foreground text-lg">
                  On te recontacte en moins d'une heure.
                  <br />Prépare-toi, ça va être 🔥
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 md:p-10 space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Ton prénom
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    placeholder="Comment tu t'appelles ? 😊"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  />
                </div>

                {/* Instagram */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-primary" />
                    Ton @ Instagram
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    placeholder="@ton.compte"
                    value={formData.instagram}
                    onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  />
                </div>

                {/* WhatsApp */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Ton numéro WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={20}
                    placeholder="+33 6 12 34 56 78"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  />
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-primary" />
                    Parle-nous de toi
                  </label>
                  <textarea
                    required
                    maxLength={1000}
                    rows={4}
                    placeholder="Ton activité, le nombre de DMs que tu reçois, ce que tu cherches... Dis-nous tout ! 💬"
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 40px hsl(345 100% 65% / 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl text-lg font-bold text-primary-foreground flex items-center justify-center gap-3 transition-all"
                  style={{ background: "var(--gradient-hero)" }}
                >
                  <Send className="w-5 h-5" />
                  On me recontacte 🚀
                </motion.button>

                <p className="text-xs text-muted-foreground text-center pt-2">
                  ⚡ Réponse garantie en moins d'une heure pendant nos heures d'ouverture
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
