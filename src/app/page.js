"use client";

import App from "next/app";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Appointment from "./components/Appointment";
import News from "./components/News";
import Footer from "./components/Footer";


export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Appointment />
      <News /> 
      <Contact />
      <Footer />
    </div>
  );
}
