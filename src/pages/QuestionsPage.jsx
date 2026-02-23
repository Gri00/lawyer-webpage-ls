import { useState } from "react";
import { useInView } from "react-intersection-observer";

const sections = [
  {
    title: "Porodično pravo",
    questions: [
      {
        question: "Kako da znam da li mi je potreban advokat?",
        answer:
          "Ukoliko niste sigurni u svoja prava ili obaveze, savetovanje sa advokatom može vam pomoći da izbegnete greške i zaštitite svoje interese.",
      },
      {
        question: "Koliko traje postupak razvoda?",
        answer:
          "Trajanje postupka zavisi od složenosti slučaja i saglasnosti supružnika.",
      },
    ],
  },
  {
    title: "Radno pravo",
    questions: [
      {
        question: "Šta da radim ako dobijem otkaz?",
        answer:
          "Važno je da proverite zakonitost otkaza i rokove za podnošenje tužbe.",
      },
    ],
  },
  {
    title: "Usluge",
    questions: [
      {
        question: "Da li nudite pravnu pomoć na engleskom jeziku?",
        answer: "Da, pružamo pravnu pomoć i komunikaciju na engleskom jeziku.",
      },
    ],
  },
  {
    title: "Informacije",
    questions: [
      {
        question: "Koliko brzo mogu da očekujem odgovor?",
        answer: "Na upite odgovaramo u roku od 24h radnim danima.",
      },
    ],
  },
];

function Accordion({ questions }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-white rounded-lg shadow-sm px-6 font-serif">
      {questions.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex justify-between items-center py-5 text-left"
            >
              <span className="text-lg text-gray-800">{item.question}</span>

              <span
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                isOpen ? "max-h-40 opacity-100 pb-6" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function QuestionsPage() {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="min-h-screen bg-gray-100 py-24 px-6 overflow-hidden font-serif">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-24 transition-all duration-1000 ${
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-5xl font-semibold text-gray-900 mb-6">
            Imate pitanje? Mi imamo odgovore.
          </h1>

          <p className="text-gray-600 max-w-5xl mx-auto text-lg leading-relaxed">
            Od svakodnevnih pravnih nedoumica do konkretnih postupaka, razumemo
            da su pitanja sastavni deo poverenja. Zato smo izdvojili najčešća —
            i ponudili jasne, sažete odgovore.
          </p>

          <div className="w-40 h-[1px] bg-[#d6a13b] mx-auto mt-5"></div>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-20 items-start">
          {/* LEVA STRANA */}
          <div
            className={`transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="space-y-20">
              {sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-3xl mb-8 text-gray-900">
                    {section.title}
                  </h2>
                  <Accordion questions={section.questions} />
                </div>
              ))}
            </div>
          </div>

          {/* DESNA STRANA */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative w-full h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
                alt=""
                className="absolute top-0 right-0 w-64 rounded-lg shadow-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1593115057322-e94b77572f20"
                alt=""
                className="absolute top-44 left-0 w-64 rounded-lg shadow-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1767972463877-b64ba4283cd0"
                alt=""
                className="absolute bottom-0 right-10 w-64 rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
