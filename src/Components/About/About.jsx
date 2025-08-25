import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";

import images from "../images";

function About() {
  return (
    <>
      <section
        id="about"
        className="py-3 px-3 sm:px-8 md:px-16 lg:px-24 xl:px-32 font-sans mt-8 sm:mt-12 md:mt-20 lg:mt-32 font-poppins"
      >
        <div className="flex flex-col-reverse md:flex-row justify-start items-center md:gap-16 gap-8">
          <div className="md:w-1/2 max-w-md text-center md:text-left mt-5 md:mt-0 flex flex-col justify-center items-center md:items-start gap-5">
            {/* Greeting */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 leading-tight">
              Hello, I'm
            </h1>

            {/* Name - highlighted differently */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gradient bg-gradient-to-r from-[#FFFFFF] via-[#9780ad] to-[#FFFFFF] bg-clip-text text-transparent mb-4">
              Geeta Bangde
            </h2>

            {/* Skills with typing effect */}
            <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-white">
                I am a <span className="text-purple-400">specialist</span> in:
              </span>
              <ReactTypingEffect
                text={["Web Developer", "UI/UX Designer", "Web Designer"]}
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
            <p className="text-base sm:text-lg text-gray-300 max-w-md leading-relaxed text-wrap">
              I am a passionate web developer with experience in building
              dynamic and responsive web applications. I love creating beautiful
              interfaces and seamless user experiences.
            </p>
            {/* resume button */}
            <a
              href="/path/to/resume.pdf"
              className="inline-block mt-4 px-6 py-2 sm:px-8 sm:py-3 text-lg font-semibold text-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#8245ec",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                border: "2px solid #FFFFFF",
              }}
            >
              DOWNLOAD CV
            </a>
          </div>

          {/* right side - image */}
          <div className="flex-1 flex justify-center mt-6 lg:mt-0 relative group md:w-1/2 md:justify-end">
            <Tilt
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              skew={10}
              transitionSpeed={1000}
            >
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 transition-transform duration-500 group-hover:scale-105">
                <img
                  src={images.profile}
                  alt="About Me"
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                />
                {/* Optional subtle overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 via-transparent to-black/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
            </Tilt>
          </div>
        </div>
      </section>
    </>
  );
}

export default About
