import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();

  const faqs = [
    {
      question: "Who can participate in GNU NextGen Summit 2026?",
      answer: "The summit is open to students in Grade 11 and Grade 12 across India. Both events - Stockathon and Mini SharkTank - are designed specifically for high school students looking to gain practical experience in finance and entrepreneurship."
    },
    {
      question: "What is the registration deadline?",
      answer: "The last date to register is 4th December 2025. We recommend registering early as spots are limited and will be allocated on a first-come, first-served basis."
    },
    {
      question: "Is there a registration fee?",
      answer: "Yes, there is a registration fee. After completing the registration form, you'll be redirected to our secure payment page to complete your registration."
    },
    {
      question: "Can I participate in both Stockathon and Mini SharkTank?",
      answer: "You need to choose one event during registration - either Stockathon or Mini SharkTank. Each event has its own unique format and requirements, allowing you to focus and excel in your chosen competition."
    },
    {
      question: "Do I need prior experience in finance or entrepreneurship?",
      answer: "No prior experience is required! Both events are designed to be learning experiences. Stockathon provides a risk-free introduction to trading, and Mini SharkTank offers mentorship to help you refine your ideas regardless of your current knowledge level."
    },
    {
      question: "How will the preliminary rounds work?",
      answer: "Preliminary rounds will be conducted in December 2025. Specific formats and requirements will be shared with registered participants via email. These rounds will help select the finalists who will compete at the Grand Finale in Hyderabad."
    },
    {
      question: "What happens after I register and pay?",
      answer: "After successful registration and payment, you'll receive a confirmation email within 24-48 hours with detailed event information, preliminary round details, and next steps."
    },
    {
      question: "Where is the Grand Finale being held?",
      answer: "The Grand Finale will be held on 10th January 2026 at Vivanta, Hyderabad. Detailed venue information and logistics will be shared with qualified finalists closer to the event date."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about the summit
          </p>
        </div>

        <div className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-lg hover:border-accent/20 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-accent transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
