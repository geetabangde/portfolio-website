import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";

import images from "../images"; // adjust as per your project

function About() {
  return (
    <>
      <section
        id="about"
        className="relative py-12 px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 font-sans mt-12 sm:mt-16 md:mt-24 lg:mt-36 font-poppins"
      >
        {/* Background Glow Blobs */}
        <div className="absolute -z-10 top-10 left-10 w-72 h-72 bg-purple-500/30 blur-3xl rounded-full"></div>
        <div className="absolute -z-10 bottom-10 right-10 w-96 h-96 bg-pink-500/20 blur-3xl rounded-full"></div>

        <div className="flex flex-col-reverse md:flex-row justify-start items-center md:gap-20 gap-10">
          {/* ==== LEFT SIDE ==== */}
          <motion.div
            className="md:w-1/2 max-w-md text-center md:text-left mt-5 md:mt-0 flex flex-col justify-center items-center md:items-start gap-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 leading-tight">
              Hello, I'm
            </h1>

            {/* Shimmer Gradient Effect */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#8245ec] via-[#693B93] to-[#763CAC] bg-clip-text text-transparent animate-gradient">
              Geeta Bangde
            </h2>

            {/* Typing Effect */}
            <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-white">I'm a</span>
              <ReactTypingEffect
                text={[
                  "Web Developer",
                  "UI/UX Designer",
                  "Full Stack Developer",
                ]}
                speed={100}
                eraseSpeed={80}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-purple-400">{cursor}</span>
                )}
                displayTextRenderer={(text) => (
                  <span className="text-purple-400 font-semibold drop-shadow-[0_0_10px_rgba(130,69,236,0.7)]">
                    {text}
                  </span>
                )}
              />
            </h3>

            <p className="text-gray-300 mt-4 text-lg font-medium leading-relaxed">
              I am a passionate web developer with experience in building
              dynamic and responsive web applications. I love creating beautiful
              interfaces and seamless user experiences.
            </p>

            {/* Fancy CV Button */}
            <motion.a
              href="/path/to/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-block mt-6 px-8 py-3 text-lg font-semibold text-white rounded-lg 
              bg-gradient-to-r from-[#693B93] to-[#8245ec] shadow-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                DOWNLOAD CV <i className="fas fa-download"></i>
              </span>
              {/* Shiny Hover Effect */}
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></span>
            </motion.a>
          </motion.div>

          {/* ==== RIGHT SIDE (Profile Image) ==== */}
          <motion.div
            className="flex-1 flex justify-center mt-6 lg:mt-0 relative group md:w-1/2 md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Tilt
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              skew={10}
              transitionSpeed={1000}
            >
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl animated-border group-hover:scale-105 transition-transform duration-500">
                <img
                  src={images.profile}
                  alt="About Me"
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 via-transparent to-black/20 opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </section>

      {/* CSS For Shimmer + Border Animation */}
      <style>
        {`
          .animate-gradient {
            background-size: 200% auto;
            animation: gradientMove 3s linear infinite;
          }
          @keyframes gradientMove {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
          }

          .animated-border {
            border: 4px solid transparent;
            background: linear-gradient(90deg, #8245ec, #763CAC, #2C1250, #4F228D);
            background-size: 300% 300%;
            animation: borderMove 6s linear infinite;
          }
          @keyframes borderMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}
      </style>
    </>
  );
}

export default About;
