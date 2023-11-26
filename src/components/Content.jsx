import Project from "./Project";
import Resume from "./Resume";
import AboutMe from "./AboutMe";
import GitLogo from "../assets/git-scm-icon.svg";
import JSLogo from "../assets/js_icon.svg";
import ReactLogo from "../assets/reactjs-icon.svg";
import TailwindLogo from "../assets/tailwindcss-icon.svg";
import CSSLogo from "../assets/w3_css-icon.svg";
import HTMLLogo from "../assets/w3_html5-icon.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Content() {
  return (
    <>
      <section
        id="main"
        className="w-[98%] m-auto bg-white dark:bg-blackyel text-black dark:text-white grid grid-cols-2 grid-rows-2 gap-7 pt-40 h-screen font-spartan"
      >
        <div className="justify-self-end main-info">
          <img
            className="max-h-full max-w-full min-w-0 min-h-0 p-1 rounded-full justify-self-end portrait border-[3px] border-warblue dark:border-waryellow"
            src="https://media.licdn.com/dms/image/C4E03AQFYQN6dg4fjHg/profile-displayphoto-shrink_800_800/0/1654188166788?e=2147483647&v=beta&t=nHHTxTdIF_7ynMOU8nnScwOTDx4tDJpPVWUnxP4q34Y"
            alt="profile picture"
          />
        </div>
        <div className="flex flex-col main-info">
          <div className="flex flex-1 flex-col justify-center">
            <h1 className="text-3xl font-bold self-start titleee">
              DEYVER REYES FARIA
            </h1>
            <h2 className="text-2xl font-semibold text-warblue dark:text-waryellow subtitleee">
              Front-end Developer
            </h2>
            <div className="flex items-center">
              <a
                href="../CV-DRF.docx"
                className="text-sm md:text-base border-2 border-warblue hover:border-[#15397ab3] hover:bg-[#15397ab3] hover:text-white dark:bg-blackyel dark:border-waryellow dark:hover:border-[#ffc129b3] dark:hover:bg-[#ffc129b3] dark:hover:text-black rounded-lg py-2 px-3 icon"
              >
                <FontAwesomeIcon icon={faFile} /> Resume
              </a>
              <a
                href="https://www.linkedin.com/in/deyver-reyes-faria-51bab3240/"
                target="_blank"
                rel="noreferrer"
                className="px-2 icon"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2xl"
                  className="faLinkedIn text-black dark:text-white hover:text-warblue dark:hover:text-waryellow"
                />
              </a>
              <a
                href="https://github.com/Dyvrais"
                target="_blank"
                rel="noreferrer"
                className="px-2 icon"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2xl"
                  className="faGithub text-black dark:text-white hover:text-warblue dark:hover:text-waryellow"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="h-1/3 col-span-2 flex flex-col justify-center mt-5 devstack">
          <div className="text-center text-xl mt-5">
            <h3 className="underline underline-offset-4">Stack</h3>
          </div>
          <div className="flex justify-center space-x-4 mt-3">
            <img
              src={HTMLLogo}
              className="iconSVG h-10 w-10 md:h-auto md:w-auto transition-all hover:scale-[1.2]"
            />
            <img
              src={CSSLogo}
              className="iconSVG h-10 w-10 md:h-auto md:w-auto transition-all hover:scale-[1.2]"
            />
            <img
              src={TailwindLogo}
              className="iconSVG h-10 w-10 md:h-auto md:w-auto transition-all hover:scale-[1.2]"
            />
            <img
              src={JSLogo}
              className="iconSVG h-10 w-10 md:w-[64px] md:h-[64px] transition-all hover:scale-[1.2]"
            />
            <img
              src={ReactLogo}
              className="iconSVG h-10 w-10 md:h-auto md:w-auto transition-all hover:scale-[1.2]"
            />
            <img
              src={GitLogo}
              className="iconSVG h-10 w-10 md:w-[64px] md:h-[64px] transition-all hover:scale-[1.2]"
            />
          </div>
        </div>
      </section>

      <Project />
      <Resume />
      <AboutMe />
    </>
  );
}
