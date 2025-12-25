import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "As aulas são em vídeo?",
    answer: "Sim, todo o conteúdo é apresentado em vídeo-aulas práticas e diretas."
  },
  {
    question: "Preciso de experiência?",
    answer: "Não, as aulas são desenhadas para seguir passo a passo, mesmo que seja iniciante."
  },
  {
    question: "Posso aplicar imediatamente?",
    answer: "Sim, o método é prático para que possa aplicar o que aprendeu logo de seguida."
  },
  {
    question: "O acesso é vitalício?",
    answer: "Sim, uma vez adquirido, o acesso às aulas é seu para sempre."
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
