import { useState, useRef } from "react";

export default function ImageCard({ image, text }) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative h-96 rounded-xl overflow-hidden cursor-pointer group"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 z-0"
        style={{ backgroundImage: `url(${image})` }}
      />

      <div
        className={`pointer-events-none absolute z-10 transition-opacity duration-300 ${
          visible ? "opacity-60" : "opacity-0"
        }`}
        style={{
          top: position.y - 150,
          left: position.x - 150,
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.25) 40%, rgba(255,255,255,0.05) 60%, transparent 75%)",
          filter: "blur(40px)",
        }}
      />

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-500 z-20" />

      <div className="absolute bottom-6 left-6 z-30">
        <p className="text-white text-lg font-serif drop-shadow-lg">{text}</p>
        <div className="mt-1 w-12 h-[1px] bg-[#d6a13b]"></div>
      </div>
    </div>
  );
}
