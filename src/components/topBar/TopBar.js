import { useState } from "react";
import { ReactComponent as EmailIcon } from "../../assets/icons/email.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";
import CopiedTooltip from "../common/CopiedTooltip";

const TopBar = () => {
  const [copied, setCopied] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const iconStyle = { width: 22, height: 20, fill: "#d6a13b", marginRight: 6 };
  const email = "info@advokaticacak.rs";
  const address = "Gradsko šetalište 15, 32000 Čačak";

  const handleEmailClick = async (e) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setMousePos({ x: e.clientX, y: e.clientY });
      setTimeout(() => setCopied(false), 500);
    } catch (err) {
      console.error("Ne mogu da kopiram u clipboard:", err);
    }
  };

  const handleLocationClick = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-black text-[#e0e0e0] font-medium text-sm relative">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 py-1 px-2">
        <span
          onClick={handleEmailClick}
          className="flex items-center cursor-pointer"
        >
          <EmailIcon style={iconStyle} />
          {email}
        </span>

        <span
          onClick={handleLocationClick}
          className="flex items-center cursor-pointer"
        >
          <LocationIcon style={iconStyle} />
          {address}
        </span>

        <span className="flex items-center">
          <PhoneIcon style={iconStyle} />
          +381 123 456 789
        </span>
      </div>

      <CopiedTooltip show={copied} mousePos={mousePos} />
    </div>
  );
};

export default TopBar;
