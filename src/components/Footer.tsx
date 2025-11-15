const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-[hsl(25,95%,53%)] to-[hsl(12,88%,55%)] bg-clip-text text-transparent">
                GNU NEXTGEN SUMMIT 2026
              </span>
            </h3>
            <p className="text-muted-foreground">
              Empowering the next generation of leaders
            </p>
          </div>

          <div className="border-t border-border pt-6 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Hosted by <span className="font-semibold text-primary">Guru Nanak University, Hyderabad</span>
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Powered by <span className="font-semibold text-accent">TRINITi</span>
            </p>
            <p className="text-sm text-muted-foreground">
              In collaboration with B School Bulls, NISA, and AngelBlue
            </p>
          </div>

          <div className="border-t border-border mt-6 pt-6 text-center">
            <p className="text-xs text-muted-foreground">
              © 2026 GNU NextGen Summit. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
