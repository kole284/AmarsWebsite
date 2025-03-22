import React, { useEffect } from "react";
import Post from "../../components/Post/Post"
import styles from "./Blog.module.scss";
import shape from "../../assets/Group 7.svg"

const Blog: React.FC = () => {
    useEffect(() => {
          document.title = "Blog";
      }, [])
  return (
    <>

    <div className={styles["blog-container"]}>
      <div className={styles["blog-content"]}>
        <div className={styles['title-container']}> 
            <h1 className={styles["blog-title"]}><span style={{color:"#BA84CB"}}>#</span>blog</h1>
            <div className={styles.line}></div>
        </div>
       

        <div className={styles["blog-wrapper"]}>
          <Post 
            image="https://via.placeholder.com/150" 
            title="Prvi Post" 
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero qui explicabo quas deleniti laudantium at consectetur ratione! Sint, eaque perspiciatis?" 
          />
          <Post 
            image="https://via.placeholder.com/150" 
            title="Drugi Post" 
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero qui explicabo quas deleniti laudantium at consectetur ratione! Sint, eaque perspiciatis?" 
          />

        </div>
      </div>
    </div>
    <img src={shape} className={styles.circles}/>


    </>
  );
};

export default Blog;