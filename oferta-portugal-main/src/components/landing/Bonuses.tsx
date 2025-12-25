import Image from "next/image";

const bonusData = [
  {
    bonusNumber: "#01",
    title: "Kit de Estampas Prontas: + de 500 estampas prontas para usar agora mesmo!",
    image: "https://imgur.com/BhLrhxW.png",
    alt: "Bónus de Kit de Estampas",
    price: "47€",
  },
  {
    bonusNumber: "#02",
    title: "Guia de precificação",
    image: "https://i.imgur.com/hdbzMRu.png",
    alt: "Bónus manual de vendas",
    price: "27€",
  },
  {
    bonusNumber: "#03",
    title: "Checklist de Impressão Perfeita",
    image: "https://i.imgur.com/Q5sChOg.png",
    alt: "Bónus guia de inspiração",
    price: "37€",
  },
    {
    bonusNumber: "#04",
    title: "Guia Rápido de Aplicação com Ferro de Passar",
    image: "https://i.imgur.com/P07oK5g.png",
    alt: "Bónus aplicação com prancha",
    price: "17€",
  },
];

export function Bonuses() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" id="bonuses-section">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter leading-tight mb-4 text-black font-montserrat">
            BÓNUS POR <br />
            <u className="text-black underline" style={{textDecorationColor: 'black'}}>PRIMEIRA VISITA</u>...
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-2 font-montserrat text-black">
            <span className="bg-yellow-400 text-black px-2 py-1">
              4 bónus exclusivos
            </span>{" "}
            para quem comprar o CURSO NESTA PÁGINA
          </h3>
          <h4 className="text-xl md:text-2xl font-bold uppercase text-destructive font-montserrat">
            <span style={{ color: "#FF0845" }}>
              (<u>ACABA HOJE!</u>)
            </span>
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {bonusData.map((bonus, index) => (
            <div
              key={index}
              className="p-4 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center text-center"
            >
              {bonus.image && (
                <div className="w-full flex items-center justify-center mb-4">
                    <Image
                      src={bonus.image}
                      alt={bonus.alt}
                      width={300}
                      height={300}
                      className="w-auto h-auto max-w-full rounded-lg"
                    />
                </div>
              )}
                <div className="w-full text-center space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold font-montserrat text-black">
                    BÓNUS {bonus.bonusNumber}:
                  </h3>
                  <h4 className="text-lg md:text-xl font-semibold font-montserrat text-orange-500 min-h-[3em]">
                    {bonus.title.toUpperCase()}
                  </h4>
                   <p className="font-montserrat text-base md:text-lg">
                    <span className="text-red-500 line-through font-bold">De: {bonus.price}</span>
                  </p>
                  <p className="font-montserrat text-base md:text-lg font-bold">
                    <span className="text-green-500">Por: GRÁTIS</span>
                  </p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
