import React from "react";
import styles from "./Post.module.scss";

type PostProps = {
  image: string;
  title: string;
  text: string;
};

const Post: React.FC<PostProps> = ({ image, title, text }) => {
  return (
    <div className={styles['post-container']}>
      <div className={styles['image-column']}>
        <img src={image} alt="Slika" />
      </div>
      <div className={styles['text-column']}>
        <div className={styles['title-row']}>{title}</div>
        <div className={styles['text-row']}>{text}</div>
      </div>
    </div>
  );
};

export default Post;
