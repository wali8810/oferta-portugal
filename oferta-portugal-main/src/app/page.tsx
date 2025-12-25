import { Bonuses } from '@/components/landing/Bonuses';
import { Pricing } from '@/components/landing/Pricing';
import { Testimonials } from '@/components/landing/Testimonials';
import { Faq } from '@/components/landing/Faq';
import { Footer } from '@/components/landing/Footer';
import { ForWhom } from '@/components/landing/ForWhom';
import { Guarantee } from '@/components/landing/Guarantee';
import { SalesNotification } from '@/components/landing/SalesNotification';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow">
        <ForWhom />
        <Bonuses />
        <Pricing />
        <Testimonials />
        <Guarantee />
        <Faq />
        <SalesNotification />
      </main>
      <Footer />
    </div>
  );
}
