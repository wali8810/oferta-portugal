import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Quanto tempo demoro a aprender?",
    answer: "As aulas são diretas ao ponto. Em poucas horas, terá o conhecimento necessário para começar a aplicar."
  },
  {
    question: "Preciso de máquinas ou materiais caros?",
    answer: "Não. As aulas mostram como criar peças incríveis com materiais simples e acessíveis."
  },
  {
    question: "E se eu não gostar das aulas?",
    answer: "Tem 30 dias de garantia incondicional. Se não gostar, devolvemos o seu dinheiro."
  },
  {
    question: "O acesso é vitalício?",
    answer: "Sim! Paga uma vez e tem acesso para sempre, incluindo todas as futuras atualizações."
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
