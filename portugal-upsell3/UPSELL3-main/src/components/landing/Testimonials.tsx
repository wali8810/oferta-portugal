import Image from "next/image";
import imageData from '@/app/lib/placeholder-images.json';

const testimonials = [
  {
    image: imageData.testimonial1,
    text: "Ver tudo em vídeo facilitou imenso. Consegui aplicar logo no mesmo dia.",
    name: "Laura S.",
  },
  {
    image: imageData.testimonial2,
    text: "As aulas são muito claras. Agora faço tudo com mais segurança e rapidez.",
    name: "Beatriz C.",
  },
    {
    image: imageData.testimonial3,
    text: "Simples, direto e prático. Parece que estamos numa aula presencial.",
    name: "Inês M.",
  },
];

const TestimonialCard = ({ image, text, name }: { image: typeof imageData.testimonial1, text: string, name: string }) => (
    <div className="relative flex flex-col items-center">
        <Image 
            src={image.src}
            alt={`Depoimento de ${name}`}
            width={100}
            height={100}
            className="rounded-full border-4 border-white object-cover w-[100px] h-[100px] z-10"
            data-ai-hint={image.hint}
        />
        <div className="bg-[#5c2c2c] text-white rounded-xl p-6 text-center shadow-lg w-full -mt-12">
            <p className="text-lg italic mb-4 pt-12">"{text}"</p>
            <p className="font-bold text-yellow-400">{name}</p>
        </div>
    </div>
)


export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-foreground">O que as nossas alunas dizem:</h2>
        </div>
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard 
                        key={index}
                        image={testimonial.image}
                        text={testimonial.text}
                        name={testimonial.name}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
