import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import WhyParticipate from "@/components/WhyParticipate";
import Timeline from "@/components/Timeline";
import Partners from "@/components/Partners";
import Prizes from "@/components/Prizes";
import FAQ from "@/components/FAQ";
import Register from "@/components/Register";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <WhyParticipate />
      <Timeline />
      <Prizes />
      <Partners />
      <FAQ />
      <Register />
      <Footer />
    </div>
  );
};

export default Index;
