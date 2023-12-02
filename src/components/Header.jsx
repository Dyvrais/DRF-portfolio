import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

export default function Header({ toogleMode }) {
  return (
    <>
      <nav className="flex flex-col text-center md:flex-row fixed top-0 p-3 w-full justify-between text-white bg-warblue dark:bg-blackyel font-spartan border-2 z-50 border-warblue border-b-waryellow dark:border-blackyel dark:border-b-waryellow">
        <h1 className="md:pl-8 text-xl">
          <span className="text-waryellow font-mono">{">"}</span> DRF
        </h1>
        <ul className="flex items-center gap-x-5 m-auto md:m-0 right-0">
          <li className="hover:underline decoration-waryellow underline-offset-4 active:text-waryellow">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:underline decoration-waryellow underline-offset-4 active:text-waryellow">
            <a href="#resume">Resume</a>
          </li>
          <li className="hover:underline decoration-waryellow underline-offset-4 active:text-waryellow">
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <button
              className="w-fit bg-[#0101017d] dark:bg-[#ffffff4a] px-2 py-1 mt-[-10px] rounded-lg"
              onClick={toogleMode}
            >
              <FontAwesomeIcon
                icon={faCircleHalfStroke}
                className="mt-1 mx-1"
              />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
