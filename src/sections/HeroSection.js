import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [cases, setCases] = useState(0);
  const [clients, setClients] = useState(0);
  const [lawyers, setLawyers] = useState(0);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const animateNumber = (target, setter, duration = 2000) => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / target));
      const interval = setInterval(() => {
        start += 1;
        setter(start);
        if (start >= target) clearInterval(interval);
      }, stepTime);
    };

    animateNumber(120, setCases);
    animateNumber(95, setClients);
    animateNumber(3, setLawyers);

    setAnimateText(true);
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden font-serif">
      <div
        className="absolute inset-0 w-full h-full -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/arch.jpg')" }}
      />

      <div className="mb-12">
        {/* Gornji tekst */}
        <p
          className={`text-2xl md:text-3xl mb-4 flex items-center justify-center gap-4 transition-all duration-1000 ${
            animateText
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-6"
          }`}
        >
          <span className="w-12 h-[2px] bg-[#d6a13b]"></span>
          <span className="bg-gradient-to-t from-[#d6a13b] via-[#f8f7f0] to-white bg-clip-text text-transparent">
            Više od pravne pomoći
          </span>
          <span className="w-12 h-[2px] bg-[#d6a13b]"></span>
        </p>

        <h1
          className={`text-5xl md:text-6xl font-bold mb-4 text-[#e8e6d8] drop-shadow-lg transition-all duration-1000 ${
            animateText
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-6"
          }`}
          style={{
            textShadow: `
              1px 1px 0 #000,
              -1px 1px 0 #000,
              1px -1px 0 #000,
              -1px -1px 0 #000,
              2px 2px 4px rgba(0,0,0,0.5)
            `,
          }}
        >
          Pravda po meri savremenog čoveka
        </h1>

        <p
          className={`text-lg md:text-lg max-w-2xl mx-auto drop-shadow-md transition-all duration-1000 ${
            animateText
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4"
          }`}
        >
          <span className="bg-gradient-to-t from-[#d6a13b] via-[#f8f7f0] to-white bg-clip-text text-transparent">
            Naš pristup je personalizovan, posvećen i zasnovan na stvarnom
            razumevanju vaših potreba.
          </span>
        </p>

        {/* Dugme */}
        <Link
          to="/contact"
          className={`mt-8 inline-block font-semibold py-3 px-6 rounded-lg
            bg-[#d6a13b]/70 backdrop-blur-sm border border-[#d6a13b] text-white
            transition-all duration-1000 hover:bg-[#d6a13b]/100 hover:scale-105
            ${animateText ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
        >
          Kontaktirajte nas
        </Link>
      </div>

      {/* Statistika */}
      <div className="flex flex-col items-center text-center mt-8 gap-4">
        <div className="flex gap-12 text-center">
          <div>
            <span className="text-4xl md:text-5xl font-bold bg-gradient-to-t from-[#d6a13b] via-[#f8f7f0] to-white bg-clip-text text-transparent">
              {cases}+
            </span>
            <p className="mt-2 text-lg md:text-xl bg-gradient-to-t from-[#d6a13b] via-[#f8f7f0] to-white bg-clip-text text-transparent">
              Uspešno završenih slučajeva
            </p>
            <div className="mt-1 w-48 h-[1px] bg-[#d6a13b] mx-auto"></div>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-bold bg-gradient-to-t from-[#d6a13b] via-[#f8f7f0] to-white bg-clip-text text-transparent">
              {clients}%
            </span>
            <p className="mt-2 text-lg md:text-xl bg-gradient-to-t from-[#d6a13b] via-[#f8f7f0] to-white bg-clip-text text-transparent">
              Zadovoljnih klijenata
            </p>
            <div className="mt-1 w-32 h-[1px] bg-[#d6a13b] mx-auto"></div>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-bold bg-gradient-to-t from-[#d6a13b] via-[#f8f7f0] to-white bg-clip-text text-transparent">
              {lawyers}+
            </span>
            <p className="mt-2 text-lg md:text-xl bg-gradient-to-t from-[#d6a13b] via-[#f8f7f0] to-white bg-clip-text text-transparent">
              Pravnika sa zajedničkom misijom
            </p>
            <div className="mt-1 w-48 h-[1px] bg-[#d6a13b] mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
