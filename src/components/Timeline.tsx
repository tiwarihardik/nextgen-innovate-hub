import { Card } from "@/components/ui/card";
import { Calendar, CheckCircle2, Clock } from "lucide-react";

const Timeline = () => {
  const timelineEvents = [
    {
      stage: "Registrations Open",
      date: "Ongoing",
      status: "active",
      description: "Open for all Grade XI & XII students across India"
    },
    {
      stage: "Last Date to Register",
      date: "13th December 2025",
      status: "upcoming",
      description: "Final deadline for registrations"
    },
    {
      stage: "Preliminary Rounds",
      date: "December 2025",
      status: "upcoming",
      description: "Initial selection and qualification rounds"
    },
    {
      stage: "Grand Finale",
      date: "10th January 2026",
      status: "upcoming",
      description: "Final competition at Vivanta, Hyderabad"
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Event Timeline
          </h2>
          <p className="text-lg text-muted-foreground">
            Mark your calendars and prepare for each milestone
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-primary to-accent/30" />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-background border-4 border-accent items-center justify-center z-10">
                    {event.status === "active" ? (
                      <Clock className="w-6 h-6 text-accent" />
                    ) : (
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-[calc(50%-3rem)]">
                    <Card
                      className={`p-6 bg-card border-border shadow-lg hover:shadow-xl transition-all ${
                        event.status === "active" ? "border-accent border-2" : ""
                      }`}
                    >
                      {event.status === "active" && (
                        <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold mb-3">
                          ACTIVE NOW
                        </span>
                      )}
                      <div className="flex items-start gap-3 mb-3">
                        <Calendar className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {event.stage}
                          </h3>
                          <p className="text-lg font-semibold text-accent">{event.date}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{event.description}</p>
                    </Card>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block w-[calc(50%-3rem)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
