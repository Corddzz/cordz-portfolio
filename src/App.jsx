import { useState } from 'react'
import Navbar from './components/sections/Navbar'
import MobileMenu from './components/MobileMenu'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import LoadingScreen from './components/LoadingScreen'
import Contact from './components/sections/Contact'
import './index.css'

const App = () => {
  const [menu, setMenu] = useState(false)
  const [loading, setLoading] = useState(false)
  return (
    <>
      {!loading && <LoadingScreen onComplete={() => setLoading(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          loading ? 'opacity-100' : 'opacity-0'
        } bg-black text-gray-100`}
      >
        <Navbar menu={menu} setMenu={setMenu} />
        <MobileMenu menu={menu} setMenu={setMenu} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
