export default function About() {
   return(
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
   )

}