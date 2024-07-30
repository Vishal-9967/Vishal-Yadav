import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/heroimg.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
// import twitterLight from "../../assets/twitter-light.svg";
// import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/VishalYadav_CV.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  // const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Vishal Yadav"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Vishal
          <br />
          Yadav
        </h1>
        <h2>Student|Full-stack Developer</h2>
        <span>
          <a href="https://github.com/Vishal-9967" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/vishal-tech/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <span>
          <p className={styles.description}>
            Passionate Full Stack Web Developer transforming innovative ideas
            into real-world applications, skilled in both frontend and backend.
          </p>
        </span>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

// rfc is use to create boiler plate
