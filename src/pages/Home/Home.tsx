import styles from './Home.module.scss';
import { Helmet } from 'react-helmet';
import "../../utils/container.scss";
import Line from '../../components/Line/Line'
import photo from '/assets/main.svg'
import quote from '/assets/Group 4.svg'

function Home() {
  return (
    <>
       <Helmet>
        <title>Home | Sabic Biz</title>
           <meta name="description" content="Welcome to the official portfolio of Sabic, an electrical engineer and cybersecurity specialist." />
           <meta property="og:title" content="Home | Sabic Biz" />
           <meta property="og:description" content="Explore my latest work, blog posts, and feel free to get in touch for collaboration." />
          <meta property="og:url" content="https://sabic.biz/" />
      </Helmet>
        <div className="page-container" style={{ flexDirection: 'column' }}>
<Line />

        <div className={styles['wrapper-1']}>
          <div className={styles['container-1']}>
            <h1>
              Hi, I am an <span style={{ color: "#BA84CB" }}>electrical engineer</span><br />
              and self-taught learner in <span style={{ color: "#BA84CB" }}>cybersecurity</span>
            </h1>
            <h2>
              In search of solutions that push the boundaries of technology and security.
            </h2>
          </div>

          <div className={styles['container-2']}>
            <img src={photo} alt="main illustration" />
          </div>
        </div>

        <div className={styles['wrapper-2']}>
          <div className={styles['container-3']}>
            <img src={quote} alt="quote" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

