import logo from "@/assets/sarab-logo.png";

const Footer = () => {
  return (
    <footer className="section-padding pb-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logo} alt="Sarab Agency" className="h-8" />
            <p className="text-muted-foreground text-sm">
              Ton virtual manager préféré. 💖
            </p>
          </div>

          <div className="flex items-center gap-8">
            {["Instagram", "LinkedIn", "TikTok"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sarab Agency. Fait avec 🩷 et beaucoup de café ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
