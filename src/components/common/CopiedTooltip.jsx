const CopiedTooltip = ({ show, mousePos }) => {
  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: mousePos.y + 12,
        left: mousePos.x + 6,
        backgroundColor: "#111",
        color: "#d6a13b",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
        pointerEvents: "none",
        zIndex: 9999,
        whiteSpace: "nowrap",
      }}
    >
      Kopirano
    </div>
  );
};

export default CopiedTooltip;
