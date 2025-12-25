import type {Metadata} from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Poppins, Montserrat } from 'next/font/google'

export const metadata: Metadata = {
  title: '(1) A sua compra está quase pronta...',
  description: 'Adicione o método completo e validado para criar caixas que vendem em 48h por um pagamento único de €17.',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className={`${poppins.variable} ${montserrat.variable}`}>
      <head>
        <script src="https://cdn.jsdelivr.net/npm/notiflix@2.6.0/dist/notiflix-aio-2.6.0.min.js" async></script>
      </head>
      <body className="font-body antialiased">
        <noscript>
            <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src="https://www.facebook.com/tr?id=768977436001525&ev=PageView&noscript=1"
            />
        </noscript>
        {children}
        <Toaster />

        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          strategy="lazyOnload"
          async
          defer
        />
        <Script id="meta-pixel-script" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '768977436001525');
            fbq('track', 'PageView');
          `}
        </Script>
        <Script src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js" strategy="lazyOnload" />
        <Script id="hotmart-sales-funnel-script" strategy="lazyOnload">
          {`
            checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel')
          `}
        </Script>
      </body>
    </html>
  );
}
