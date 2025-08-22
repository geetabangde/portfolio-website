import React from "react";
import ReactTypingEffect from "react-typing-effect";
import images from "../images";

function About() {
  return (
    <>
      <section
        id="about"
        className="py-4 px-7ew font-sans mt-20 m:mt-24 ls:mt-32 lg:px-20 font-poppins"
      >
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          {/* left side - content */}
          <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 flex flex-col justify-center items-center md:items-start gap-4">
            {/* Greeting */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 leading-tight">
              Hello, I'm
            </h1>

            {/* Name - highlighted differently */}
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-gradient bg-gradient-to-r from-[#FFFFFF] via-[#9780ad] to-[#FFFFFF] bg-clip-text text-transparent mb-4">
              Geeta Bangde
            </h2>

            {/* Skills with typing effect */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-white">
                I am a <span className="text-purple-400">specialist</span> in:
              </span>
              <ReactTypingEffect
                text={[
                  "Full Stack Developer",
                  "UI/UX Designer",
                  "Software Developer",
                ]}
                speed={100}
                eraseSpeed={80}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-purple-400">{cursor}</span>
                )}
                displayTextRenderer={(text, i) => (
                  <span className="text-purple-400 font-semibold">{text}</span>
                )}
              />
            </h3>

            {/* About me */}
            <p className="text-base sm:text-lg text-gray-300 max-w-md leading-relaxed">
              I am a passionate web developer with experience in building
              dynamic and responsive web applications. I love creating beautiful
              interfaces and seamless user experiences.
            </p>
          </div>

          {/* right side - image */}
          <div className="flex-1 flex justify-center mt-6 lg:mt-0 relative group">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 transition-transform duration-500 group-hover:scale-105">
              <img
                src={images.profile}
                alt="About Me"
                className="w-full h-full object-cover rounded-full"
              />
              {/* Optional subtle overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 via-transparent to-black/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About
