import experience from "../experience.json";
import education from "../education.json";

export default function Resume() {
  return (
    <section
      id="resume"
      className="flex flex-col text-white dark:text-black pt-[40px] mt-24 font-spartan"
    >
      <h1 className="text-center text-3xl font-semibold text-black dark:text-white pb-7">
        <span className="text-warblue dark:text-waryellow font-mono">
          {">"}
        </span>{" "}
        Resume
      </h1>

      <div
        id="resume-container"
        className="flex flex-col md:flex-row gap-8 m-auto p-2"
      >
        <div id="experience-field">
          <h2 className="experience text-warblue dark:text-waryellow underline underline-offset-4 text-2xl w-fit m-auto mb-5">
            Experience
          </h2>
          <ol className="relative border-s border-gray-200 dark:border-gray-700 m-auto">
            {experience.map((exp) => {
              return (
                <div key={exp.id}>
                  <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 font-normal leading-none text-gray-600 dark:text-gray-300">
                      {exp.duration}
                    </time>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.position}
                    </h3>
                    <p className="text-base font-normal text-gray-600 dark:text-gray-400">
                      {exp.company} · {exp.contract}
                    </p>
                    <p className="mb-4 text-base font-normal text-gray-600 dark:text-gray-400">
                      {exp.location}
                    </p>
                  </li>
                </div>
              );
            })}
          </ol>
        </div>

        <div id="education-field">
          <h2 className="text-warblue dark:text-waryellow text-2xl underline underline-offset-4 w-fit m-auto mb-5">
            Education
          </h2>
          <ol className="relative border-s border-gray-200 dark:border-gray-700 m-auto">
            {education.map((edu) => {
              return (
                <div key={edu.id}>
                  <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 font-normal leading-none text-gray-600 dark:text-gray-300">
                      {edu.duration}
                    </time>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-base font-normal text-gray-600 dark:text-gray-400">
                      {edu.degree} · {edu.field}
                    </p>
                    <p className="mb-4 text-base font-normal text-gray-600 dark:text-gray-400">
                      {edu.location}
                    </p>
                  </li>
                </div>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
