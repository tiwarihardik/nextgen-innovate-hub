import { Card } from "@/components/ui/card";

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Partners
          </h2>
          <p className="text-lg text-muted-foreground">
            In collaboration with leading organizations shaping the future of education
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="p-8 md:p-12 bg-card border-border shadow-lg mb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Hosted By</h3>
              <div className="flex flex-col items-center gap-3">
                <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Guru Nanak University
                </p>
                <p className="text-lg text-muted-foreground">Hyderabad • Empowering Youth</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 md:p-12 bg-card border-border shadow-lg mb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Powered By</h3>
              <div className="flex flex-col items-center gap-3">
                <p className="text-3xl font-bold text-accent">TRINITi</p>
                <p className="text-lg text-muted-foreground">Scaling New Heights in Experiential Education</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 md:p-12 bg-card border-border shadow-lg">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">In Collaboration With</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-accent">BS</span>
                </div>
                <p className="font-semibold text-foreground">B School Bulls</p>
              </div>
              <div>
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-primary">NISA</span>
                </div>
                <p className="font-semibold text-foreground">National Independent Schools Alliance</p>
              </div>
              <div>
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-accent">AB</span>
                </div>
                <p className="font-semibold text-foreground">AngelBlue</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Partners;
