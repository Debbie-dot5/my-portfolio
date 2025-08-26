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
              <h2 className="text-2xl font-light text-gray-900 mb-6">About</h2>
              <p className=" text-gray-600 leading-relaxed mb-6">
                I&#39;m a Frontend developer with 1+ years of experience
                building web applications. I enjoy working with modern
                technologies and creating solutions that are both functional and
                beautiful.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Currently available for freelance projects and full-time
                opportunities.
              </p>
            </div>

            <div className="skill-set pr-4 ">
              <h3 className="text-2xl font-light text-gray-900 mb-4">Skills</h3>
              <div className="space-y-3">
                <div className="text-gray-600">
                  Frontend: Javascript, React, Next.js,  TypeScript, Tailwind Css
                </div>
               
                <div className="text-gray-600">
                  Tools: Git, GitHub, Figma, VS Code,
                </div>

                 <div className="text-gray-600">
                Others: REST APIs, Firebase, Responsive Design, UI/UX Principles
              </div>
              </div>
            </div>
          </div>
        </section>
   )

}