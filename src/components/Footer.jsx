import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="text-center mt-16 pb-6 bg-white dark:bg-blackyel">
      <p className="text-black dark:text-white">
        Deyver Reyes Faria - Front-end Developer
      </p>
      <a
        href="https://www.linkedin.com/in/deyver-reyes-faria-51bab3240/"
        target="_blank"
        rel="noreferrer"
        className="linked px-2"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          size="xl"
          className="faLinkedIn text-warblue dark:text-white"
        />
      </a>
      <a
        href="https://github.com/Dyvrais"
        target="_blank"
        rel="noreferrer"
        className="px-2"
      >
        <FontAwesomeIcon
          icon={faGithub}
          size="xl"
          className="faGithub text-warblue dark:text-white"
        />
      </a>
    </footer>
  );
}
