import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Who can participate in GNU NextGen Summit 2026?",
      answer: "The summit is open to all Grade XI and XII students across India. Both events - Stockathon and Mini SharkTank - are designed specifically for high school students looking to gain practical experience in finance and entrepreneurship."
    },
    {
      question: "What is the registration deadline?",
      answer: "The last date to register is 30th November 2025. We recommend registering early as spots are limited and will be allocated on a first-come, first-served basis."
    },
    {
      question: "Is there a registration fee?",
      answer: "Please contact the organizing team for detailed information about registration fees and any early bird discounts that may be available."
    },
    {
      question: "Can I participate in both Stockathon and Mini SharkTank?",
      answer: "While we encourage students to explore both opportunities, you may need to choose one event to focus on depending on the schedule. Details about dual participation will be shared during the registration process."
    },
    {
      question: "Do I need prior experience in finance or entrepreneurship?",
      answer: "No prior experience is required! Both events are designed to be learning experiences. Stockathon provides a risk-free introduction to trading, and Mini SharkTank offers mentorship to help you refine your ideas regardless of your current knowledge level."
    },
    {
      question: "How will the preliminary rounds work?",
      answer: "Preliminary rounds will be conducted in December 2025. Specific formats and requirements will be shared with registered participants. These rounds will help select the finalists who will compete at the Grand Finale in Hyderabad."
    },
    {
      question: "What should I bring to the Grand Finale?",
      answer: "Detailed instructions about required materials, presentation formats, and other logistics will be provided to qualified finalists closer to the event date."
    },
    {
      question: "How can I contact the organizing team?",
      answer: "For any queries, please reach out through the contact information provided in the registration portal or contact Guru Nanak University, Hyderabad directly."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about the summit
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-accent">
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
