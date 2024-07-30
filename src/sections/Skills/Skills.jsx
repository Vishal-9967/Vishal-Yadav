import styles from "./SkillsStyles.module.css";
// import SkillList from '../../common/SkillList';
import { useTheme } from "../../common/ThemeContext";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import node from "../../assets/node.png";
import react from "../../assets/react.png";
import tailwind from "../../assets/tailwind.png";
import redux from "../../assets/react-redux.png";
import git from "../../assets/git.png";
import bootstrap from "../../assets/bootstrap.png";
import mongo from "../../assets/mongo.png";
import sql from "../../assets/sql.png";

function Skills() {
  const { theme } = useTheme();
  // const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <img
          src={html}
          // className={styles.hero}
          alt="HTML ICON"
        />
        <img
          src={css}
          // className={styles.hero}
          alt="CSS ICON"
        />
        <img
          src={js}
          // className={styles.hero}
          alt="JS ICON"
        />
      </div>
      <hr />
      <div className={styles.skillList}>
        <img
          src={node}
          // className={styles.hero}
          alt="NODE ICON"
        />
        <img
          src={react}
          // className={styles.hero}
          alt="REACT ICON"
        />
        <img
          src={tailwind}
          // className={styles.hero}
          alt="TAILWIND CSS ICON"
        />
      </div>
      <hr />
      <div className={styles.skillList}>
        <img
          src={redux}
          // className={styles.hero}
          alt="REDUX ICON"
        />
        <img
          src={git}
          // className={styles.hero}
          alt="GIT ICON"
        />
        <img
          src={bootstrap}
          // className={styles.hero}
          alt="BOOTSTRAP ICON"
        />
      </div>
      <hr />
      <div className={styles.skillList}>
        <img
          src={mongo}
          // className={styles.hero}
          alt="MONGODB ICON"
        />
        <img
          src={sql}
          className={styles.hero}
          alt="SQL ICON"
        />
      </div>
    </section>
  );
}

export default Skills;

{
  /* <SkillList src={checkMarkIcon} skill="HTML" /> */
}
{
  /* <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Node" /> */
}

{
  /* <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" /> */
}
{
  /* <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" /> */
}
{
  /* <SkillList src={checkMarkIcon} skill="MongoDB" />
        <SkillList src={checkMarkIcon} skill="SQL" /> */
}
