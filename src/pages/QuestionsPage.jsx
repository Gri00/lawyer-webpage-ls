import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Accordion } from "../utils/accordion";
import { sections } from "../constants/questionSections";

export default function QuestionsPage() {
  const [activeSection, setActiveSection] = useState(0);

  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-4 md:py-24 md:px-6 overflow-hidden font-serif">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-12 md:mb-24 transition-all duration-1000 ${
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4 md:mb-6">
            Imate pitanje? Mi imamo odgovore.
          </h1>

          <p className="text-gray-600 max-w-3xl md:max-w-5xl mx-auto text-base md:text-lg leading-relaxed">
            Od svakodnevnih pravnih nedoumica do konkretnih postupaka, razumemo
            da su pitanja sastavni deo poverenja. Zato smo izdvojili najčešća —
            i ponudili jasne, sažete odgovore.
          </p>

          <div className="w-24 md:w-40 h-[1px] bg-[#d6a13b] mx-auto mt-4 md:mt-5"></div>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start"
        >
          {/* LEVA STRANA */}
          <div
            className={`transition-all duration-1000 ${
              inView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-6 md:-translate-x-12"
            }`}
          >
            <div className="relative mb-8 md:mb-12 border-b border-gray-200">
              <div className="flex">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSection(index)}
                    className={`flex-1 text-center py-3 md:py-4 text-sm md:text-lg transition-colors duration-300 ${
                      activeSection === index
                        ? "text-[#d6a13b]"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
              <span
                className="absolute bottom-0 left-0 h-[2px] bg-[#d6a13b] transition-all duration-500 ease-in-out"
                style={{
                  width: `${100 / sections.length}%`,
                  transform: `translateX(${activeSection * 100}%)`,
                }}
              />
            </div>
            <div className="transition-all duration-500">
              <Accordion
                key={activeSection}
                questions={sections[activeSection].questions}
              />
            </div>
          </div>

          {/* DESNA STRANA */}
          <div
            className={`hidden md:block relative transition-all duration-1000 delay-300 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative w-full h-[600px]">
              <div className="absolute -top-10 -left-10 w-[420px] h-[420px] bg-gray-200 rounded-[40%] blur-3xl rotate-12"></div>
              <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-gray-400 rounded-[45%] blur-3xl -rotate-12"></div>
              <img
                src="https://images.unsplash.com/photo-1710010966147-35c53f427a9b?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="absolute top-0 right-0 w-60 h-[420px] object-cover rounded-xl shadow-2xl z-20"
              />
              <img
                src="https://images.unsplash.com/photo-1620662736427-b8a198f52a4d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="absolute top-20 left-0 w-80 h-[420px] object-cover rounded-xl shadow-2xl z-10"
              />
              <img
                src="https://images.unsplash.com/photo-1619771766980-368d32e44b82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="absolute bottom-0 right-12 w-80 h-[210px] object-cover rounded-xl shadow-2xl z-30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
