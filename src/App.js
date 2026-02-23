import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import QuestionsPage from "./pages/QuestionsPage";
import TopBar from "./components/topBar/TopBar";
import BottomBar from "./components/bottomBar/BottomBar";
import Navbar from "./components/navbar/Navbar";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <TopBar />
        <Navbar />

        <div style={{ flex: "1" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/questions-answers" element={<QuestionsPage />} />
          </Routes>
        </div>

        <BottomBar />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
