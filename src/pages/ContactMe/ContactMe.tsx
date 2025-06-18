import styles from './ContactMe.module.scss';
import "../../utils/container.scss";
import email from '/assets/Email1.svg';
import shape from '/assets/Group 7.svg'
import Footer from '../../components/Footer/Footer';
import Form from '../../components/ContactMeForm/Form';
import { Helmet } from "react-helmet"

function ContactMe(){
   return (
        <>
            <Helmet>
  <title>Contact Me | Sabic Biz</title>
  <meta name="description" content="Reach out via the contact form or connect through email. Let's secure your work!" />
  <meta property="og:title" content="Contact Me | Sabic Biz" />
  <meta property="og:description" content="Looking for a developer or collaborator? Get in touch with Sabic here." />
  <meta property="og:url" content="https://sabic.biz/contact-me" />
            </Helmet>

            <div className='page-container' style={{flexDirection: 'column'}}>
            <div className={styles.wrapper}>
                <div className={styles['container-1']}>
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
                </div>
                <div className={styles['container-2']}>
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
            </div>
            <img src={shape} className={styles.circles}/>
            <Footer/>
        </div>
            
        </>
    );
}

export default ContactMe;
