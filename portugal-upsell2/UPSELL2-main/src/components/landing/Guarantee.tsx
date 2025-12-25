import Image from "next/image";
import { Button } from "@/components/ui/button";
import imageData from '@/app/lib/placeholder-images.json';

export function Guarantee() {
  const guaranteeSeal = imageData.guaranteeSeal;
  return (
    <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="flex flex-col items-center">
                <Image 
                    src={guaranteeSeal.src}
                    alt={guaranteeSeal.alt}
                    width={guaranteeSeal.width}
                    height={guaranteeSeal.height}
                    className="mx-auto"
                    data-ai-hint={guaranteeSeal.hint}
                />
                <div className="text-center mt-8">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-destructive uppercase tracking-wide mb-2">Garantia Incondicional de 30 Dias</h3>
                    <div className="max-w-2xl mx-auto text-muted-foreground text-lg">
                        <p className="mb-4">Experimente o PACOTE DE ARTES EXTRAS sem risco. Se dentro de 30 dias sentir que este pack não facilitou o seu trabalho ou não trouxe mais resultados, devolvemos-lhe o valor total.</p>
                        <p className="font-bold">Sem perguntas. O risco é todo meu.</p>
                    </div>
                </div>
            </div>
            
            <hr className="border-border my-12" />

            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                ÚLTIMA OPORTUNIDADE DE ADICIONAR COM DESCONTO
            </h2>

            <div className="mb-4">
                <a href="#plans" className="inline-block">
                  <Button size="lg" className="cta-button shadow-lg text-center h-auto whitespace-normal animate-pulse-green leading-tight text-lg md:text-xl py-3 px-6 md:py-4">
                    SIM, QUERO O PACOTE DE ARTES EXTRAS POR APENAS €14,90
                  </Button>
                </a>
            </div>
        </div>
    </section>
  );
}
