import React from "react";
import Hero from "./Hero";
import "./Home.scss"
import Numbers from "./Numbers";
import Services from "./Services";
import Tourism from "./Tourism";
import Specialities from "./Specialities";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Numbers/>
      <Services/>
      <Specialities/>
      <Tourism/>
      <Contact/>
    </div>
  );
}
