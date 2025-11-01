import React from "react";
import Header from "./components/Header.jsx";
import HeroServices from "./components/HeroServices.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div>
      <Header />
      <HeroServices />
      <Services />
      <Footer />
    </div>
  );
}
