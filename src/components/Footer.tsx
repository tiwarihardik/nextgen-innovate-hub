import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import summitLogo from "@/assets/gnu-nextgen-summit-logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-foreground/5 to-primary/5 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Logo & About */}
            <div className="lg:col-span-1">
              <img 
                src={summitLogo} 
                alt="GNU NextGen Summit 2026" 
                className="h-16 w-auto object-contain mb-4"
              />
              <p className="text-sm text-muted-foreground mb-4">
                Empowering the next generation of leaders through innovation, competition, and collaboration.
              </p>
              {/* Social Media */}
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-primary" />
                </a>
                <a 
                  href="#" 
                  className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-primary" />
                </a>
                <a 
                  href="#" 
                  className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-primary" />
                </a>
                <a 
                  href="#" 
                  className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 text-primary" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection("about")}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About Summit
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("events")}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Events
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("timeline")}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Timeline
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("prizes")}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Prizes
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("faq")}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            {/* Events */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">Events</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection("events")}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Stockathon
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("events")}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Mini SharkTank
                  </button>
                </li>
                <li className="pt-2">
                  <button 
                    onClick={() => scrollToSection("register")}
                    className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                  >
                    Register Now →
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <a 
                    href="mailto:contact@gnunextgen.com" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    contact@gnunextgen.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <a 
                    href="tel:+911234567890" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +91 123 456 7890
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Guru Nanak University<br />
                    Hyderabad, Telangana
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Partners Section */}
          <div className="border-t border-border pt-8 mb-8">
            <div className="text-center mb-4">
              <p className="text-sm font-semibold text-muted-foreground mb-2">In Partnership With</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <span className="text-sm text-foreground font-semibold">Guru Nanak University</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-accent font-semibold">TRINITi</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-foreground">B School Bulls</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-foreground">NISA</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-foreground">AngelBlue</span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-muted-foreground">
                © 2026 GNU NextGen Summit. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
