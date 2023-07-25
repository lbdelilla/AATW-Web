import { useLocation } from 'react-router-dom'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Hero from '../Components/Hero'
import Services from '../Components/Services'
import { useEffect } from 'react'

function App() {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/about' || location.pathname !== '/contact') {
      const element = document.getElementById(
        location.pathname.replace('/', '')
      )
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
        })
      }
    }
  }, [location])
  return (
    <>
      <div className="">
        <Hero />
        <About />
        <Services />
        <Contact />
      </div>
    </>
  )
}

export default App
