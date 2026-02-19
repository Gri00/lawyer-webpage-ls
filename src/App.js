import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import PillNav from "./components/design_components/pillnav/PillNav";
import TopBar from "./components/topBar/TopBar";
import BottomBar from "./components/bottomBar/BottomBar";

function App() {
  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <TopBar />
        <PillNav
          logoAlt="Company Logo"
          items={[
            { label: "Naslovna", href: "/" },
            { label: "Polja delovanja", href: "/about" },
            { label: "O nama", href: "/services" },
            { label: "Advokati", href: "/services" },
            { label: "Kontakt", href: "/contact" },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
          theme="color"
          initialLoadAnimation
        />

        <div style={{ flex: "1" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>

        <BottomBar />
      </div>
    </Router>
  );
}

export default App;
