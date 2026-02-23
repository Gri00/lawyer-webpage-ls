import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function StatusDialog({ status, onClose }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (status) {
      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? 200 : 0;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  }, [status]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!status) return null;

  const isSuccess = status === "success";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-white rounded-xl shadow-2xl p-6 sm:p-8 text-center font-serif transform transition-all duration-300 scale-100"
      >
        <div className="mb-4">
          {isSuccess ? (
            <div className="text-green-600 text-4xl">✓</div>
          ) : (
            <div className="text-red-600 text-4xl">✕</div>
          )}
        </div>

        <h2
          className={`text-xl sm:text-2xl font-semibold mb-3 ${
            isSuccess ? "text-green-600" : "text-red-600"
          }`}
        >
          {isSuccess ? "Poruka je poslata" : "Došlo je do greške"}
        </h2>

        <p className="text-gray-600 text-sm sm:text-base mb-6">
          {isSuccess
            ? "Kontaktiraćemo vas u najkraćem mogućem roku."
            : "Molimo pokušajte ponovo ili nas kontaktirajte direktno putem telefona."}
        </p>

        <button
          onClick={() => {
            onClose();
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="w-full py-3 text-white font-semibold rounded-md transition-all duration-300 active:scale-95"
          style={{ background: "rgba(214,161,59,0.85)" }}
        >
          U redu
        </button>
      </div>
    </div>
  );
}
