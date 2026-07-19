import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
// import GitHubActivity from './components/sections/GitHubActivity';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-dark-100 antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        {/* <GitHubActivity /> */}
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
