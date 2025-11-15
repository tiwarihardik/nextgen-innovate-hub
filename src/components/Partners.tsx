import { Card } from "@/components/ui/card";
import gnuLogo from "@/assets/gnu-logo.png";
import trinitiLogo from "@/assets/triniti-logo.png";
import bSchoolBullsLogo from "@/assets/b-school-bulls-logo.png";
import angelBlueLogo from "@/assets/angel-blue-logo.png";
import nisaLogo from "@/assets/nisa-logo-new.png";

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Partners
          </h2>
          <p className="text-lg text-muted-foreground">
            In collaboration with leading organizations shaping the future of education
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Hosted By */}
          <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/30 transition-all shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-8 text-foreground">Hosted By</h3>
              <div className="flex justify-center">
                <img 
                  src={gnuLogo} 
                  alt="Guru Nanak University, Hyderabad" 
                  className="h-24 md:h-32 w-auto object-contain"
                />
              </div>
            </div>
          </Card>

          {/* Powered By */}
          <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-2 border-border hover:border-accent/30 transition-all shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-8 text-foreground">Powered By</h3>
              <div className="flex justify-center">
                <img 
                  src={trinitiLogo} 
                  alt="TRINITi - Scaling New Heights" 
                  className="h-20 md:h-24 w-auto object-contain"
                />
              </div>
            </div>
          </Card>

          {/* In Collaboration With */}
          <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-2 border-border hover:border-accent/30 transition-all shadow-lg">
            <h3 className="text-2xl font-bold mb-10 text-center text-foreground">In Collaboration With</h3>
            <div className="grid md:grid-cols-3 gap-12 items-center justify-items-center">
              <div className="flex justify-center items-center">
                <img 
                  src={bSchoolBullsLogo} 
                  alt="B School Bulls - Transforming Management Education" 
                  className="h-16 md:h-20 w-auto object-contain hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex justify-center items-center">
                <img 
                  src={angelBlueLogo} 
                  alt="AngelBlue" 
                  className="h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex justify-center items-center">
                <img 
                  src={nisaLogo} 
                  alt="NISA - National Independent Schools Alliance" 
                  className="h-16 md:h-20 w-auto object-contain hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Partners;
