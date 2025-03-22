import React, { useEffect } from "react";
import ProjectPost from "../../components/ProjectPost/ProjectPost";
import styles from "./project.module.scss";
import shape from "../../assets/Group 7.svg"


const Project: React.FC = () => {
    useEffect(() => {
          document.title = "Projects";
      }, [])

  return (
    <>

    <div className={styles["project-container"]}>
      <div className={styles["project-content"]}>
        <div className={styles["title-container"]}>
          <h1 className={styles["project-title"]}><span style={{color:"#BA84CB"}}>#</span>projects</h1>
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
    <img src={shape} className={styles.circles}/>

    </>
  );
};

export default Project;