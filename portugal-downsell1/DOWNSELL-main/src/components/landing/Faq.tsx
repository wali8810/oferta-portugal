import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Quanto tempo demoro a aprender?",
    answer: "Pode começar a aplicar o método e a ver resultados nas primeiras 24 a 48 horas. O curso é muito direto."
  },
  {
    question: "Preciso de máquinas ou materiais caros?",
    answer: "Não. Só vai precisar de tesoura, régua, cola e cartão ou tecido. O investimento em material é muito baixo."
  },
  {
    question: "E se eu não gostar do curso?",
    answer: "Tem 30 dias de garantia incondicional. Se não ficar satisfeita por qualquer motivo, devolvemos 100% do seu dinheiro, sem perguntas."
  },
  {
    question: "O acesso é vitalício?",
    answer: "Sim! Paga uma vez e tem acesso para sempre, incluindo todas as futuras atualizações do curso."
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
