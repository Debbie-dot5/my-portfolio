import { Github, Linkedin, Mail, Twitter, } from "lucide-react";
import Image from "next/image";

export default function Header() {
    return (
         <header className="mb-8">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold text-gray-600">
             <Image
              src="/logo.png"
              alt="Umoh Deborah"
              width={120}
              height={20}
                   />
            </div>
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
    )
}