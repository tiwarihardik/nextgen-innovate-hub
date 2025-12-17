import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Lightbulb, Calendar, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Events = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const events = [
    {
      title: "STOCKATHON",
      subtitle: "A National Stock Market Challenge",
      icon: TrendingUp,
      gradient: "from-primary/20 to-primary/5",
      description: "A national stock market simulation that makes finance interactive, engaging, and fun. Students will trade in a risk-free, gamified environment, learning how markets move, how trends shift, and how decisions shape outcomes.",
      benefits: [
        "A hands-on introduction to trading and market dynamics",
        "Learning strategic thinking under real-time conditions",
        "A stronger grasp of finance, risk, and reward"
      ],
      details: {
        finale: "10th January 2026",
        eligibility: "Grade XI & XII",
        registerBy: "26th December 2025"
      }
    },
    {
      title: "MINI SHARKTANK",
      subtitle: "A Pitching Platform for Young Entrepreneurs",
      icon: Lightbulb,
      gradient: "from-accent/20 to-accent/5",
      description: "The iconic platform where bold ideas meet real opportunities. Students pitch their business ideas to a panel of investors and industry experts who offer mentorship, market exposure, and potential funding.",
      benefits: [
        "A chance to refine your startup idea with professional feedback",
        "Access to real investors and mentors",
        "The opportunity to turn your concept into a funded venture"
      ],
      details: {
        finale: "10th January 2026",
        eligibility: "Grade XI & XII",
        registerBy: "18th December 2025"
      }
    }
  ];

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Flagship Events
          </h2>
          <p className="text-lg text-muted-foreground">
            Two powerful platforms connecting academic learning with real-world innovation
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {events.map((event, index) => (
            <Card
              key={index}
              className={`overflow-hidden border-border shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`bg-gradient-to-br ${event.gradient} p-8`}>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <event.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-2 text-foreground">{event.title}</h3>
                    <p className="text-lg text-muted-foreground mb-4">{event.subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="text-foreground leading-relaxed mb-6">
                  {event.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">What you will gain:</h4>
                  <ul className="space-y-2">
                    {event.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent" />
                    <div>
                      <div className="text-sm text-muted-foreground">Register By</div>
                      <div className="font-semibold text-foreground">{event.details.registerBy}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-accent" />
                    <div>
                      <div className="text-sm text-muted-foreground">Grand Finale</div>
                      <div className="font-semibold text-foreground">{event.details.finale}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-accent" />
                    <div>
                      <div className="text-sm text-muted-foreground">Eligibility</div>
                      <div className="font-semibold text-foreground">{event.details.eligibility}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Link to="/register">
                    <Button size="lg" className="w-full group hover:scale-105 transition-transform">
                      Register Now
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
