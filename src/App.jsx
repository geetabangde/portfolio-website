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
import BlurBlob from "./Components/BlurBlob";
import useLenis from "./hooks/useLenis";

function App() {
  useLenis();
  return (
    <>
      <div className="relative min-h-screen text-white overflow-hidden bg-[#050414]">
        <BlurBlob
          position={{ top: "35%", left: "20%" }}
          size={{ width: "30%", height: "40%" }}
        />
        {/* Hero/About Section particles */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00000040] to-[#00000090]"></div>
        <ParticlesBackground height="10vh" width="100%" />
        <div className="relative z-10">
          <Navbar />
          {/* Hero/About Section */}
          <section className="h-[90vh] flex flex-col items-center justify-center px-6 md:px-20">
            <About />
          </section>
          {/* all section */}
          <div className="p-20 bg-gray-900 text-white">
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
