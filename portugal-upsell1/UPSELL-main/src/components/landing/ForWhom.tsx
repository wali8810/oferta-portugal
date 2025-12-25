'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import imageData from '@/app/lib/placeholder-images.json';

const whatYouGetItems = [
    {
        icon: "✅",
        title: "TRANSFORMAR",
        description: "cartão e tecido em Caixas de Luxo para eventos (casamentos, batizados) que as clientes pagam centenas de euros para ter."
    },
    {
        icon: "✅",
        title: "DOMINAR",
        description: "o \"Método das 3 Peças\" para produzir caixas perfeitas em tempo recorde, sem desperdício de material (o maior inimigo do lucro)."
    },
    {
        icon: "✅",
        title: "OBTER LUCROS REAIS",
        description: "de até 312%, criando produtos que custam menos de €1 para fazer e são vendidos por €3, €4 ou mais."
    },
    {
        icon: "✅",
        title: "CONSTRUIR UM RENDIMENTO EXTRA SÓLIDO",
        description: "a partir da sua mesa da cozinha, com a flexibilidade de trabalhar quando quiser e receber encomendas que pagam as suas contas."
    }
]

export function ForWhom() {
    const courseMockup = imageData.courseMockup;

    return (
        <>
            <section className="relative w-full pb-10 overflow-hidden text-white pt-12 md:pt-20 bg-gradient-to-br from-pink-500 via-red-500 to-orange-500">
              <div className="relative container mx-auto px-4 text-center z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-white font-montserrat" style={{ letterSpacing: '-0.9px', lineHeight: '1.1' }}>
                  <span className="bg-green-500 text-white px-2 rounded">ESPERE! A SUA COMPRA ESTÁ INCOMPLETA.</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
                Transforme o que acabou de adquirir na sua maior fonte de lucro. Adicione o meu método completo e validado para <span className="bg-green-500 text-white px-1 rounded-sm">criar caixas que vendem em 48h por um pagamento único de €17</span>.
                </p>
                <div className="mt-6 flex justify-center">
                    <div className="w-full max-w-lg">
                        <Image
                            src={courseMockup.src}
                            alt={courseMockup.alt}
                            width={courseMockup.width}
                            height={courseMockup.height}
                            className="w-full h-auto mx-auto"
                            data-ai-hint={courseMockup.hint}
                            priority
                        />
                    </div>
                </div>
                 <div className="mt-6">
                    <a href="#plans" className="inline-block">
                        <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg md:text-xl h-auto py-3 px-6 md:py-4 md:px-10 rounded-lg shadow-lg animate-pulse-green whitespace-normal text-center leading-tight">
                            SIM! QUERO ADICIONAR O MÉTODO COMPLETO AO MEU PEDIDO POR APENAS €17!
                        </Button>
                    </a>
                </div>
              </div>
            </section>

            <section className="py-12 bg-white text-black">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 uppercase tracking-wide">
                           Isto é exatamente o que vai conseguir fazer nos próximos dias (sem precisar de experiência, ateliê ou máquinas caras):
                        </h2>

                        <div className="text-left space-y-6 mb-8 max-w-2xl mx-auto">
                            {whatYouGetItems.map((item, index) => (
                                <div key={index} className="flex items-start text-base md:text-lg">
                                    <span className="text-2xl mr-3 w-8 text-center">{item.icon}</span>
                                    <span><span className="font-bold">{item.title}</span>: {item.description}</span>
                                 </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
