import './App.css'
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <>
        <div className='relative z-0 flex flex-col items-center container mx-auto'>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Education />
          <Skills />
          <Contact />
          <Footer />
        </div>
    </>
  )
}

export default App
