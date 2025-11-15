import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Trophy, ArrowRight } from "lucide-react";

const Register = () => {
  return (
    <section id="register" className="py-20 bg-gradient-to-br from-accent/10 via-background to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card/95 backdrop-blur-sm border-2 border-accent/20 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Ready to Shape Your Future?
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Join India's brightest student minds at the GNU NextGen Summit 2026
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <Calendar className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-sm text-muted-foreground">Register By</div>
                <div className="font-bold text-foreground">4th Dec 2025</div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-sm text-muted-foreground">Grand Finale</div>
                <div className="font-bold text-foreground">Vivanta, Hyderabad</div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <Trophy className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-sm text-muted-foreground">Prize Pool</div>
                <div className="font-bold text-foreground">₹50,000</div>
              </div>
            </div>

            <div className="bg-accent/5 border-l-4 border-accent rounded-lg p-6 mb-8">
              <h3 className="font-bold text-lg mb-3 text-foreground">What happens after registration?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>You'll receive confirmation and detailed event information via email</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Preliminary round details will be shared in December 2025</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Finalists will compete at the Grand Finale on 10th January 2026</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[hsl(25,95%,53%)] to-[hsl(12,88%,55%)] hover:opacity-90 transition-opacity text-lg px-12 py-6 shadow-xl text-white font-semibold"
              >
                Register Now - Closes Soon
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Limited spots available • First come, first served
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Register;
