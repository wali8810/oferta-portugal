'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import imageData from '@/app/lib/placeholder-images.json';

const whatYouGetItems = [
    {
        icon: "✅",
        title: "APRENDER NA PRÁTICA",
        description: "veja todo o processo em vídeo, do início ao fim"
    },
    {
        icon: "✅",
        title: "EVITAR ERROS COMUNS",
        description: "saiba exatamente o que fazer e o que não fazer"
    },
    {
        icon: "✅",
        title: "GANHAR CONFIANÇA",
        description: "produza com mais segurança e rapidez"
    },
    {
        icon: "✅",
        title: "OTIMIZAR TEMPO",
        description: "menos tentativa e erro, mais resultados"
    },
    {
        icon: "✅",
        title: "APLICAR IMEDIATAMENTE",
        description: "conteúdo direto ao ponto, sem enrolação"
    }
]

export function ForWhom() {
    const heroProduct = imageData.heroProduct;

    return (
        <>
            <section className="relative w-full pb-10 overflow-hidden text-white pt-8 md:pt-12 bg-gradient-to-br from-pink-500 via-red-500 to-orange-500">
              <div className="relative container mx-auto px-4 text-center z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-white font-montserrat" style={{ letterSpacing: '-0.9px', lineHeight: '1.1' }}>
                  <span className="bg-green-500 text-white px-2 rounded">ESPERE! A SUA COMPRA ESTÁ INCOMPLETA.</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
                  Transforme o que acabou de adquirir numa fonte ainda maior de resultados. Adicione agora o acesso às <strong>VÍDEO-AULAS EXCLUSIVAS</strong>, onde mostro o <strong>processo completo, passo a passo</strong>, de forma <strong>prática e direta</strong>.
                </p>
                <div className="mt-6 flex justify-center">
                    <div className="w-full max-w-3xl">
                        <Image
                            src={heroProduct.src}
                            alt={heroProduct.alt}
                            width={heroProduct.width}
                            height={heroProduct.height}
                            className="w-full h-auto mx-auto"
                            data-ai-hint={heroProduct.hint}
                            priority
                        />
                    </div>
                </div>
                 <div className="mt-6">
                    <a href="#plans" className="inline-block">
                        <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg md:text-xl h-auto py-3 px-6 md:py-4 md:px-10 rounded-lg shadow-lg animate-pulse-green whitespace-normal text-center leading-tight">
                           SIM! QUERO ADICIONAR AS VÍDEO-AULAS EXCLUSIVAS AO MEU PEDIDO POR APENAS €14,90!
                        </Button>
                    </a>
                </div>
              </div>
            </section>

            <section className="py-12 bg-white text-black">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 uppercase tracking-wide">
                           Isto é exatamente o que vai conseguir fazer nos próximos dias (sem precisar de experiência, ateliê ou equipamentos caros):
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
