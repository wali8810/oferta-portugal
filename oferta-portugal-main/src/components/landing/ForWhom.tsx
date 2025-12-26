'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const forWhomItems = [
    "Para quem deseja trabalhar a partir de casa, dedicando apenas algumas horas por semana e, ainda assim, ter liberdade de tempo.",
    "Para quem sonha em ter um negócio lucrativo, que não dependa da cidade ou região onde mora.",
    "Para quem quer aproveitar a tendência que mais cresce em 2025: os produtos personalizados com ferro de engomar.",
    "Para quem quer transformar papel em dinheiro e obter lucros de até 5000€ por mês (aproximadamente, dependendo do seu investimento e tempo)."
]

const whatYouGetItems = [
    {
        icon: "🎯",
        title: "DO INICIANTE AO AVANÇADO",
        description: "Irá receber o guia para criar produtos personalizados incríveis e tornar-se o profissional mais bem pago da sua região."
    },

    {
        icon: "📜",
        title: "CERTIFICADO INCLUSO",
        description: "Receba um certificado oficial ao concluir o curso para validar a sua nova profissão."
    },
    {
        icon: "💎",
        title: "SUPORTE INDIVIDUAL",
        description: "O meu contacto pessoal para tirar dúvidas e dar dicas personalizadas."
    },

    {
        icon: "🧠",
        title: "GUIA DE MATERIAIS",
        description: "Como começar o seu negócio usando materiais económicos que geram alta lucratividade."
    }
]

const carouselImages = [
    "https://i.imgur.com/n0yH4Ch.png",
    "https://i.imgur.com/5wfHT2j.png",
    "https://i.imgur.com/2EMknER.png",
    "https://i.imgur.com/SpttZ8B.png",
]

const CheckIcon = () => (
    <svg aria-hidden="true" className="h-6 w-6 text-green-500 mr-3 shrink-0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path>
    </svg>
)

export function ForWhom() {

    return (
        <>
            <section className="relative w-full pb-10 overflow-hidden text-white pt-12 md:pt-20">
                <div className="absolute inset-0 w-full h-full" style={{
                    backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2560 720' preserveAspectRatio='none'><defs><linearGradient id='heroGrad' x1='0' y1='0' x2='1' y2='0'><stop offset='0%' stop-color='%23FF7A00'/><stop offset='45%' stop-color='%23FF8A20'/><stop offset='100%' stop-color='%23F70693'/></linearGradient></defs><path d='M0,0 H2560 V512 L0,600 Z' fill='url(%23heroGrad)'/><path d='M0,600 L2560,512 V720 H0 Z' fill='%23FFFFFF'/></svg>\")",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                </div>
                <div className="relative container mx-auto px-4 text-center z-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter text-white" style={{ fontFamily: '"Montserrat", Sans-serif', letterSpacing: '-0.9px', lineHeight: '1.1' }}>
                        Como criar <span className="bg-green-500 px-2">produtos personalizados que vendem como água em 48 horas</span> usando apenas uma impressora comum e um ferro de engomar
                    </h2>
                    <div className="mt-8 flex justify-center">
                        <Image
                            src="https://i.imgur.com/tio74e1.png"
                            alt="Mockup do curso e bónus"
                            width={608}
                            height={405}
                            className="max-w-full h-auto"
                            data-ai-hint="course bundle mockup"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="bg-white pt-10 pb-0">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-md mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-red-500"><s>DE 99,90€</s></h2>
                        <h2 className="text-xl md:text-2xl font-bold uppercase mt-2 text-black">POR APENAS</h2>
                        <h2 className="text-6xl md:text-7xl font-extrabold text-green-600 mt-1">27€</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-black mt-4">RISCO ZERO!</h2>
                        <a href="#plans" className="mt-6 inline-block">
                            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl h-auto py-4 px-8 rounded-lg shadow-lg animate-pulse-green">
                                QUERO APROVEITAR
                            </Button>
                        </a>
                        <hr className="mt-8 border-t-2 border-black font-bold w-full" />
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white text-black">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-4xl font-extrabold mb-8 uppercase tracking-wide">
                            PARA QUEM É O CURSO PADRÃO MÁGICO?
                        </h2>
                        <ul className="space-y-4 text-left mb-12 max-w-2xl mx-auto">
                            {forWhomItems.map((item, index) => (
                                <li key={index} className="flex items-center text-lg md:text-xl">
                                    <CheckIcon />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="space-y-4 my-8"></div>

                        <h2 className="text-xl md:text-2xl font-bold uppercase text-black bg-yellow-400 inline-block px-4 py-2 mb-8">
                            VEJA O QUE VAI RECEBER:
                        </h2>

                        <div className="text-left space-y-6 mb-8 max-w-2xl mx-auto">
                            {whatYouGetItems.map((item, index) => (
                                <p key={index} className="flex items-start text-base md:text-lg">
                                    <span className="text-2xl mr-3 w-8 text-center">{item.icon}</span>
                                    <span><span className="underline font-bold">{item.title}</span>: {item.description}</span>
                                </p>
                            ))}
                        </div>

                        <div className="my-8">
                            <p className="font-bold underline text-lg mb-4">Produtos que pode começar a fazer hoje:</p>
                            <Carousel
                                opts={{
                                    align: "start",
                                    loop: true,
                                }}
                                plugins={[
                                    Autoplay({
                                        delay: 4000,
                                        stopOnInteraction: false,
                                    }),
                                ]}
                                className="w-full max-w-xl mx-auto"
                            >
                                <CarouselContent>
                                    {carouselImages.map((src, index) => (
                                        <CarouselItem key={index} className="md:basis-1/2">
                                            <div className="p-1">
                                                <div className="aspect-square">
                                                    <Image
                                                        src={src}
                                                        alt={`Imagem de exemplo ${index + 1}`}
                                                        width={400}
                                                        height={400}
                                                        className="w-full h-full object-cover rounded-lg"
                                                    />
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>

                        <div className="mb-8">
                            <a href="#plans">
                                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg md:text-xl h-auto py-4 px-8 transform hover:scale-105 transition-transform duration-300 shadow-lg">
                                    QUERO APROVEITAR!
                                </Button>
                            </a>
                        </div>

                        <p className="text-gray-600 mb-8 text-sm md:text-base">Seguindo este curso, <b>NÃO PRECISA de:</b> experiência prévia, materiais caros nem passar horas a trabalhar.</p>

                        <hr className="border-t-2 border-black font-bold w-full" />
                    </div>
                </div>
            </section>
        </>
    );
}
