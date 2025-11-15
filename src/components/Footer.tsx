import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import summitLogo from "@/assets/gnu-nextgen-summit-logo.png";
import { Link } from "react-router-dom";

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
                  <Link 
                    to="/register"
                    className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                  >
                    Register Now →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <div className="flex flex-col gap-1">
                    <a 
                      href="mailto:info@triniti.org.in" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      info@triniti.org.in
                    </a>
                    <a 
                      href="mailto:adadmissions@gniindia.org" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      adadmissions@gniindia.org
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <div className="flex flex-col gap-1">
                    <a 
                      href="tel:+918008295550" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +91 8008295550/51
                    </a>
                    <a 
                      href="tel:+919815088426" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +91 98150 88426
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Guru Nanak University<br />
                    Ibrahimpatnam, R. R. District<br />
                    Hyderabad – 501 506
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Partners Section */}
          <div className="border-t border-border pt-8 mb-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Hosted by</span>
                <span className="text-sm text-foreground font-semibold">GNU</span>
              </div>
              <span className="hidden md:inline text-muted-foreground">|</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Powered by</span>
                <span className="text-sm text-accent font-semibold">TRINITi</span>
              </div>
              <span className="hidden md:inline text-muted-foreground">|</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">In partnership with</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-foreground">B School Bulls</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-sm text-foreground">NISA</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-sm text-foreground">AngelBlue</span>
                </div>
              </div>
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
