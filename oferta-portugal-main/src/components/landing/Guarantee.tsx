import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Guarantee() {
    return (
        <section className="py-8 bg-white">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <div className="flex flex-col items-center">
                    <Image
                        src="https://i.imgur.com/3nS8KCV.png"
                        alt="Selo de Garantia de 7 dias"
                        width={250}
                        height={250}
                        className="mx-auto"
                        data-ai-hint="satisfaction guarantee seal"
                        priority
                    />
                    <div className="text-center mt-8">
                        <h3 className="text-3xl md:text-4xl font-extrabold text-destructive uppercase tracking-wide mb-2">PRODUTO COM RISCO ZERO!</h3>
                        <h4 className="text-2xl md:text-3xl font-bold mb-4">O CURSO TEM GARANTIA <br />INCONDICIONAL DE 7 DIAS</h4>
                        <div className="max-w-2xl mx-auto text-muted-foreground text-lg">
                            <p className="mb-4">Está protegido(a) pelas leis de proteção ao consumidor.</p>
                            <p className="mb-4">Se por algum motivo achar que não é para si ou não se adaptar, basta entrar em contacto connosco (E-mail: contato@padraomagico.shop) <b>dentro do prazo de 7 dias</b> e solicitar o reembolso total do seu investimento.</p>
                            <p>Receberá de volta cada cêntimo que pagou.</p>
                        </div>
                    </div>
                </div>

                <hr className="border-border my-12" />

                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    CLIQUE NO BOTÃO ABAIXO PARA GARANTIR <strong className="text-destructive">O CURSO COM DESCONTO!</strong>
                </h2>

                <div className="mb-8">
                    <a href="https://pay.hotmart.com/D101925163B?checkoutMode=10" rel="noopener noreferrer" className="inline-block">
                        <Button size="lg" className="cta-button shadow-lg text-center h-auto whitespace-normal">
                            LIBERTE O SEU ACESSO AO CURSO
                        </Button>
                    </a>
                </div>

                <Image
                    src="https://i.imgur.com/VdsGY9a.png"
                    alt="Compra segura, métodos de pagamento"
                    width={500}
                    height={100}
                    className="mx-auto max-w-full h-auto"
                    data-ai-hint="secure purchase logos payment methods"
                    priority
                />
            </div>
        </section>
    );
}
