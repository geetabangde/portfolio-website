import React from "react";
import { education } from "../../constants"; // Import the education data
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] relative font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Gradient Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-gradient-to-r from-[#693B93] to-[#8245ec]"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`flex flex-col sm:flex-row items-center mb-10 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            <div
              key={edu.id}
              className={`flex flex-col sm:flex-row items-center mb-10 ${
                index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Timeline Circle */}
              {/* <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-3/4 h-3/4 object-contain rounded-full"
                />
              </div> */}

              {/* Content Section */}
              <div
                className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl border border-purple-600/40 bg-gray-900/70 backdrop-blur-lg shadow-[0_0_25px_rgba(130,69,236,0.4)] transition-transform duration-500 hover:scale-105 hover:-translate-y-2 ${
                  index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
                } sm:ml-44 sm:mr-44 ml-4`}
              >
                {/* Flex container for image and text */}
                <div className="flex items-center space-x-6">
                  {/* School Logo/Image */}
                  <div className="w-20 h-16 bg-white rounded-md overflow-hidden">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Degree, School Name, and Date */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-xl font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <h4 className="text-md sm:text-sm text-gray-300">
                        {edu.school}
                      </h4>
                    </div>
                    {/* Date at the bottom */}
                    <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-400 font-bold">
                  Grade: {edu.grade}
                </p>
                <p className="mt-4 text-gray-400">{edu.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
