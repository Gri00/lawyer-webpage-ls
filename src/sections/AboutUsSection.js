import { useInView } from "react-intersection-observer";
import ImageCard from "../components/imageCard/ImageCard";

export default function AboutUsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cards = [
    {
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800",
      text: "Ljudski pristup",
    },
    {
      image:
        "https://images.unsplash.com/photo-1555374018-13a8994ab246?q=80&w=800",
      text: "Transparentnost",
    },
    {
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800",
      text: "Savremeno znanje",
    },
    {
      image:
        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800",
      text: "Strast prema pravdi",
    },
  ];

  return (
    <section
      ref={ref}
      className="bg-white text-black py-20 px-6 md:px-10 text-center overflow-hidden"
    >
      <h1
        className={`text-3xl md:text-5xl font-serif font-bold mb-6 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Zašto baš mi?
      </h1>

      <p
        className={`text-base md:text-lg max-w-3xl font-serif mx-auto mb-5 transition-all duration-1000 delay-200 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Mi smo tim posvećenih advokata sa dugogodišnjim iskustvom u različitim
        oblastima prava. Naš cilj je da pružimo profesionalne i pouzdane usluge
        svakom klijentu.
      </p>

      <div
        className={`mt-1 mb-10 w-40 md:w-64 h-[1px] bg-[#d6a13b] mx-auto transition-all duration-1000 delay-200 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      ></div>

      {/* MOBILE SLIDER */}
      <div
        className={`md:hidden flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 transition-all duration-1000 delay-300 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {cards.map((card, index) => (
          <div key={index} className="min-w-[85%] snap-center flex-shrink-0">
            <ImageCard image={card.image} text={card.text} />
          </div>
        ))}
      </div>

      {/* DESKTOP GRID */}
      <div
        className={`hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-300 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {cards.map((card, index) => (
          <ImageCard key={index} image={card.image} text={card.text} />
        ))}
      </div>
    </section>
  );
}
