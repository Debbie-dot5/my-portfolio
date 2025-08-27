

//import { useGSAP } from "@gsap/react";


export default function ExperienceSection(){

//     useGSAP(() => {

//   gsap.fromTo(
//       ".card-one",
//       { opacity: 0, x: -200 }, 
//       {
//         scrollTrigger: {
//           trigger: ".exp1",
//           start: "top 80%",
//           toggleActions: "restart none none reverse",
//         },
//         opacity: 1,
//         x: 0, 
//         delay: 0.3,
//         duration: 1,
//         ease: "power4.out",
       
//       }
//     );
 

//     gsap.fromTo(
//       ".card-two",
//       { opacity: 0, x: -200 }, 
//       {
//         scrollTrigger: {
//           trigger: ".exp2",
//           start: "top 80%",
//           toggleActions: "restart none none reverse",
//         },
//         opacity: 1,
//         x: 0, 
//         delay: 0.3,
//         duration: 1,
//         ease: "power4.out",
       
//       }
//     );


//     gsap.fromTo(
//       ".card-three",
//       { opacity: 0, x: -200 }, 
//       {
//         scrollTrigger: {
//           trigger: ".exp3",
//           start: "top 80%",
//           toggleActions: "restart none none reverse",
//         },
//         opacity: 1,
//         x: 0, 
//         delay: 0.3,
//         duration: 1,
//         ease: "power4.out",
       
//       }
//     );


// }, [])
    return (
        <div>

            <section className="experience-section py-8">
        <h2 className="text-xl font-medium text-gray-900 mb-12">
            <span>Experience</span>
        </h2>

        <div className="space-y-10">
            {/* Experience Card */}
            <div className="card-one border-l-4 border-[#C9C3DE] pl-6">
            <h3 className="text-2xl font-medium text-gray-900">
                Frontend Developer Intern — HNG Tech 
            </h3>
            <p className="text-sm text-gray-500 mb-2">Remote | 2025</p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                <li>Built personal projects and later collaborated on <strong>Gradific</strong>, an assessment & grading platform.</li>
                <li>Contributed to authentication flow, admin dashboards, settings, and test management features.</li>
                <li>Worked in agile sprints, collaborating with designers and developers to ship live features.</li>
            </ul>
            </div>

            {/* Experience Card */}
            <div className="experience-card card-two border-l-4 border-[#C9C3DE] pl-6">
            <h3 className="text-2xl font-medium text-gray-900">
                Frontend Developer Intern — Crownlist.ng
            </h3>
            <p className="text-sm text-gray-500 mb-2">April 2025 – Present</p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                <li>Collaborated with a cross-functional team to build a product listing platform enabling users to buy & sell items.</li>
                <li>Developed <strong>user-centric, intuitive, and easy-to-navigate</strong> frontend components.</li>
                <li>Integrated APIs and optimized UI workflows to enhance platform usability.</li>
            </ul>
            </div>

            {/* Experience Card */}
            <div className="experience-card card-three border-l-4 border-[#C9C3DE] pl-6">
            <h3 className="text-2xl font-medium text-gray-900">
                Protocol Volunteer — KwaraBuild Tech Conference
            </h3>
            <p className="text-sm text-gray-500 mb-2">Ilorin | 2024</p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                <li>Assisted with event coordination, guest management, and speaker onboarding.</li>
                <li>Worked closely with team members to ensure smooth session timekeeping and logistics.</li>
                <li>Demonstrated strong <strong>teamwork, adaptability, and communication</strong> skills in a fast-paced environment.</li>
            </ul>
            </div>
        </div>
</section>

        </div>
    )
}