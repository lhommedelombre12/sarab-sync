import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, User, Phone, BookOpen, BarChart3, Globe, MessageCircle } from "lucide-react";

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    filiere: "",
    filiereDetail: "",
    moyenneBac: "",
    langue: "",
    motivation: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-5 py-3.5 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all";

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
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
            Prêt à partir ? 🚀
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Laisse-nous tes infos,
            <br />
            <span className="gradient-text">on te recontacte en -1h.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Remplis le formulaire et un conseiller Sarab te contacte pour évaluer ton projet gratuitement. 💬
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left — Why trust us */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { emoji: "⚡", title: "Réponse en -1h", desc: "On ne te fait pas attendre. Tu nous écris, on te rappelle dans l'heure." },
              { emoji: "🎯", title: "Évaluation gratuite", desc: "On analyse ton dossier et ta moyenne pour te dire tes chances de réussite." },
              { emoji: "🤝", title: "100% remboursable", desc: "Si tu n'es pas admis, on te rembourse intégralement. Zéro risque." },
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

            {/* Romania doodle */}
            <div className="hidden lg:block pt-6">
              <svg viewBox="0 0 200 180" className="w-full max-w-[200px] mx-auto opacity-25" fill="none" stroke="hsl(42 90% 55%)" strokeWidth="1.5" strokeLinecap="round">
                {/* University building */}
                <rect x="40" y="60" width="120" height="90" rx="4" strokeDasharray="4 3" />
                <polygon points="100,20 40,60 160,60" strokeDasharray="3 2" />
                {/* Columns */}
                <line x1="65" y1="70" x2="65" y2="140" strokeDasharray="3 3" />
                <line x1="100" y1="70" x2="100" y2="140" strokeDasharray="3 3" />
                <line x1="135" y1="70" x2="135" y2="140" strokeDasharray="3 3" />
                {/* Door */}
                <rect x="85" y="115" width="30" height="35" rx="15" strokeDasharray="3 2" />
                {/* Stars */}
                <circle cx="25" cy="40" r="3" strokeDasharray="2 2" />
                <circle cx="175" cy="35" r="4" strokeDasharray="2 2" />
                <circle cx="15" cy="100" r="2" strokeDasharray="2 2" />
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
                  C'est noté {formData.fullName.split(" ")[0]} !
                </h3>
                <p className="text-muted-foreground text-lg">
                  On te recontacte en moins d'une heure.
                  <br />Prépare-toi, ton aventure commence ! 🇷🇴
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 md:p-10 space-y-5">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Nom & Prénom
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    placeholder="Ton nom complet 😊"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={inputClass}
                  />
                </div>

                {/* WhatsApp */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    WhatsApp <span className="text-xs text-primary">(indispensable)</span>
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={20}
                    placeholder="+33 6 12 34 56 78"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className={inputClass}
                  />
                </div>

                {/* Filière */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    Filière visée
                  </label>
                  <select
                    required
                    value={formData.filiere}
                    onChange={(e) => setFormData({ ...formData, filiere: e.target.value })}
                    className={inputClass + " appearance-none cursor-pointer"}
                  >
                    <option value="">Choisis ta filière...</option>
                    <option value="medecine">🩺 Médecine</option>
                    <option value="dentaire">🦷 Dentaire</option>
                    <option value="pharmacie">💊 Pharmacie</option>
                    <option value="ingenierie">⚙️ Ingénierie</option>
                    <option value="business">📊 Business / Management</option>
                    <option value="autre">🎨 Autre</option>
                  </select>
                  {formData.filiere === "autre" && (
                    <motion.input
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      type="text"
                      maxLength={200}
                      placeholder="Précise ta filière..."
                      value={formData.filiereDetail}
                      onChange={(e) => setFormData({ ...formData, filiereDetail: e.target.value })}
                      className={inputClass + " mt-2"}
                    />
                  )}
                </div>

                {/* Moyenne Bac */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-primary" />
                    Moyenne du Bac
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={10}
                    placeholder="Ex: 14.5"
                    value={formData.moyenneBac}
                    onChange={(e) => setFormData({ ...formData, moyenneBac: e.target.value })}
                    className={inputClass}
                  />
                </div>

                {/* Langue */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" />
                    Langue d'étude souhaitée
                  </label>
                  <select
                    required
                    value={formData.langue}
                    onChange={(e) => setFormData({ ...formData, langue: e.target.value })}
                    className={inputClass + " appearance-none cursor-pointer"}
                  >
                    <option value="">Choisis ta langue...</option>
                    <option value="francais">🇫🇷 Français</option>
                    <option value="anglais">🇬🇧 Anglais</option>
                    <option value="allemand">🇩🇪 Allemand</option>
                  </select>
                </div>

                {/* Motivation */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-primary" />
                    Un mot sur ton projet <span className="text-xs text-muted-foreground">(optionnel)</span>
                  </label>
                  <textarea
                    maxLength={1000}
                    rows={3}
                    placeholder="Parle-nous de toi, de tes objectifs... 💬"
                    value={formData.motivation}
                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                    className={inputClass + " resize-none"}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 40px hsl(42 90% 55% / 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl text-lg font-bold text-primary-foreground flex items-center justify-center gap-3 transition-all"
                  style={{ background: "var(--gradient-hero)" }}
                >
                  <Send className="w-5 h-5" />
                  Envoyer ma demande 🎓
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
