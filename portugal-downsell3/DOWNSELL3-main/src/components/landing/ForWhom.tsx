'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import imageData from '@/app/lib/placeholder-images.json';

const whatYouGetItems = [
    {
        icon: "✅",
        description: "Ver todo o processo passo a passo em vídeo"
    },
    {
        icon: "✅",
        description: "Aprender na prática, sem teoria confusa"
    },
    {
        icon: "✅",
        description: "Ganhar segurança para aplicar imediatamente"
    },
    {
        icon: "✅",
        description: "Evitar erros comuns de iniciantes"
    },
    {
        icon: "✅",
        description: "Produzir com mais rapidez e confiança"
    }
]

export function ForWhom() {
    const courseMockup = imageData.courseMockup;

    return (
        <>
            <section className="relative w-full pb-10 overflow-hidden text-white pt-12 md:pt-20 bg-gradient-to-br from-pink-500 via-red-500 to-orange-500">
              <div className="relative container mx-auto px-4 text-center z-10">
                
                <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-white font-montserrat" style={{ letterSpacing: '-0.9px', lineHeight: '1.1' }}>
                  <span className="bg-yellow-400 text-black px-2 rounded">ESPERE! ANTES DE IR...</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
                Quero mesmo que tenha sucesso, e acredito que o preço não deve ser um obstáculo. Por isso, preparei uma <span className="bg-green-500 text-white px-1 rounded-sm">condição especial e única</span>: acesso às VÍDEO-AULAS EXCLUSIVAS por apenas €10.
                </p>
                <div className="mt-6 flex justify-center">
                    <div className="w-full max-w-2xl">
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
                            SIM! QUERO APROVEITAR ESTA OPORTUNIDADE POR APENAS €10!
                        </Button>
                    </a>
                </div>
              </div>
            </section>

            <section className="py-12 bg-white text-black">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 uppercase tracking-wide">
                           Isto é exatamente o que vai conseguir nos próximos dias (sem precisar de experiência, ateliê ou equipamentos caros):
                        </h2>

                        <div className="text-left space-y-4 mb-8 max-w-lg mx-auto">
                            {whatYouGetItems.map((item, index) => (
                                <div key={index} className="flex items-start text-base md:text-lg">
                                    <span className="text-2xl mr-3 w-8 text-center">{item.icon}</span>
                                    <span>{item.description}</span>
                                 </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
