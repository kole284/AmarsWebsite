import Post from "../../components/Post/Post"
import '../../utils/container.scss'
import styles from "./Blog.module.scss";
import shape from "/assets/Group 7.svg"
import {Helmet} from "react-helmet"

function Blog(){
 return (
    <>
      <Helmet>
  <title>Blog | Sabic Portfolio</title>
  <meta name="description" content="Read my blog posts about cybersecurity." />
  <meta property="og:title" content="Blog | Sabic Biz" />
  <meta property="og:description" content="Stay updated with insights and articles on cybersecurity." />
  <meta property="og:url" content="https://sabic.biz/blog" />
      </Helmet>

<div className="page-container page-container--centered">
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
                    <Post
            image="https://via.placeholder.com/150"
            title="Prvi Post"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero qui explicabo quas deleniti laudantium at consectetur ratione! Sint, eaque perspiciatis?"
          />
          

        </div>
      </div>
    </div>
    <img src={shape} className={styles.circles}/>
</div>

    </>
  );
};

export default Blog;
