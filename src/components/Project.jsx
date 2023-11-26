import projects from "../projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDesktop } from "@fortawesome/free-solid-svg-icons";
export default function Project() {
  return (
    <section
      id="projects"
      className="bg-white dark:bg-blackyel text-white dark:text-black font-spartan mt-16 w-[75%] m-auto"
    >
      <h1 className="text-center text-3xl font-semibold text-black dark:text-white">
        <span className="text-warblue dark:text-waryellow font-mono">
          {">"}
        </span>{" "}
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-auto pt-7">
        {projects.map((project) => {
          return (
            <>
              <div
                key={project.name}
                className="w-[85%] h-full flex flex-col text-center bg-warblue dark:bg-waryellow rounded-md p-3 justify-center m-auto lg:font-medium"
              >
                <div className="img-container m-auto">
                  <img
                    src={project.image}
                    className="w-fit m-auto rounded-md"
                  />
                </div>
                <div className="section-2">
                  <h1 className="my-3 text-lg">{project.name}</h1>
                  <p className="pb-5 m-auto min-h-[116px]">{project.desc}</p>
                  <div
                    id="tools"
                    className="flex flex-wrap w-fit m-auto text-center justify-center align-center"
                  >
                    {project.tools.map((tool) => {
                      return (
                        <span
                          className="text-white bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                          key={tool}
                        >
                          {tool}
                        </span>
                      );
                    })}
                  </div>

                  <div className="links-sect mt-5 flex flex-col m-auto bottom-0">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                      <FontAwesomeIcon icon={faDesktop} /> Live preview
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                      <FontAwesomeIcon icon={faCode} /> View code
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}
