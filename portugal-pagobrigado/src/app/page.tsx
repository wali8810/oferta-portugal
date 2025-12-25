import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-500 via-red-500 to-orange-500 text-white">
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-12 md:py-20 text-center">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl shadow-2xl max-w-2xl mx-auto p-8 md:p-12 border border-white/20">
            <CheckCircle className="h-16 w-16 md:h-20 md:w-20 text-green-400 mx-auto mb-6 animate-pulse-green rounded-full" />
            
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter text-white font-montserrat" style={{ lineHeight: '1.2' }}>
              Obrigado pela sua compra!
            </h1>
            
            <p className="mt-4 text-lg md:text-xl max-w-xl mx-auto text-white/90">
              A sua compra foi processada com sucesso. Em alguns instantes, receberá um e-mail com todos os detalhes e o acesso ao seu material.
            </p>
            
            <p className="text-sm text-white/60 mt-8">
              Caso não encontre o e-mail na sua caixa de entrada, por favor, verifique a pasta de spam ou promoções.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
