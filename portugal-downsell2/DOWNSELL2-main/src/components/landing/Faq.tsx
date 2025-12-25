import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "As artes são digitais?",
    answer: "Sim, acesso imediato."
  },
  {
    question: "Posso usar em vários trabalhos?",
    answer: "Sim, uso ilimitado."
  },
  {
    question: "Preciso de experiência?",
    answer: "Não."
  },
  {
    question: "O acesso é vitalício?",
    answer: "Sim."
  }
];

export function Faq() {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-white">
            <span role="img" aria-label="question mark">❓</span> Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground mt-2">Tire todas as suas dúvidas</p>
        </div>
        <Accordion type="single" collapsible className="w-full bg-black text-yellow-400">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border-b border-white/30">
              <AccordionTrigger className="text-md md:text-lg text-left hover:no-underline py-6">{item.question}</AccordionTrigger>
              <AccordionContent className="text-white/80 text-base pb-6 whitespace-pre-line">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
