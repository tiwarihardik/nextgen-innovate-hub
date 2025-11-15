import { Card } from "@/components/ui/card";
import { Award, BookOpen, Network, Briefcase, Zap } from "lucide-react";

const WhyParticipate = () => {
  const benefits = [
    {
      icon: Award,
      title: "National Recognition",
      description: "Compete with top students from across India and showcase your skills on a national platform"
    },
    {
      icon: BookOpen,
      title: "Practical Learning",
      description: "Apply what you learn in classrooms to real-world challenges and gain hands-on experience"
    },
    {
      icon: Network,
      title: "Networking",
      description: "Engage with investors, entrepreneurs, and industry experts who can guide your journey"
    },
    {
      icon: Briefcase,
      title: "Career Advantage",
      description: "Stand out in placements and internships with hands-on exposure and national-level participation"
    },
    {
      icon: Zap,
      title: "Innovation Mindset",
      description: "Learn to think critically, pitch confidently, and execute boldly in competitive environments"
    }
  ];

  return (
    <section id="why-participate" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Participate?
          </h2>
          <p className="text-lg text-muted-foreground">
            More than just a competition—it's your launchpad to success
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyParticipate;
