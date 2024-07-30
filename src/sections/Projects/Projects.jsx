import styles from "./ProjectsStyles.module.css";
import vibe from "../../assets/VibeMusic.png";
import scriptify from "../../assets/scriptify.png";
import crop from "../../assets/crop.png";
import portfolio from "../../assets/portfolio.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={vibe}
          link="https://music-8a59e.web.app/"
          h3="Vibe Music"
          p="Music Streaming App"
        />
        <ProjectCard
          src={scriptify}
          link="https://github.com/Vishal-9967/Scriptify"
          h3="Scriptify"
          p="Effortless meeting transcriptions and actionable insights"
        />
        <ProjectCard
          src={crop}
          link="https://github.com/Vishal-9967/smart-farming"
          h3="Smart Farming"
          p="Simplifying Precision Farming with User-Friendly Solutions"
        />
        <ProjectCard
          src={portfolio}
          link="https://github.com/Vishal-9967/Vishal-Yadav"
          h3="Vishal Portfolio"
          p="Turning Concepts into Code"
        />
      </div>
    </section>
  );
}

export default Projects;
