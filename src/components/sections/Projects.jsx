import RevealOnScroll from '../RevealOnScroll'

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-[#1f284d]"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#ef4442] text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#eff8f7]">
            <div className="p-6 rounded-xl border hover:translate-y-1 hover:border-[#ef4442] hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Computer Laboratory Inventory Management System | Capstone
                Project
              </h3>
              <p className="text-[#eff8f7] mb-4 text-justify">
                Designed and built an Inventory Management System for computer
                labs to efficiently track and manage tools and equipment. The
                system helps streamline the process, ensuring everything is
                accounted for and easy to access.
              </p>
              <div>
                {['VB.NET', 'MySQL'].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/20 mr-2 text-[#eff8f7] py-1 px-3 rounded-full text-sm cursor-pointer hover:bg-blue-500/50 hover:shadow-gray-900 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border hover:translate-y-1 hover:border-[#ef4442] hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Teachers Loading & Scheduling Management System | IT Intern
              </h3>
              <p className="text-[#eff8f7] mb-4 text-justify">
                Developed a Loading and Scheduling Management System for
                teachers to efficiently manage their schedules and workloads.
                The system simplifies the process of assigning classes and
                tracking teacher availability.
              </p>
              <div>
                {['Vue', 'Axios', 'Express.js', 'MySQL'].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/20 mr-2 text-[#eff8f7] py-1 px-3 rounded-full text-sm cursor-pointer hover:bg-blue-500/50 hover:shadow-gray-900 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default Projects
