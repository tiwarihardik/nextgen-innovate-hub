import { Card } from "@/components/ui/card";
import { Lightbulb, Target, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About GNU NextGen Summit
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The GNU NextGen Summit 2026 brings together the sharpest student minds from across India to test their skills, pitch their ideas, and take their first steps into the world of finance, entrepreneurship, and innovation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="p-8 mb-8 bg-card border-border shadow-lg">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Hosted by <span className="font-semibold text-primary">Guru Nanak University, Hyderabad</span>, and powered by <span className="font-semibold text-accent">TRINITi</span>, this national platform celebrates the spirit of learning by blending knowledge, creativity, and competition into one powerful experience.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              The GNU NextGen Summit is designed to inspire, challenge, and empower the next generation of thinkers and leaders. This isn't just a competition—it's a launchpad for ideas, confidence, and future careers.
            </p>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center bg-card border-border hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Innovation</h3>
              <p className="text-muted-foreground">
                Transform ideas into reality through practical challenges and mentorship
              </p>
            </Card>

            <Card className="p-6 text-center bg-card border-border hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Excellence</h3>
              <p className="text-muted-foreground">
                Compete at a national level and benchmark yourself against India's best
              </p>
            </Card>

            <Card className="p-6 text-center bg-card border-border hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Community</h3>
              <p className="text-muted-foreground">
                Network with investors, entrepreneurs, and industry experts
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
