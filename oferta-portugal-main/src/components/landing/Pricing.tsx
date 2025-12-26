"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";

const planoCompletoFeatures = [
  "<b>Curso Completo: Padrão Mágico</b>",

  "<b>7 Dias de Garantia</b>",

];

const planoCompletoBonus = [
  { text: "<b>BÓNUS #01: KIT DE ESTAMPAS PRONTAS</b><br/><i>+ DE 500 ESTAMPAS PRONTAS PARA USAR AGORA MESMO!</i>", icon: "check" },
  { text: "<b>BÓNUS #02: CERTIFICADO INCLUSO</b>", icon: "check" },
  { text: "<b>BÓNUS #03: CHECKLIST DE IMPRESSÃO PERFEITA</b>", icon: "check" },
  { text: "<b>BÓNUS #04: GUIA RÁPIDO DE APLICAÇÃO COM FERRO</b>", icon: "check" },

  { text: "<b>Suporte VIP:</b> <i>Acompanhamento individual via WhatsApp por 90 dias para acelerar os seus resultados.</i>", icon: "gift" }
]

const StarIcon = () => (
  <svg
    className="w-7 h-7 text-yellow-400"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-1"
    viewBox="0 0 512 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
  </svg>
);

const GiftIcon = () => (
  <svg aria-hidden="true" className="h-5 w-5 text-yellow-500 mr-2 shrink-0 mt-1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"></path></svg>
)

export function Pricing() {
  return (
    <section id="plans" className="py-16 md:py-24 bg-[#00110F]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-white">ESCOLHA A MELHOR OFERTA PARA SI</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-xl mx-auto">

          {/* Plano Completo */}
          <div className="w-full flex">
            <div
              className="bg-white text-black rounded-2xl shadow-2xl flex flex-col h-full border-4 border-yellow-400 p-6 md:p-8 w-full relative animate-pulse-yellow"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-yellow-400 hover:bg-yellow-400 text-black font-bold border-none shadow-lg px-6 py-2 text-lg whitespace-nowrap">Mais vendido</Badge>
              </div>

              <div className="text-center mb-4 mt-6">
                <div className="flex justify-center mb-4">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <div className="bg-red-500 text-white rounded-full py-2 px-8 mb-2 inline-block">
                  <h3 className="text-xl font-bold uppercase">Plano completo:</h3>
                </div>
                <p className="font-bold text-lg text-black uppercase">(MELHOR OFERTA)</p>
              </div>

              <Image src="https://i.imgur.com/tio74e1.png" alt="Mockup plano completo" width={400} height={300} className="w-full h-auto rounded-md my-4" data-ai-hint="course mockup bundle" priority />

              <ul className="text-left space-y-3 my-4 text-gray-600 flex-grow text-sm md:text-base">
                {planoCompletoFeatures.map((item, index) => (
                  <li key={`complete-${index}`} className="flex items-start pb-3 border-b border-gray-200 last:border-b-0">
                    <CheckIcon />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
                {planoCompletoBonus.map((item, index) => (
                  <li key={`complete-bonus-${index}`} className="flex items-start pb-3 border-b border-gray-200 last:border-b-0">
                    {item.icon === 'check' ? <CheckIcon /> : <GiftIcon />}
                    <span dangerouslySetInnerHTML={{ __html: item.text }} />
                  </li>
                ))}
              </ul>

              <div className="text-center my-4">
                <p className="text-red-500 line-through text-lg">Valor Total: 99,90€</p>
                <p className="uppercase font-bold text-black text-sm">HOJE PAGAMENTO ÚNICO...</p>
                <motion.p
                  whileInView={{ rotate: [0, -1.5, 1.5, -1.5, 1.5, 0] }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="text-5xl md:text-6xl font-extrabold text-green-500">
                  27€
                </motion.p>
              </div>

              <div className="mt-auto">
                <div className="flex justify-center flex-col items-center gap-4">
                  <a href="https://pay.hotmart.com/D101925163B?checkoutMode=10" rel="noopener noreferrer" className="block w-full">
                    <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-4 rounded-lg text-lg md:text-xl shadow-lg animate-pulse-green">
                      SIM! QUERO ESTA SUPER OFERTA!
                    </button>
                  </a>
                  <p className="text-sm font-bold text-gray-700 text-center">ATENÇÃO: <span className="font-normal">A Promoção é <u className="font-bold">LIMITADA</u> e Acabará em Breve.</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
