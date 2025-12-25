import Image from "next/image";
import { Button } from "@/components/ui/button";

export function SocialProof() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 uppercase tracking-wide">
          Procura por "Decoração de Festa com Balão" Cresceu 83% em 2025
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Em todo negócio, quem chega primeiro bebe água limpa! Você vai nadar em um oceano azul repleto de oportunidades 👇
        </p>
        
        <div className="mb-8">
          <Image 
            src="https://imgur.com/zW3w8ga.png"
            alt="Gráfico mostrando o potencial de ganho com decoração de balões"
            width={766}
            height={359}
            className="rounded-lg shadow-xl mx-auto"
            data-ai-hint="salary chart decoration"
          />
        </div>

        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-lg mb-2">Imagine que você faça apenas 10 pequenos eventos no mês decorando festas por <strong className="text-yellow-500">R$500,00</strong> cada decoração!</p>
          <p className="text-lg mb-4">Isso traz um rendimento mensal de <strong className="text-green-500">R$5.000,00</strong> visto que os <strong>custos da produção são mínimos</strong>!</p>
          <p className="text-muted-foreground">Dica: Você também pode decorar chá de revelação ou chá de bebê, que está em alta no Brasil.</p>
        </div>

        <div className="mb-12">
            <a href="#plans" className="inline-block">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl h-auto py-4 transform hover:scale-105 transition-transform duration-300 shadow-lg animate-pulse-pink">
                GARANTIR AGORA COM DESCONTO
              </Button>
            </a>
        </div>

        <hr className="border-border my-12" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4">Quanto Tempo Leva Para Receber Meu Acesso?</h3>
                <p className="text-muted-foreground mb-4">
                  Após confirmar seu pedido, <strong>você receberá automaticamente</strong> no seu e-mail os dados de acesso para login e poderá começar seus estudos imediatamente.
                </p>
                <p className="text-muted-foreground">
                  Todo o material está hospedado em uma <strong>área de membros exclusiva</strong> para alunos, para que você possa acessar com segurança, quando e de onde estiver.
                </p>
            </div>
            <div>
                 <Image 
                    src="https://imgur.com/kdkxPjJ.png"
                    alt="Selo de Garantia de 30 dias"
                    width={350}
                    height={350}
                    className="rounded-full shadow-xl mx-auto"
                    data-ai-hint="satisfaction guarantee seal"
                />
            </div>
        </div>
        
        <div className="mt-12 text-center">
             <h3 className="text-3xl md:text-4xl font-extrabold text-destructive uppercase tracking-wide mb-2">PRODUTO COM RISCO ZERO!</h3>
            <h4 className="text-2xl md:text-3xl font-bold mb-4">O CURSO TEM GARANTIA <br/>INCONDICIONAL DE 30 DIAS</h4>
            <div className="max-w-2xl mx-auto text-muted-foreground">
                <p className="mb-2">Você está sob proteção do <strong>Código de Defesa do Consumidor</strong> – LEI Nº 8.078, de 11 de setembro de 1990.</p>
                <p className="mb-2">Se por algum motivo você achar que não é para você ou não se adaptar, basta entrar em contato (Email: contato@balaodecora.shop) <b>dentro do prazo de 30 dias</b> e solicitar o reembolso total do valor investido.</p>
                <p>Você receberá de volta cada centavo que pagou.</p>
            </div>
        </div>

      </div>
    </section>
  );
}
