        import {
        Github,
        Linkedin,
        ArrowUpRight,
        Sparkles,
        Twitter,
        } from "lucide-react";


export default function Contact() {
 return (
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
 )
}