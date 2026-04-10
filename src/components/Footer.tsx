import logo from "@/assets/sarab-logo.png";

const Footer = () => {
  return (
    <footer className="section-padding pt-16 pb-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <img src={logo} alt="Sarab" className="h-8 mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Votre passerelle vers les études en Roumanie. Accompagnement complet, transparent et sans risque. 🎓
            </p>
          </div>
          <div>
            <h4 className="font-bold font-display text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: "Pourquoi la Roumanie", href: "#pourquoi" },
                { label: "Filières", href: "#filieres" },
                { label: "Processus", href: "#processus" },
                { label: "Tarifs", href: "#tarifs" },
                { label: "Témoignages", href: "#temoignages" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold font-display text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📱 WhatsApp disponible</li>
              <li>⚡ Réponse en -1h</li>
              <li>🇷🇴 Bucarest, Roumanie</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Sarab — Études en Roumanie. Tous droits réservés. 🎓</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
