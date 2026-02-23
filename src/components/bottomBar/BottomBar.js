import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as EmailIcon } from "../../assets/icons/email.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";
import CopiedTooltip from "../common/CopiedTooltip";
import { handleScrollNavigation } from "../../utils/scrollToSection";

const BottomBar = () => {
  const [copied, setCopied] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const location = useLocation();
  const navigate = useNavigate();

  const footerLinks = [
    { text: "O nama", id: "about-us" },
    { text: "Polja delovanja", id: "work-fields" },
    { text: "Advokatski tim", id: "team" },
    { text: "Najčešća pitanja", path: "/questions-answers" },
    { text: "Kontakt", path: "/contact" },
  ];

  const iconStyle = {
    width: 18,
    height: 18,
    fill: "#d6a13b",
    marginRight: 8,
  };

  const email = "info@advokaticacak.rs";
  const address = "Gradsko šetalište 15, 32000 Čačak";
  const phone = "+381 123 456 789";

  const handleEmailClick = async (e) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setMousePos({ x: e.clientX, y: e.clientY });
      setTimeout(() => setCopied(false), 600);
    } catch (err) {
      console.error("Ne mogu da kopiram:", err);
    }
  };

  const handleLocationClick = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-black text-white font-serif pt-12 md:pt-16 pb-8 px-6 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-16 text-center justify-items-center">
        <div className="max-w-sm">
          <div className="flex justify-center mb-1">
            <img
              src="/images/logoLS.png"
              alt="Logo"
              className="h-10 md:h-9 w-auto"
            />
          </div>

          <div className="w-32 md:w-40 h-[1px] bg-[#d6a13b] mx-auto mb-5"></div>

          <h3 className="text-lg md:text-xl mb-3 tracking-wide">
            Advokatska kancelarija
          </h3>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed px-4 md:px-0">
            Zakon u službi vaše sigurnosti. Na sudu, u pregovorima, u životu –
            mi smo uz vas.
          </p>
        </div>

        {/* INFORMACIJE */}
        <div className="max-w-sm">
          <h3 className="text-lg md:text-xl mb-3 tracking-wide">Informacije</h3>

          <div className="w-20 md:w-32 h-[1px] bg-[#d6a13b] mx-auto mb-5"></div>

          <div className="space-y-4 text-gray-300 text-sm md:text-base">
            <div
              onClick={handleEmailClick}
              className="flex items-center justify-center cursor-pointer hover:text-[#d6a13b] transition"
            >
              <EmailIcon style={iconStyle} />
              {email}
            </div>

            <div
              onClick={handleLocationClick}
              className="flex items-center justify-center cursor-pointer hover:text-[#d6a13b] transition"
            >
              <LocationIcon style={iconStyle} />
              {address}
            </div>

            <div className="flex items-center justify-center">
              <PhoneIcon style={iconStyle} />
              {phone}
            </div>
          </div>
        </div>

        {/* LINKOVI */}
        <div className="max-w-sm">
          <h3 className="text-lg md:text-xl mb-3 tracking-wide">Linkovi</h3>

          <div className="w-20 md:w-24 h-[1px] bg-[#d6a13b] mx-auto mb-5"></div>

          <ul className="space-y-3 text-gray-300 text-sm md:text-base">
            {footerLinks.map((link, idx) => (
              <li
                key={idx}
                onClick={() => {
                  if (link.path) {
                    navigate(link.path);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    handleScrollNavigation(location, navigate, link.id);
                  }
                }}
                className="hover:text-[#d6a13b] transition cursor-pointer"
              >
                {link.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <div className="w-2/3 md:w-1/2 h-[1px] bg-[#d6a13b] mx-auto mb-6"></div>

        <div className="text-center text-gray-400 text-xs md:text-sm">
          advokaticacak.rs 2026 | Sva prava zadržana.
        </div>
      </div>

      <CopiedTooltip show={copied} mousePos={mousePos} />
    </footer>
  );
};

export default BottomBar;
