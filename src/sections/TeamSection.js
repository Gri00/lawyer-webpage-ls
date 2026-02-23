import { useInView } from "react-intersection-observer";
import TeamCard from "../components/teamCard/TeamCard";
import { teamMembers } from "../constants/team";

export default function TeamSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="bg-gray-200 text-black py-20 px-5 sm:px-10 text-center overflow-hidden"
    >
      <h2
        className={`text-3xl sm:text-4xl font-bold font-serif mb-6 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Advokatski tim
      </h2>
      <p
        className={`text-base sm:text-lg font-serif max-w-3xl sm:max-w-6xl mx-auto mb-4 transition-all duration-1000 delay-200 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Naš tim čine ljudi koji pravo ne posmatraju kroz paragrafe, već kroz
        živote onih kojima pomažu. Svaki slučaj je drugačiji, ali pristup ostaje
        isti — odgovornost, razumevanje i vrhunsko pravno znanje.
      </p>

      <div
        className={`w-24 sm:w-36 h-[1px] bg-[#d6a13b] mx-auto mb-10 transition-all duration-1000 delay-300 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      ></div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto transition-all duration-1000 delay-400 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {teamMembers.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
}
