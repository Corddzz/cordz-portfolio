import RevealOnScroll from '../RevealOnScroll'
import imageProfile from '../../assets/profile.png'

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-evenly relative bg-[#1f284d]"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-[#eff8f7] text-5xl md:text-7xl font-bold mb-4 p-3 cursor-default">
            My <span className="text-[#ef4442]">Portfolio</span>
          </h1>

          <p className="text-[#eff8f7] text-lg mb-8 max-w-lg mx-auto text-justify cursor-default">
            Hello, I'm
            <span className="text-[#ef4442] font-semibold">
              {' '}
              Leonheil Cordero
            </span>
            , an enthusiastic web developer. I enjoy building dynamic and
            user-friendly web applications using latest technologies. I'm
            currently seeking for new opportunities to work with a great team
            where i can contribute my skills and experience as a developer. Feel
            free to contact me. Happy Coding! 😊🧑‍💻🚀
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-[#ef4442] text-[#eff8f7] py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[#ef4442]/50 hover:shadow-lg"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-[#ef4442] text-[#ef4442] py-3 px-6 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[#ef4442]/50 hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
      <div>
        <img
          src={imageProfile}
          alt="Profile"
          className="rounded-full size-96 shadow-xl shadow-black/50 hover:scale-110 duration-300 ease-in-out cursor-pointer"
        />
      </div>
    </section>
  )
}

export default Home
