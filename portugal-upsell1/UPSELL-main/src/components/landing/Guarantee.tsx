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
                    <h3 className="text-3xl md:text-4xl font-extrabold text-destructive uppercase tracking-wide mb-2">A minha garantia pessoal Risco Zero!</h3>
                    <div className="max-w-2xl mx-auto text-muted-foreground text-lg">
                        <p className="mb-4">Adicione o curso ao seu pedido agora. Mergulhe no conteúdo, aplique o método, crie as suas primeiras caixas. Se dentro de 30 dias não sentir que este foi o melhor investimento de €17 que alguma vez fez para a sua independência financeira, eu devolvo-lhe cada cêntimo.</p>
                        <p className="font-bold">Sem perguntas, sem ressentimentos. O risco é todo meu.</p>
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
                    SIM, EU QUERO O ACESSO COMPLETO POR APENAS €17!
                  </Button>
                </a>
            </div>
        </div>
    </section>
  );
}
