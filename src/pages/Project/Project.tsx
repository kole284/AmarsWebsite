import '../../utils/container.scss';
import ProjectPost from "../../components/ProjectPost/ProjectPost";
import styles from "./Project.module.scss";
import shape from "/assets/Group 7.svg";
import { Helmet } from "react-helmet"
function Project(){
   return (
    <>
      <Helmet>
  <title>Projects | Sabic Biz</title>
  <meta name="description" content="Browse through a selection of my cybersecurity projects, from design to deployment." />
  <meta property="og:title" content="Projects | Sabic Biz" />
  <meta property="og:description" content="See how I’ve helped clients bring safety to their work." />
  <meta property="og:url" content="https://sabic.biz/projects" />
    </Helmet>

      <div className="page-container">
      <div className={styles["project-container"]}>
        <div className={styles["project-content"]}>
          <div className={styles["title-container"]}>
            <h1 className={styles["project-title"]}>
              <span style={{ color: "#BA84CB" }}>#</span>projects
            </h1>
            <div className={styles["line"]}></div>
          </div>
          <div className={styles["project-wrapper"]}>
            <ProjectPost
              image="https://via.placeholder.com/150"
              title="Prvi Projekat"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eius dolorum minus saepe deleniti qui repellat nisi unde ullam magni!"
            />
            <ProjectPost
              image="https://via.placeholder.com/150"
              title="Drugi Projekat"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eius dolorum minus saepe deleniti qui repellat nisi unde ullam magni!"
            />
          </div>
        </div>
      </div>
      <img src={shape} className={styles.circles} />
      </div>
    </>
  );
};

export default Project;

