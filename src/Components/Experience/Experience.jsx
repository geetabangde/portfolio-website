import { experiences } from "../../constants"; // Import your data
import { motion } from "framer-motion";

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2 relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline Line */}
      <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 h-80 bg-gradient-to-b from-purple-500 via-indigo-700 to-pink-500 shadow-lg"></div>

      {/* Experience Entries */}
      {experiences.map((experience, index) => (
        <motion.div
          key={experience.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`flex flex-col sm:flex-row items-center mb-16 relative ${
            index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
          }`}
        >
          {/* Timeline Circle */}
          <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-900 border-4 border-purple-600 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 shadow-[0_0_15px_rgba(130,69,236,0.5)] hover:scale-110 transition-transform duration-500">
            <img
              src={experience.img}
              alt={experience.company}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Content Card */}
          <div
            className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl border border-purple-600/40 bg-gray-900/70 backdrop-blur-lg shadow-[0_0_25px_rgba(130,69,236,0.4)] transition-transform duration-500 hover:scale-105 hover:-translate-y-2 ${
              index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
            } sm:ml-44 sm:mr-44 ml-4`}
          >
            {/* Flex container */}
            <div className="flex items-center space-x-6">
              {/* Company Logo */}
              <div className="w-16 h-16 bg-white rounded-md overflow-hidden shadow-md hover:scale-110 transition-transform duration-300">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Role & Company */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-md sm:text-sm text-gray-300">
                    {experience.company}
                  </h4>
                </div>
                <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-300">{experience.desc}</p>

            {/* Skills */}
            <div className="mt-4">
              <h5 className="font-medium text-white mb-2">Skills:</h5>
              <ul className="flex flex-wrap mt-2">
                {experience.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="bg-gradient-to-r from-purple-500 to-indigo-700 text-white px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-purple-600/50 shadow-md hover:scale-110 transition-transform duration-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

export default Experience;
