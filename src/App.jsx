import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ParticlesBackground from "./Components/ParticlesBackground/ParticlesBackground";
import BlurBlob from "./BlurBlob";

function App() {
  return (
    <>
      <div className="relative min-h-screen text-white overflow-hidden">
        <BlurBlob
          position={{ top: "35%", left: "20%" }}
          size={{ width: "300px", height: "300px" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#251C31] via-[#693B93] to-[#251C31]"></div>
        <div className="absolute inset-0">
          <ParticlesBackground />
        </div>
        <div className="relative z-10">
          <Navbar />
          <div className="p-20">
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
