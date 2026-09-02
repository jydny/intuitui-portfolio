import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DesignSystem from "./pages/DesignSystem";
import CustomApp from "./pages/CustomApp";
import Branding from "./pages/Branding";
import CustomModules from "./pages/CustomModules";

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/design-system" element={<DesignSystem />} />
            <Route path="/work/jovia-custom-app" element={<CustomApp />} />
            <Route path="/work/branding" element={<Branding />} />
            <Route path="/work/modules" element={<CustomModules />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
