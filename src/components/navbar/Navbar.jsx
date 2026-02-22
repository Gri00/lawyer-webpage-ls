import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { handleScrollNavigation } from "../../utils/scrollToSection";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { text: "Naslovna", id: null },
    { text: "O nama", id: "about-us" },
    { text: "Polja delovanja", id: "work-fields" },
    { text: "Advokatski tim", id: "team" },
    { text: "Kontakt", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-100 text-black border-t border-b border-black px-6 py-2">
      <div className="flex justify-between items-center">
        <div>
          <img src="/images/logoLS.png" alt="Logo" className="h-8" />
        </div>
        <div className="hidden md:flex gap-3">
          {links.map((link, idx) => (
            <button
              key={idx}
              className="relative px-3 text-sm font-serif hover:text-[#d6a13b] transition-colors duration-300 before:absolute before:left-0 before:top-1/4 before:h-1/2 before:w-[1px] before:bg-[#d6a13b] first:before:hidden"
              onClick={() =>
                handleScrollNavigation(location, navigate, link.id, link.path)
              }
            >
              {link.text}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        {links.map((link, idx) => (
          <button
            key={idx}
            className="block px-3 py-2 text-sm font-serif hover:text-[#d6a13b] transition-colors duration-300 border-b border-[#d6a13b]"
            onClick={() => {
              setIsOpen(false);
              handleScrollNavigation(location, navigate, link.id, link.path);
            }}
          >
            {link.text}
          </button>
        ))}
      </div>
    </nav>
  );
}
