import Image from "next/image";
import { Download, Sparkles } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger) 


export default function Hero() {

useGSAP(() => {

 
   gsap.fromTo(
      ".hero-title",
      { opacity: 0, x: -200 }, // Start from left (x: -100)
      {
        opacity: 1,
        x: 0, // Move to original position
        duration: 1,
        ease: "power4.out",
       
      }
    );


   


    gsap.fromTo(
      ".hero-description",

      {opacity: 0, x: -100}, // start
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
      } //end and add properties like duration, ease, etc.
    );

    gsap.fromTo(
      ".hero-image",

      {opacity: 0, x: 100}, // start
      {
        opacity: 1,
        x: 0,
        delay: 0.3,
        duration: 1,
        ease: "power4.out",
      } //end and add properties like duration, ease, etc.
    );

     gsap.fromTo(
      ".hero-cta",

      {y: 0}, // start
      {
         y: -10,
        yoyo: true,
        repeat: -1,
        repeatDelay: 0.2,
        duration: 0.4,
        ease: "power1.out",
      } 
    );

}, [])


  return (
    <section className="mb-32 relative">
          <div className="absolute top-10 left-20 text-gray-300">
            <Sparkles size={16} />
          </div>
          <div className="absolute top-32 right-16 text-gray-400">
            <Sparkles size={12} />
          </div>
          <div className="absolute top-64 left-32" style={{ color: "#C9C3DE" }}>
            <Sparkles size={20} />
          </div>
          <div className="absolute top-80 right-32 text-gray-300">
            <Sparkles size={14} />
          </div>
          <div className="absolute top-96 left-16 text-gray-400">
            <Sparkles size={18} />
          </div>

          {/* Background decorative shapes */}
          <div
            className="absolute top-20 right-20 w-32 h-32 rounded-full opacity-40"
            style={{ backgroundColor: "#C9C3DE" }}
          ></div>
          <div
            className="absolute top-60 left-10 w-24 h-24 rounded-full opacity-20"
            style={{ backgroundColor: "#C9C3DE" }}
          ></div>

         <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
  <div>
    <h1 className="hero-title text-5xl md:text-7xl font-light text-gray-900 mb-8 leading-tight">
      I craft
      <br />
      <span style={{ color: "#C9C3DE" }}>beautiful</span>
      <br />
      user interfaces
    </h1>
    <p className=" hero-description text-xl text-gray-600 max-w-lg mb-8">
      Frontend developer specializing in React, Next.js, and modern
      web technologies.
    </p>

    <div className="flex items-center gap-4 text-sm text-gray-500">
      <a
        href="/umoh-deborah.pdf"
        download
        className="hero-cta flex items-center gap-2 inline-flex bg-[#C9C3DE] text-gray-900 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors cursor-pointer "
      >
       <span className="hidden md:flex" >Download CV</span>
        <Download className="w-4 h-4 mr-2 items-center" />
      </a>
      <div>•</div>
      <div>Based in Nigeria, Kwara State</div>
    </div>
  </div>

  <div className="flex justify-center md:justify-end">
    <div className="hero-image w-64 h-64 relative rounded-full overflow-hidden shadow-lg">
      <Image
        src="/my-photo.jpg"
        alt="Umoh Deborah"
        fill
        className="object-cover"
        priority
      />
    </div>
  </div>
</div>

        </section>

  );
}
