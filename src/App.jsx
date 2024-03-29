import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar/Navbar";
import About from "./pages/About/About";
import WellnessInIndia from "./pages/WellnessInIndia/WellnessInIndia";
import MedicineInIndia from "./pages/MedicineInIndia/MedicineInIndia";
import Footer from "./pages/Footer/Footer";
import Speciality from "./pages/Speciality/Speciality";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import PageNotFound from "./Components/PageNotFound";
import Hospital from "./pages/Hospital/Hospital";
import TermsAndCondition from "./Components/TermsAndCondition";
// import Form from "./pages/Form/Form";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* <Route path="/contact" element={<Form />} /> */}

        <Route path="/medicine-in-india" element={<MedicineInIndia />} />

        <Route path="/wellness-in-india" element={<WellnessInIndia />} />

        <Route path="/Speciality/:speciality" element={<Speciality />} />

        <Route path="/hospital/:hospital-link" element={<Hospital />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
