import {
  HomeIcon,
  UserIcon,
  FolderIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'

const MobileMenu = ({ menu, setMenu }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-gray-800 z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
  
  ${
    menu
      ? 'h-screen opacity-100 pointer-events-auto'
      : 'h-0 opacity-0 pointer-events-none'
  }
  `}
    >
      <button
        onClick={() => setMenu(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <div className="flex items-center justify-center">
        <HomeIcon className="size-5 mr-2" />
        <a
          href="#home"
          onClick={() => setMenu(false)}
          className={`text-2xl font-semibold text-white my-4 transition-transform duration-300
            ${menu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
            `}
        >
          Home
        </a>
      </div>
      <div className="flex items-center justify-center">
        <UserIcon className="size-5 mr-2" />

        <a
          href="#about"
          onClick={() => setMenu(false)}
          className={`text-2xl font-semibold text-white my-4 transition-transform duration-300
            ${menu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
            `}
        >
          About
        </a>
      </div>
      <div className="flex items-center justify-center">
        <FolderIcon className="size-5 mr-2" />

        <a
          href="#projects"
          onClick={() => setMenu(false)}
          className={`text-2xl font-semibold text-white my-4 transition-transform duration-300
            ${menu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
            `}
        >
          Projects
        </a>
      </div>
      <div className="flex items-center justify-center">
        <PhoneIcon className="size-5 mr-2" />
        <a
          href="#contact"
          onClick={() => setMenu(false)}
          className={`text-2xl font-semibold text-white my-4 transition-transform duration-300
            ${menu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
            `}
        >
          Contact
        </a>
      </div>
    </div>
  )
}

export default MobileMenu
