import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import StatusDialog from "../components/statusDialog/StatusDialog";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const form = useRef();
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setAnimate(false);

    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_zbv4rg8",
        "template_2jull9s",
        form.current,
        "63fXchTj4Gw4i0VnT",
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        () => {
          setStatus("error");
        },
      )
      .finally(() => setLoading(false));
  };

  return (
    <div
      className={`min-h-screen grid md:grid-cols-2 font-serif bg-gray-50 transition-all duration-700 ease-out ${
        animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* LEFT SIDE */}
      <div className="flex items-center justify-end px-4 py-12 md:py-16">
        <div className="w-full max-w-xl">
          <h1 className="text-3xl md:text-4xl mb-4">Zakažite konsultacije</h1>

          <div
            className="h-[1px] w-1/2 mb-6"
            style={{ backgroundColor: "#d6a13b" }}
          ></div>

          <p className="text-gray-600 mb-10">
            Ostavite nam svoje podatke i ukratko opišite problem. Naš tim će vas
            kontaktirati u najkraćem roku.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-black mb-2">
                  Ime
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Vaše ime"
                  className="border border-gray-300 p-3 w-full focus:outline-none focus:border-[#d6a13b]"
                  required
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Molimo unesite ime")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">
                  Broj telefona
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="Unesite vaš kontakt telefon"
                  className="border border-gray-300 p-3 w-full focus:outline-none focus:border-[#d6a13b]"
                  required
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Molimo unesite broj telefona")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-black mb-2">
                  Email adresa
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email adresa"
                  className="border border-gray-300 p-3 w-full focus:outline-none focus:border-[#d6a13b]"
                  required
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "Molimo unesite ispravnu email adresu",
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">
                  Datum i vreme
                </label>
                <input
                  type="datetime-local"
                  name="date"
                  className="border border-gray-300 p-3 w-full focus:outline-none focus:border-[#d6a13b]"
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "Molimo unesite ispravan datum i vreme",
                    )
                  }
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-black mb-2">
                  Odgovor želim preko
                </label>
                <select
                  name="contact_method"
                  className="border border-gray-300 p-3 w-full bg-white focus:outline-none focus:border-[#d6a13b]"
                  required
                >
                  <option value="email">E-mail</option>
                  <option value="phone">Telefonski poziv</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">
                  Tema
                </label>
                <select
                  name="topic"
                  className="border border-gray-300 p-3 w-full bg-white focus:outline-none focus:border-[#d6a13b]"
                >
                  <option>Bez teme</option>
                  <option>Krivično pravo</option>
                  <option>Radno pravo</option>
                  <option>Zastupanje u sporovima</option>
                  <option>Privredno pravo</option>
                  <option>Imovinski odnosi</option>
                  <option>Porodično pravo</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-black mb-2">
                Poseban zahtev
              </label>
              <textarea
                name="message"
                placeholder="Unesite vaš zahtev ili predlog..."
                rows="4"
                className="border border-gray-300 p-3 w-full focus:outline-none focus:border-[#d6a13b]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 font-semibold text-white 
             backdrop-blur-sm
             border border-white/20
             transition-all duration-300
             active:scale-95
             relative overflow-hidden flex items-center justify-center"
              style={{ background: "rgba(214,161,59,0.85)" }}
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              ) : (
                <span className="relative z-10">POŠALJI</span>
              )}

              <span className="absolute inset-0 bg-white/30 backdrop-blur-sm opacity-0 hover:opacity-100 transition-all duration-300 hover:scale-105"></span>
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:flex items-center justify-start px-32 py-12 md:py-16">
        <img
          src="https://images.unsplash.com/photo-1605256585681-455837661b18?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Kontakt"
          className="w-[420px] lg:w-[480px] h-[520px] lg:h-[680px] object-cover rounded-lg shadow-lg"
        />
      </div>
      <StatusDialog status={status} onClose={() => setStatus(null)} />
    </div>
  );
}
