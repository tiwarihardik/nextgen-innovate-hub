import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Trophy } from "lucide-react";
import summitLogo from "@/assets/gnu-nextgen-summit-logo.jpg";

const Hero = () => {
  const scrollToRegister = () => {
    const element = document.getElementById("register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(25,95%,53%)] via-[hsl(12,88%,55%)] to-[hsl(211,100%,35%)] opacity-10" />
      
      {/* Animated Circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-8 flex justify-center">
            <img 
              src={summitLogo} 
              alt="GNU NextGen Summit 2026" 
              className="h-32 md:h-40 w-auto object-contain"
            />
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Where India's brightest student minds compete, innovate, and shape the future of finance and entrepreneurship
          </p>

          {/* Key Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-lg">
              <Calendar className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-sm text-muted-foreground">Grand Finale</div>
              <div className="text-lg font-bold text-foreground">10th January 2026</div>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-lg">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-sm text-muted-foreground">Venue</div>
              <div className="text-lg font-bold text-foreground">Vivanta, Hyderabad</div>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-lg">
              <Trophy className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-sm text-muted-foreground">Grand Prize</div>
              <div className="text-lg font-bold text-foreground">₹50,000</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToRegister}
              className="bg-gradient-to-r from-[hsl(25,95%,53%)] to-[hsl(12,88%,55%)] hover:opacity-90 transition-opacity text-lg px-8 py-6 shadow-lg"
            >
              Register Now - Closes Dec 4th
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("about");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-lg px-8 py-6 border-2"
            >
              Learn More
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Powered by TRINITi • Hosted by Guru Nanak University, Hyderabad
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
