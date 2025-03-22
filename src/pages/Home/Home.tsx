import React, { useEffect } from 'react';
import styles from './Home.module.scss';
import Line from '../../components/Line/Line'
import photo from '../../assets/Group 3.svg'
import quote from '../../assets/Group 4.svg'
import shape from '../../assets/Group 5.svg'

const Home: React.FC = () => {

    useEffect(() => {
        document.title = "Home";
    }, [])
    return(
        <>


        <Line/>
        <div className={styles['wrapper-1']}>
            <div className={styles['container-1']}>
                <h1> Hi, I am an <span style={{color:"#BA84CB"}}>electrical engineer</span> <br/>and self-taught learner in <span style={{color:"#BA84CB"}}>cybersecurity</span>
                </h1>
                <h2>
                    In search of solutions that push the boundaries of technology and security.
                </h2>
            </div>

            <div className={styles['container-2']}>
                <img src={photo}/>
            </div>
         </div>

        <div className={styles['wrapper-2']}>
            <div className={styles['container-3']}>
                <img src={quote}/>
                <img className={styles.shape} src={shape}/>
            </div>
           

        </div>


        </>
    )

  

}


export default Home;