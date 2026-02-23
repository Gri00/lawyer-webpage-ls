import { useState } from "react";

export function Accordion({ questions }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-white rounded-lg shadow-sm px-6 font-serif">
      {questions.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="relative border-b border-gray-200 last:border-none"
          >
            <div className="absolute left-0 top-6 h-8 w-[2px] bg-[#d6a13b]"></div>

            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex justify-between items-center py-6 pl-6 text-left"
            >
              <span className="text-lg text-gray-800">{item.question}</span>

              <span
                className={`text-[#d6a13b] transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                isOpen
                  ? "max-h-40 opacity-100 pb-6 pl-6"
                  : "max-h-0 opacity-0 pl-6"
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
