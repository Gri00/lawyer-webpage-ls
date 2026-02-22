import { useState } from "react";
import { useSwipeable } from "react-swipeable";

export default function MobileWorkGallery({ fields }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? fields.length - 1 : prev - 1));
    setShowOverlay(false);
  };
  const handleNext = () => {
    setActiveIndex((prev) => (prev === fields.length - 1 ? 0 : prev + 1));
    setShowOverlay(false);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="md:hidden relative mt-8 max-w-sm mx-auto transition-all duration-1000"
    >
      <div className="overflow-hidden rounded-md">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {fields.map((field, idx) => (
            <div
              key={idx}
              className="min-w-full relative cursor-pointer"
              onClick={() =>
                setShowOverlay((prev) => (activeIndex === idx ? !prev : true))
              }
            >
              <img
                src={field.image}
                alt={field.title}
                className="w-full h-64 object-cover"
              />

              {/* Bottom bar */}
              <div className="absolute bottom-2 left-2 flex items-center text-gray-100 font-serif font-bold text-sm z-0">
                <img
                  src="/images/lines.svg"
                  alt="Ikonica linije"
                  className="w-7 h-7 mr-2"
                />
                <span>{field.title}</span>
              </div>

              {/* Overlay */}
              {showOverlay && activeIndex === idx && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center text-center text-white p-4 transition-opacity duration-1000">
                  <h3 className="text-xl font-bold font-serif mb-2">
                    {field.title}
                  </h3>
                  <div className="w-16 h-[1px] bg-[#d6a13b] mb-4"></div>
                  <p className="text-sm font-serif">{field.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Indicator dots */}
      <div className="flex justify-center gap-2 mt-4">
        {fields.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full transition-colors duration-500 ${
              idx === activeIndex ? "bg-[#d6a13b]" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
