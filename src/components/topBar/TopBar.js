import { useState } from "react";
import { ReactComponent as EmailIcon } from "../../assets/icons/email.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";

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
    <div
      style={{
        backgroundColor: "#000",
        padding: "2px 0",
        textAlign: "center",
        fontSize: "14px",
        fontWeight: "500",
        color: "#e0e0e0",
        position: "relative",
      }}
    >
      <span
        onClick={handleEmailClick}
        style={{
          margin: "0 10px",
          display: "inline-flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <EmailIcon style={iconStyle} />
        {email}
      </span>

      <span
        onClick={handleLocationClick}
        style={{
          margin: "0 10px",
          display: "inline-flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <LocationIcon style={iconStyle} />
        {address}
      </span>

      <span
        style={{
          margin: "0 10px",
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <PhoneIcon style={iconStyle} />
        +381 123 456 789
      </span>

      {copied && (
        <div
          style={{
            position: "fixed",
            top: mousePos.y + 10,
            left: mousePos.x + 5,
            backgroundColor: "#222",
            color: "#d6a13b",
            padding: "2px 6px",
            borderRadius: "4px",
            fontSize: "12px",
            pointerEvents: "none",
            zIndex: 9999,
            whiteSpace: "nowrap",
          }}
        >
          Kopirano
        </div>
      )}
    </div>
  );
};

export default TopBar;
