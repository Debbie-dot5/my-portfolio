import Image from "next/image";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="mb-32 relative">
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
              className="flex items-center gap-2 bg-[#C9C3DE] text-gray-900 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors"
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
  );
}
