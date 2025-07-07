"use client";

import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


export default function Portfolio() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F4EAF1" }}>
      <div className="max-w-4xl mx-auto px-6 py-16">
       {/* header */}
       <Header/>

        {/* Hero */}
        <Hero/>
      
        {/* Projects */}
        <Projects/>
      
       {/*  About */}
       <About/>
       {/* Contact  */}
       <Contact/>
      </div>
    </div>
  );
}
