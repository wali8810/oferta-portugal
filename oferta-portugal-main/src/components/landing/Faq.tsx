import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "O que é o ebook 'Personalizando com Ferro de Passar'?",
    answer: "É um guia prático que ensina a personalizar tecidos usando um ferro de engomar e uma impressora comum, sem necessidade de experiência ou máquinas caras."
  },
  {
    question: "Preciso ter experiência?",
    answer: "Não. O método foi criado para iniciantes. Qualquer pessoa pode aplicá-lo."
  },
  {
    question: "Quanto tempo preciso dedicar por dia?",
    answer: "De 30 a 60 minutos por dia são suficientes para começar a praticar e a criar as suas primeiras peças."
  },
  {
    question: "Por quanto tempo tenho acesso ao ebook?",
    answer: "Acesso vitalício. Pode aceder quando quiser, ler online ou descarregar o material."
  },
  {
    question: "Existe alguma garantia?",
    answer: "Sim. Tem 7 dias de garantia para testar tudo. Se não ficar satisfeito, devolvemos 100% do seu investimento."
  },
  {
    question: "Como funciona o suporte?",
    answer: "Terá acesso ao nosso Suporte VIP individual, com atendimento direto e personalizado."
  },
  {
    question: "O que acontece depois de comprar?",
    answer: "Recebe um e-mail automático da Kiwify com acesso imediato ao ebook. É simples e rápido."
  },
  {
    question: "Preciso investir em máquinas caras?",
    answer: "Não. Só vai precisar de: ✔ Um ferro de engomar ✔ Uma impressora comum ✔ Papel específico (eu ensino qual usar no ebook)."
  },
  {
    question: "Em quantos dispositivos posso usar os ficheiros?",
    answer: "Depois de descarregar os ficheiros, pode copiá-los e partilhá-los em todos os seus dispositivos."
  },
  {
    question: "Por quanto tempo e quantas vezes posso descarregar os templates?",
    answer: "Poderá aceder aos ficheiros quando quiser, sem limites de tempo ou acesso. Entendemos que, após a compra, o ficheiro é seu e não há limites de tempo. O acesso é vitalício!"
  },
  {
    question: "Preciso de algum programa especial para abrir os ficheiros?",
    answer: "Só precisa de um leitor de PDF para abrir e imprimir os ficheiros. Atualmente, todos os dispositivos (PC, Android, iOS) suportam este formato."
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
