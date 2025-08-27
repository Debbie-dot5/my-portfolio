import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger) 



export default function About() {

useGSAP(() => {

  gsap.fromTo(
      ".about-me",
      { opacity: 0, x: -200 }, 
      {
        scrollTrigger: {
          trigger: ".about-me",
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
        opacity: 1,
        x: 0, 
        delay: 0.3,
        duration: 1,
        ease: "power4.out",
       
      }
    );
 

     gsap.fromTo(
      ".skill-set",

      {opacity: 0, x: 200}, 
      {
         scrollTrigger: {
          trigger: ".about-me",
          start: "top 80%",
          toggleActions: "restart none none reverse", 
        },
        
        opacity: 1,
        x: 0,
        delay: 0.3,
        duration: 1,
        ease: "power4.out",
      } 
    );


}, [])



   return(
      <section className="mb-32">
  <div className="grid md:grid-cols-2 gap-16">
    <div className="about-me border-r-2 border-gray-200 pr-4">
      <h2 className="text-xl font-medium text-gray-900 mb-6">About</h2>
      <p className=" text-gray-600 leading-relaxed mb-6">
        I’m a Frontend Developer with 1+ years of experience creating
        responsive, user-friendly web applications. I enjoy turning complex
        problems into simple, intuitive solutions that improve user experience
        and make a real impact.
      </p>
      <p className=" text-gray-600 leading-relaxed mb-6">
        What drives me is growth. I actively seek opportunities to learn, adapt,
        and sharpen my skills,because I believe great developers never stop
        evolving. I hold myself accountable to deliver quality work and take pride
        in solving problems that bring real value to users and businesses.
      </p>
      <p className="text-gray-600 leading-relaxed">
        I’m open to freelance, contract, internship, or full-time roles,any
        opportunity where I can grow, adapt, and contribute to building
        purposeful digital products.
      </p>
    </div>

   <div className="skill-set pr-4">
  <h3 className="text-xl font-medium text-gray-900 mb-4">Skills</h3>
  <div className="space-y-6">
    <div>
      <h4 className="text-gray-700 font-medium mb-2">Frontend</h4>
      <div className="flex flex-wrap gap-2">
        {["JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"].map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-[#c9c3de] text-gray-700 rounded-full text-sm shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    <div>
      <h4 className="text-gray-700 font-medium mb-2">Tools</h4>
      <div className="flex flex-wrap gap-2">
        {["Git", "GitHub", "Figma", "VS Code"].map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-[#c9c3de] text-gray-700 rounded-full text-sm shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    <div>
      <h4 className="text-gray-700 font-medium mb-2">Others</h4>
      <div className="flex flex-wrap gap-2">
        {["REST APIs", "Firebase", "Responsive Design", "UI/UX Principles"].map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-[#c9c3de] text-gray-700 rounded-full text-sm shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>

  </div>
</section>

   )

}