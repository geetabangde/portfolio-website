

function Skills() {
  return (
    <>
      <section id="skills" className="py-3 px-6ew font-sans mt-10 m:mt-15 ls:mt-32 lg:px-20 font-poppins">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 leading-tight">
              My Skills
            </h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills
