const BottomBar = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f0f0f0",
        padding: "12px 0",
        textAlign: "center",
        fontSize: "14px",
        fontWeight: "500",
        marginTop: "auto",
      }}
    >
      <span style={{ margin: "0 10px" }}>📧 email@firma.com</span>
      <span style={{ margin: "0 10px" }}>📍 Ljubljana, Slovenija</span>
      <span style={{ margin: "0 10px" }}>📞 +386 40 123 456</span>
    </footer>
  );
};

export default BottomBar;
