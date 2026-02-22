import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full shadow-lg bg-[#d6a13b] text-white flex items-center justify-center 
        transition-all duration-300 transform ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        } hover:scale-110`}
      aria-label="Scroll to top"
    >
      <img
        src="/images/arrow.svg"
        alt="Arrow Up"
        className="w-6 h-6"
        style={{ filter: "invert(1)" }}
      />
    </button>
  );
}
