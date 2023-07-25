import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './Views/App'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import AllServices from './Views/AllServices'
import Pricing from './Views/Pricing'

export function Layout() {
  return (
    <BrowserRouter scrollBehavior="smooth">
      <NavBar />
      <Routes>
        <Route path="/services/*" element={<AllServices />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/" element={<App />} />
        <Route path="/*" element={<App />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
