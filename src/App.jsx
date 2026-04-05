import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "@/components/common-components/Navbar";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Bytelab from "@/pages/Bytelab";
import Contact from "@/pages/Contact";
import PlacementSupport from "@/pages/PlacementSupport";
import TrainingPrograms from "@/pages/TrainingPrograms";
import Footer from "@/components/common-components/Footer";
import ScrollToTop from "@/components/common-components/ScrollToTop";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bytelab" element={<Bytelab />} />
        <Route path="/training-programs" element={<TrainingPrograms />} />
        <Route path="/placement-support" element={<PlacementSupport />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;