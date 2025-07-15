/* eslint react/prop-types: 0 */

import { useEffect, useState } from 'react'

const Navbar = ({ menu, setMenu }) => {
  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : ''
  }, [menu])

  const [isActive, setIsActive] = useState(false)

  const toggleActive = () => {
    setIsActive(!isActive)
  }

  return (
    <nav className="fixed top-0 w-full text-[#eff8f7] z-40 backdrop-blur-sm border-b border-white/10 bg-[#1f284d]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-[#eff8f7]">
            My <span className="text-[#ef4442]">Portfolio</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-gray-300"
            onClick={() => setMenu((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-[#eff8f7] duration-300 border-b-2 border-transparent hover:border-[#eff8f7]"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[#eff8f7] duration-300 border-b-2 border-transparent hover:border-[#eff8f7]"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-[#eff8f7] duration-300 border-b-2 border-transparent hover:border-[#eff8f7]"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-[#eff8f7] duration-300 border-b-2 border-transparent hover:border-[#eff8f7]"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
