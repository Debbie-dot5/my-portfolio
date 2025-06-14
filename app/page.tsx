"use client";

import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Sparkles,
  Twitter,
  Download,
} from "lucide-react";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const projects = [
  {
    href: "https://movie-streaming-website-neon.vercel.app/",
    img: {
      src: "/project1.png",
      alt: "Movie Streaming Website",
      fill: true,
      width: undefined,
      height: undefined,
    },
    title: "Movie Streaming Website",
    tech: "React.js, Tailwind CSS, TMBD Api",
  },
  {
    href: "https://growth-project-five.vercel.app/",
    img: {
      src: "/project2.png",
      alt: "Growth Tracker",
      fill: true,
      width: undefined,
      height: undefined,
    },
    title: "Growth Tracker",
    tech: "React, Tailwind CSS",
  },
  {
    href: "https://fintech-dashboard-jvk1.vercel.app/",
    img: {
      src: "/project3.png",
      alt: "Fintech Dashboard",
      fill: true,
      width: undefined,
      height: undefined,
    },
    title: "Finify Dashboard",
    tech: "NextJs, Tailwind, Typescript",
  },
   {
    href: "https://gradific.com/",
    img: {
      src: "/project4.png",
      alt: "Gradific",
      fill: true,
      width: undefined,
      height: undefined,
    },
    title: "Gradific",
    tech: "NextJs, Tailwind, Typescript, Shadcn UI",
  },
   {
    href: "https://crownlist-staging.vercel.app/",
    img: {
      src: "/project5.png",
      alt: "CrownList",
      fill: true,
      width: undefined,
      height: undefined,
    },
    title: "CrownList",
    tech: "NextJs, Tailwind, Typescript",
  },
    {
    href: "https://ai-text-processor-mu.vercel.app/",
    img: {
      src: "/project6.png",
      alt: "AI Text Processor",
      fill: true,
      width: undefined,
      height: undefined,
    },
    title: "AI Text Processor",
    tech: "Reactjs, Tailwind, Typescript Restful API",
  },
  
];

export default function Portfolio() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F4EAF1" }}>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="mb-20">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold text-gray-600">Umoh Deborah</div>
            <div className="flex gap-6">
              <a
                href="https://github.com/Debbie-dot5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/umoh-deborah/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:umohdeborah5@gmail.com"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail size={20} />
              </a>

              <a
                href="https://x.com/Debbie35d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </header>

        {/* Hero */}
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
    <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 leading-tight">
      I craft
      <br />
      <span style={{ color: "#C9C3DE" }}>beautiful</span>
      <br />
      user interfaces
    </h1>
    <p className="text-xl text-gray-600 max-w-lg mb-8">
      Frontend developer specializing in React, Next.js, and modern
      web technologies.
    </p>

    <div className="flex items-center gap-4 text-sm text-gray-500">
      <a
        href="/My CV.pdf"
        download
        className="flex items-center gap-2 inline-flex bg-[#C9C3DE] text-gray-900 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors cursor-pointer"
      >
        Download CV
        <Download className="w-4 h-4 mr-2" />
      </a>
      <div>•</div>
      <div>Based in Nigeria, Kwara State</div>
    </div>
  </div>

  <div className="flex justify-center md:justify-end">
    <div className="w-64 h-64 relative rounded-full overflow-hidden shadow-lg">
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

        {/* Projects */}
        <section className="mb-32 relative">
          <div className="mb-12">
            <h2 className="text-2xl font-light text-gray-900 relative inline-block group">
              Selected Work
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500 ease-out"
                style={{ backgroundColor: "#C9C3DE" }}
              ></span>
            </h2>
          </div>
          {/* More sparkles for projects section */}
          <div className="absolute -top-4 right-0 text-gray-300">
            <Sparkles size={14} />
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
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
        {/* About */}
        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-6">About</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                I&#39;m a full-stack developer with 1+ years of experience
                building web applications. I enjoy working with modern
                technologies and creating solutions that are both functional and
                beautiful.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Currently available for freelance projects and full-time
                opportunities.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Skills</h3>
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

        {/* Contact */}
        <section className="relative">
          {/* Sparkles around contact */}
          <div className="absolute -top-8 left-8 text-gray-400">
            <Sparkles size={16} />
          </div>
          <div className="absolute -top-4 right-12 text-gray-300">
            <Sparkles size={12} />
          </div>

          <div
            className="rounded-2xl p-12 text-center relative overflow-hidden"
            style={{ backgroundColor: "#C9C3DE" }}
          >
            {/* Sparkles inside the contact box */}
            <div className="absolute top-6 left-8 text-white/30">
              <Sparkles size={14} />
            </div>
            <div className="absolute top-8 right-6 text-white/20">
              <Sparkles size={18} />
            </div>
            <div className="absolute bottom-6 left-12 text-white/25">
              <Sparkles size={12} />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl font-light text-white mb-4">
                Let&#39;s work together
              </h2>
              <p className="text-white/80 mb-8">
                I&#39;m always interested in new projects and opportunities.
              </p>

              <div className="flex justify-center gap-6 mb-8">
                <a
                href="https://github.com/Debbie-dot5"
                target="_blank"
                rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                href="https://www.linkedin.com/in/umoh-deborah/"
                target="_blank"
                rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                href="https://x.com/Debbie35d"
                target="_blank"
                rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Twitter size={24} />
                </a>
              </div>

              

              <a
                 href="mailto:umohdeborah5@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors"
              >
                Get in touch
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
