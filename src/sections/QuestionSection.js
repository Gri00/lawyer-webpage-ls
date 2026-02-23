import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

export default function QuestionSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={ref}
      className="bg-gray-100 text-black py-16 md:py-20 px-6 md:px-10 text-center overflow-hidden"
    >
      <h2
        className={`text-3xl md:text-4xl font-bold font-serif mb-6 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Imate još pitanja?
      </h2>

      <p
        className={`text-base md:text-lg max-w-3xl mx-auto font-serif mb-8 transition-all duration-1000 delay-200 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Proverite najčešća pitanja ili nas kontaktirajte direktno.
      </p>

      <div
        className={`flex flex-col sm:flex-row justify-center items-center gap-4 mb-14 transition-all duration-1000 delay-300 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <button
          onClick={() => handleNavigation("/questions-answers")}
          className="min-w-[200px] whitespace-nowrap text-center font-semibold py-3 px-6 rounded-lg 
  bg-[#d6a13b]/80 backdrop-blur-sm border border-[#d6a13b] text-white
  transition-all duration-1000 hover:bg-[#d6a13b]/100 hover:scale-105"
        >
          Najčešća pitanja
        </button>

        <button
          onClick={() => handleNavigation("/contact")}
          className="min-w-[200px] whitespace-nowrap text-center font-semibold py-3 px-6 rounded-lg 
  bg-[#d6a13b]/80 backdrop-blur-sm border border-[#d6a13b] text-white
  transition-all duration-1000 hover:bg-[#d6a13b]/100 hover:scale-105"
        >
          Kontaktirajte nas
        </button>
      </div>
    </section>
  );
}
