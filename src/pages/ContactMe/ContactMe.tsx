import React, { useEffect } from 'react';
import styles from './ContactMe.module.scss';
import email from '../../assets/email.svg';
import shape from '../../assets/Group 7.svg'
import Footer from '../../components/Footer/Footer';
import Form from '../../components/ContactMeForm/Form';

const ContactMe: React.FC = () => {
      useEffect(() => {
            document.title = "Contact me";
        }, [])
    return (
        <>

            <div className={styles.wrapper}>
                <div className={styles['text-container']}>
                    <div className={styles['title-container']}>
                        <h1 className={styles['title']}> 
                            <span style={{ color: "#BA84CB" }}>#</span>contact-me
                        </h1>
                        <div className={styles.line}></div>
                    </div>
                    <p>I'm interested in any job opportunities. However, if you have other requests or questions, don't hesitate to contact me.</p>
                    <Form/>
                </div>

                <div className={styles['contact-box']}>
                    <h2>Message me here</h2>                
                    <div className={styles['contact-item']}>
                        <img src={email} alt="Email-1" />
                        <p>job@sabic.biz</p>
                    </div>
                    <div className={styles['contact-item']}>
                        <img src={email} alt="Email-2" />
                        <p>info@sabic.biz</p>
                    </div>
                </div>
            </div>
            <img src={shape} className={styles.circles}/>
            <Footer/>
        </>
    );
}

export default ContactMe;
