import styles from "./Line.module.scss";
import gitLogo from "../../assets/gitlogo.svg";

function Line() {
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.logos}>
        <img src={gitLogo} alt="Git Logo" />
      </a>
    </div>
  );
}

export default Line;
