import { useInView } from "react-intersection-observer";
import WorkFieldCard from "../components/workFieldCard/WorkFieldCard";
import MobileWorkGallery from "../components/workFieldCard/MobileWorkGallery";
import { workFields as fields } from "../constants/workFields";

export default function WorkFieldsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="bg-gray-100 text-black py-20 px-4 md:px-10 text-center overflow-hidden"
    >
      <h2
        className={`text-4xl font-bold font-serif mb-6 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Polja delovanja
      </h2>
      <p
        className={`text-md max-w-5xl font-serif mx-auto mb-2 transition-all duration-1000 delay-200 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Naš tim pokriva ključne pravne oblasti koje obuhvataju i privatne i
        poslovne potrebe klijenata. Kroz jasno definisane sektore, omogućavamo
        efikasno rešavanje konkretnih problema.
      </p>
      <div
        className={`w-36 h-[1px] bg-[#d6a13b] mx-auto mb-7 transition-all duration-1000 delay-300 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      ></div>

      {/* DESKTOP GRID */}
      <div
        className={`hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-1000 delay-400 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {fields.map((field) => (
          <WorkFieldCard
            key={field.title}
            title={field.title}
            image={field.image}
            description={field.description}
          />
        ))}
      </div>

      {/* MOBILE SWIPE GALLERY */}
      <div
        className={`md:hidden transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <MobileWorkGallery fields={fields} />
      </div>
    </section>
  );
}
