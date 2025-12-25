"use client"

import * as React from "react"
import Image from "next/image";
import imageData from '@/app/lib/placeholder-images.json';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const creations = [
  {
    image: imageData.creation1,
    caption: "Criar caixas que valem €15 ou mais.",
  },
  {
    image: imageData.creation2,
    caption: "Dominar um acabamento perfeito e profissional.",
  },
  {
    image: imageData.creation3,
    caption: "Produzir em série sem perder a qualidade.",
  },
  {
    image: imageData.creation4,
    caption: "Vender para casamentos, eventos e empresas.",
  },
];

export function WhatYouWillMake() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter leading-tight mb-2 text-black font-montserrat">
            <span role="img" aria-label="pointing finger">👉</span> O Poder Criativo nas Suas Mãos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforme materiais simples em peças únicas e lucrativas que as clientes desejam.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {creations.map((creation, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                   <div className="p-1">
                      <div className="overflow-hidden rounded-lg shadow-lg">
                        <Image
                          src={creation.image.src}
                          alt={creation.image.alt}
                          width={creation.image.width}
                          height={creation.image.height}
                          className="w-full h-auto object-cover transform hover:scale-110 transition-transform duration-500"
                          data-ai-hint={creation.image.hint}
                        />
                      </div>
                    </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
