import About from './Section/about.jsx'
import Footer from './Section/footer.jsx'
import Hooby from './Section/hooby.jsx'
import Skils from './Section/skils.jsx'
import Navbar from './Section/navbar.jsx'
import Contact from './Section/contact.jsx'

export default function App() {
  return (
    <div className="bg-gradient-to-r from-black via-gray-700 to-black min-h-screen">
      <Navbar />
      <About />
      <hr className='h-0.5 w-95% m-15 bg-white' />
      <Hooby />
      <Skils />
      <hr className='h-0.5 w-95% m-15 bg-white' />
      <Contact />
      <Footer />
    </div>
  )
}