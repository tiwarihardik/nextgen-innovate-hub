import { Card } from "@/components/ui/card";
import { Trophy, Award, Users } from "lucide-react";

const Prizes = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Prizes & Recognition
          </h2>
          <p className="text-lg text-muted-foreground">
            Celebrating excellence and innovation
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/50 shadow-xl text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-foreground">Grand Prize</h3>
              <p className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
                ₹50,000
              </p>
              <p className="text-muted-foreground">For the winning team</p>
            </Card>

            <Card className="p-8 bg-card border-border shadow-lg text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Excellence Certificates</h3>
              <p className="text-muted-foreground mb-4">
                All finalists receive certificates of excellence and participation, recognizing their achievement on a national platform
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-card border-border shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Mentorship & Exposure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond monetary prizes, all participants gain invaluable mentorship opportunities and direct exposure to industry professionals, investors, and entrepreneurs. Connect with experts who can guide your entrepreneurial journey and open doors to future opportunities.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
