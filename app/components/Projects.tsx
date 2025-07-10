
import { projects } from "../data/projects"
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger) 

export default function Projects() {
  useGSAP(() => {
 

  gsap.fromTo(
    ".projects-title",
    { opacity: 0, x: 400,  duration: 3 , ease: "power4.out" },
    {
      opacity: 1,
      x: 0,
      duration: 3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top 80%"
      }
    }
  )

 
// first trial

  // gsap.to(".project-card",{
  //   scrollTrigger: {
  //     trigger: ".projects-card",
  //     start: "top",
  //     toggleActions: "restart none none reverse", 
  //     scrub: 1, 
  //   },

  //   x: 400,
  //   duration: 3,
  //   stagger: 0.2,
  // })


const cards = document.querySelectorAll(".project-card");
const xValues = [-100, 100, -150, 150, -200, 200]; 

cards.forEach((card, i) => {
  gsap.fromTo(
    card,
    { opacity: 0, x: xValues[i] || 0 },
    {
      opacity: 1,
      x: 0,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "restart none none reverse",
        scrub: 1,
      },
    }
  );
});



  }
  ,[])


    return (
          <section className="products-section mb-32 relative">
          <div className="mb-12">
            <h2 className="projects-title text-2xl font-light text-gray-900 relative inline-block group">
              Selected Work
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500 ease-out"
                style={{ backgroundColor: "#C9C3DE" }}
              ></span>
            </h2>
          </div>
          <div className="absolute -top-4 right-0 text-gray-300">
            <Sparkles size={14} />
          </div>

          <div className="projects-grid grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block project-card"
              >
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={project.img.src}
                    alt={project.img.alt}
                    fill={project.img.fill}
                    width={project.img.width}
                    height={project.img.height}
                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className="text-gray-400 group-hover:text-gray-900 transition-colors flex-shrink-0 ml-2"
                      size={16}
                    />
                  </div>
                  <p className="text-sm text-gray-600">{project.tech}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
    )
}