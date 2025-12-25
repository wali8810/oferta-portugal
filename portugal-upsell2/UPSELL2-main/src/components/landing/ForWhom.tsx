'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import imageData from '@/app/lib/placeholder-images.json';

const whatYouGetItems = [
    {
        icon: "✅",
        title: "Poupe horas",
        description: "de criação com artes já prontas e organizadas por temas populares."
    },
    {
        icon: "✅",
        title: "Tenha mais variedade",
        description: "para oferecer às suas clientes e aumentar o valor percebido dos seus produtos."
    },
    {
        icon: "✅",
        title: "Trabalhe com temas",
        description: "que vendem o ano inteiro, de épocas festivas a nichos específicos."
    },
    {
        icon: "✅",
        title: "Produza mais e lucre mais",
        description: "com um fluxo de trabalho otimizado e personalização rápida para encomendas sob medida."
    }
]

export function ForWhom() {
    const courseMockup = imageData.courseMockup;

    return (
        <>
            <section className="relative w-full pb-10 overflow-hidden text-white pt-12 md:pt-16 bg-gradient-to-br from-pink-500 via-red-500 to-orange-500">
                <div className="relative container mx-auto px-4 text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-white font-montserrat" style={{ letterSpacing: '-0.9px', lineHeight: '1.1' }}>
                        <span className="bg-green-500 text-white px-2 rounded">ESPERE! A SUA COMPRA ESTÁ INCOMPLETA.</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
                        Leve o seu projeto para <strong>outro nível</strong> com o <strong>PACOTE DE ARTES EXTRAS</strong>. Um conjunto exclusivo de <strong>artes prontas para usar</strong>, organizadas por temas, criadas para <strong>facilitar a sua produção</strong>, <strong>poupar tempo</strong> e <strong>aumentar as suas vendas</strong>.
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
                                SIM! QUERO ADICIONAR O PACOTE DE ARTES EXTRAS AO MEU PEDIDO POR APENAS €14,90
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white text-black">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 uppercase tracking-wide">
                            Isto é exatamente o que vai conseguir fazer nos próximos minutos com este pacote:
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
