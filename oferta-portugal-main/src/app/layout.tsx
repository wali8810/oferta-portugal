import type {Metadata} from 'next';
import Script from 'next/script';
import { Poppins, Montserrat } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});


export const metadata: Metadata = {
  title: 'Curso Padrão Mágico',
  description: 'Ganhe de 1500€ a 2000€ por mês a criar produtos personalizados que se vendem sozinhos.',
  icons: {
    icon: 'https://i.imgur.com/RDk4VK4.png',
  },
};

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
          strategy="lazyOnload"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
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
        <Script id="notiflix-sales" strategy="lazyOnload">
          {`
            var position = "right-top";
            var color = "verde";
            var animation = "from-right";
            var product_name = "";
            var phrase = "acaba de comprar";
            var timeout = 4000;
            var type_name = "masc, fem";
            var msg_final = "";
            var min_time = 4;
            var max_time = 20;

            var names_masc = ['José', 'João', 'Luiz', 'Carlos', 'Pedro', 'Lucas', 'Miguel', 'Rafael', 'Daniel', 'Marcelo', 'Bruno', 'Eduardo', 'Felipe', 'Rodrigo', 'Manuel', 'Mateus', 'André', 'Fernando', 'Fabio', 'Leonardo', 'Gustavo', 'Guilherme', 'Leandro', 'Thiago', 'Anderson', 'Ricardo', 'Jorge', 'Alexandre', 'Roberto', 'Edson', 'Diego', 'Victor', 'Sergio', 'Claudio', 'Matheus', 'Adriano', 'Luciano', 'Julio', 'Renato', 'Alex', 'Vinicius', 'Samuel', 'Ronaldo', 'Mario', 'Flavio', 'Douglas', 'Igor', 'David', 'Javier', 'Francisco', 'Antonio', 'Jesus', 'Martim', 'Santiago', 'Sebastião', 'Nicolas', 'Gabriel', 'Pablo', 'Emiliano', 'Cristian', 'Estevão'];
            var names_fem = ['Maria', 'Ana', 'Francisca', 'Antonia', 'Adriana', 'Juliana', 'Marcia', 'Fernanda', 'Patricia', 'Aline', 'Sandra', 'Camila', 'Amanda', 'Bruna', 'Jessica', 'Leticia', 'Julia', 'Luciana', 'Vanessa', 'Mariana', 'Gabriela', 'Vera', 'Victoria', 'Larissa', 'Claudia', 'Beatriz', 'Rita', 'Luana', 'Sonia', 'Renata', 'Eliana', 'Sofia', 'Isabella', 'Valentina', 'Emma', 'Valeria', 'Daniela', 'Carolina', 'Alejandra', 'Andrea', 'Paula', 'Laura', 'Natalia'];
            var option = {
                position: position,
                cssAnimationStyle: animation,
                plainText: false,
                timeout: timeout
            };

            function show_notification() {
                if (typeof Notiflix === 'undefined') {
                    setTimeout(show_notification, 100);
                    return;
                }
                
                if (type_name == "masc") {
                    msg_final = "<strong>" + names_masc[Math.floor(Math.random() * names_masc.length)] + "</strong>";
                } else if (type_name == "fem") {
                    msg_final = "<strong>" + names_fem[Math.floor(Math.random() * names_fem.length)] + "</strong>";
                } else {
                    var array_aux = ["masc", "fem"];
                    if (array_aux[Math.floor(Math.random() * array_aux.length)] == "masc") {
                        msg_final = "<strong>" + names_masc[Math.floor(Math.random() * names_masc.length)] + "</strong>";
                    } else {
                        msg_final = "<strong>" + names_fem[Math.floor(Math.random() * names_fem.length)] + "</strong>";
                    }
                }
                msg_final += " " + phrase + " " + product_name;
                if (color == "verde") {
                    Notiflix.Notify.Success(msg_final, option);
                }
                if (color == "azul") {
                    Notiflix.Notify.Info(msg_final, option);
                }
                if (color == "vermelho") {
                    Notiflix.Notify.Failure(msg_final, option);
                }
                if (color == "amarelo") {
                    Notiflix.Notify.Warning(msg_final, option);
                }
                var rand = Math.floor(Math.random() * (max_time - min_time + 1) + min_time);
                setTimeout(show_notification, rand * 1000);
            }
            setTimeout(show_notification, 4 * 1000);
          `}
        </Script>
      </body>
    </html>
  );
}
