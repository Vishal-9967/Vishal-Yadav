import styles from "./ProjectsStyles.module.css";
import vibe from "../../assets/VibeMusic.png";
import scriptify from "../../assets/scriptify.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
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
          p="Streaming App"
        />
        <ProjectCard
          src={scriptify}
          link="https://github.com/Vishal-9967/Scriptify"
          h3="Scriptify"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
