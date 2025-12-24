import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/about.jsx'
import Books from './components/Books.jsx'
import Testimonials from './components/Testimonials.jsx'


function App() {
  return (
   <div className='w-full mx-w-full h-auto mx-h-auto bg-pink-300 overflow-x-hidden overflow-y-hidden px-4 py-2 mx-auto font-body box-border' >
    <Navbar />
    <Hero />
    <About />
    <Books />
    <Testimonials />
     
    
   </div>
  )
}

export default App
