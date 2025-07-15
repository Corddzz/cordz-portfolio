import RevealOnScroll from '../RevealOnScroll'

const About = () => {
  const frontendSkills = [
    'React',
    'React Router',
    'Vite',
    'Vue',
    'Tailwind CSS',
    'MUI',
    'Axios',
    'Bootstrap 5',
  ]

  const backendSkills = ['Node.js', 'Express.js', 'MySQL']
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-[#1f284d]"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#ef4442] text-center cursor-default">
            About Me
          </h2>

          <div className="rounded-xl hover:translate-y-1 hover:border-[#ef4442] transition-all border p-6 mb-8 hover:cursor-pointer">
            <p className="text-[#eff8f7] mb-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              reiciendis dolore itaque aperiam odit ipsum repellat optio a unde
              id. Magni accusamus sapiente cumque pariatur nesciunt dolore,
              aspernatur cupiditate recusandae?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#eff8f7]">
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all border hover:border-[#ef4442]">
              <h3 className="text-xl font-bold mb-4 cursor-default">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/20 text-[#eff8f7] py-1 px-3 rounded-full text-sm hover:bg-blue-500/50 hover:shadow-gray-900 hover:cursor-pointer transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:translate-y-1 transition-all border hover:border-[#ef4442]">
              <h3 className="text-xl font-bold mb-4 cursor-default">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/20 text-[#eff8f7] py-1 px-3 rounded-full text-sm hover:bg-blue-500/50 hover:shadow-gray-900 hover:cursor-pointer transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-[#eff8f7]">
            <div className="p-6 rounded-xl border hover:translate-y-1 transition-all cursor-default hover:border-[#ef4442]">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-[#eff8f7] space-y-2">
                <li>
                  <strong>B.S. Information Technology</strong> - Kabankalan
                  Catholic College Inc. [2019-2023]
                </li>
                {/* <li>
                Relevant Coursework: Data Structure, Web Development, Cloud
                Computing
              </li> */}
              </ul>
            </div>
            <div className="p-6 rounded-xl border hover:translate-y-1 transition-all cursor-default hover:border-[#ef4442]">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4>
                    Part-time Faculty at Kabankalan Catholic College Inc.
                    (2023-2024)
                  </h4>
                  <p>
                    Taught Empowerment Technologies to students in Senior High
                    School Department, Also taught Web Development in the
                    College Department.
                  </p>
                </div>
                {/* <div>
                <h4>Software Engineer at XYZ (2022-2024)</h4>
                <p>
                  Developed and maintained microservices for cloud-based
                  applications.
                </p>
              </div> */}
                {/* <div>
                <h4>Intern at XYZ Services (2022)</h4>
                <p>
                  Contributed in building web application for Kabankalan City
                  government activities and announcements.
                </p>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default About
