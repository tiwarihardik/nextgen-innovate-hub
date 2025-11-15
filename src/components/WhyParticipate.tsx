import { Card } from "@/components/ui/card";
import { Award, BookOpen, Network, Briefcase, Zap, Sparkles } from "lucide-react";

const WhyParticipate = () => {
  const benefits = [
    {
      icon: Award,
      title: "National Recognition",
      description: "Compete with top students from across India and showcase your skills on a national platform",
      gradient: "from-accent via-accent/80 to-primary"
    },
    {
      icon: BookOpen,
      title: "Practical Learning",
      description: "Apply what you learn in classrooms to real-world challenges and gain hands-on experience",
      gradient: "from-primary via-primary/80 to-accent"
    },
    {
      icon: Network,
      title: "Networking",
      description: "Engage with investors, entrepreneurs, and industry experts who can guide your journey",
      gradient: "from-accent via-accent/80 to-primary"
    },
    {
      icon: Briefcase,
      title: "Career Advantage",
      description: "Stand out in placements and internships with hands-on exposure and national-level participation",
      gradient: "from-primary via-primary/80 to-accent"
    },
    {
      icon: Zap,
      title: "Innovation Mindset",
      description: "Learn to think critically, pitch confidently, and execute boldly in competitive environments",
      gradient: "from-accent via-accent/80 to-primary"
    }
  ];

  return (
    <section id="why-participate" className="relative py-24 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Transform Your Future</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Why Participate?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            More than just a competition—it's your launchpad to success, innovation, and leadership
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group p-8 bg-card/50 backdrop-blur-sm border-2 border-border hover:border-accent/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-base">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyParticipate;
