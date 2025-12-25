import { Button } from "@/components/ui/button";
import Image from "next/image";
import imageData from '@/app/lib/placeholder-images.json';

const includedFeatures = [
  "O Curso Completo 'Caixas Lucrativas'",
  "Acesso vitalício e imediato",
  "Garantia Incondicional de 30 Dias"
];

const CheckIcon = () => (
  <svg
    className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-1"
    viewBox="0 0 512 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
  </svg>
);


export function Pricing() {
  const courseMockup = imageData.courseMockup;

  return (
    <section id="plans" className="py-16 md:py-24 bg-[#00110F]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white text-black rounded-2xl shadow-2xl border-4 border-yellow-400 p-6 md:p-8 w-full animate-pulse-yellow">
            <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-black">O Que Leva Nesta Oferta Exclusiva:</h2>
            </div>

            <div className="flex justify-center">
                <Image
                    src={courseMockup.src}
                    alt={courseMockup.alt}
                    width={courseMockup.width}
                    height={courseMockup.height}
                    data-ai-hint={courseMockup.hint}
                />
            </div>
            
            <ul className="text-left space-y-3 my-4 text-gray-700 flex-grow text-sm md:text-base">
              {includedFeatures.map((item, index) => (
                <li key={index} className="flex items-start pb-3 border-b border-gray-200 last:border-b-0">
                  <CheckIcon />
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>

            <div className="text-center my-6">
              <p className="text-red-500 line-through text-xl">Valor Total: €47,00</p>
              <p className="uppercase font-bold text-black text-md mt-2">O SEU PREÇO HOJE: APENAS</p>
              <p className="text-6xl md:text-7xl font-extrabold text-green-500 animate-gentle-pulse">
                  €17
              </p>
            </div>

            <div className="mt-auto">
                <div id="hotmart-sales-funnel"></div>
                <p className="text-sm font-bold text-gray-700 text-center mt-4">ATENÇÃO: <span className="font-normal">Esta oferta <u className="font-bold">expira</u> assim que sair desta página.</span></p>
            </div>
        </div>
      </div>
    </section>
  );
}
