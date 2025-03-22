import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>website made by kole284</p>
      <a href="https://github.com/kole284">@kole284 Github</a>
    </footer>
  );
};

export default Footer;
