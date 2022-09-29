import { Route, Routes } from "react-router-dom";
import OurWork from "./Pages/OurWork";
import Solutions from "./Pages/Solutions";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <div className="content-wrap">
        <Navbar />

        <Routes>
          <Route path="/" element={<OurWork />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
