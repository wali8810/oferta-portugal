import { Pricing } from '@/components/landing/Pricing';
import { Testimonials } from '@/components/landing/Testimonials';
import { Faq } from '@/components/landing/Faq';
import { Footer } from '@/components/landing/Footer';
import { ForWhom } from '@/components/landing/ForWhom';
import { Guarantee } from '@/components/landing/Guarantee';
import { CountdownTimer } from '@/components/landing/CountdownTimer';
import { WhatYouWillMake } from '@/components/landing/WhatYouWillMake';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
       <div className="bg-red-600 text-white text-center p-2 text-sm font-bold">
        ATENÇÃO: A SUA COMPRA AINDA NÃO FOI CONCLUÍDA. LEIA ABAIXO.
      </div>
       <CountdownTimer />
      <main className="flex-grow">
        <ForWhom />
        <WhatYouWillMake />
        <Pricing />
        <Testimonials />
        <Guarantee />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
