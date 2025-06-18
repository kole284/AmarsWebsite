import "../../utils/container.scss";
import styles from './AboutMe.module.scss'
import shape1 from '/assets/Group 6.svg'
import hacker from '/assets/hacker.svg'
import Button from '../../components/Button/Button'
import { Helmet } from "react-helmet"
function AboutMe() {
   return(
        <>
          <Helmet>
  <title>About Me | Sabic Biz</title>
  <meta name="description" content="Learn more about who I am, my professional background, and the skills I use to ensure cybersecurity." />
  <meta property="og:title" content="About Me | Sabic Biz"/>
  <meta property="og:description" content="Get to know my journey as a developer and how I enforce security on systems." />
  <meta property="og:url" content="https://sabic.biz/about-me" />
         </Helmet>

            <div className="page-container" style={{overflow:'hidden'}}>
            <div className={styles.wrapper}>
            <div className={styles['container-1']}>
               <div className={styles['title-container']}>
                    <h1><span style={{color:"#BA84CB"}}>#</span>about-me</h1>
                    <div className={styles.line}></div>
               </div> 
               <div className={styles['container-3']}>
                    <img src={hacker} className={styles.hacker}/>
                </div>
               <img src={shape1} className={styles['shape1']}/>
               <div className={styles['text-container']}>
                    <p>Hello, I'm Amar! 
                    <br/><br/>
                    I am self-taught in the field of cybersecurity and passionately learning about system and network protection.
                    <br/><br/>
                    I currently work as an electrician, but I am constantly expanding my knowledge of ethical hacking and security technologies. I am always open to new challenges and self-improvement. My goal is to one day work professionally in the field of cybersecurity and identify vulnerabilities.</p>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.button}>
                </a>
                   <div style={{ marginTop: '0.2rem' }}>
    <Button />
  </div>
        </div> 
               
            </div>
            
            <div className={styles['container-2']}>
                <img src={hacker} className={styles.hacker}/>
            </div>
        </div>
            </div>
        </>
    )
}
export default AboutMe;
