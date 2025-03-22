import React, { useEffect } from 'react'
import styles from './AboutMe.module.scss'
import shape1 from '../../assets/Group 6.svg'
import hacker from '../../assets/hacker.svg'
import shape2 from '../../assets/Group 7.svg'
import button from '../../assets/button.svg'


const AboutMe: React.FC = () =>  {
      useEffect(() => {
            document.title = "About Me";
        }, [])
    return(
        <>
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
                    <img src={button} className={styles['buttom-img']}/>
                </a>
                
            </div> 
               
            </div>
            
            <div className={styles['container-2']}>
                <img src={hacker} className={styles.hacker}/>
                <img src={shape2} className={styles.circles}/>
            </div>
        </div>
        </>
    )
}
export default AboutMe;