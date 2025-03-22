import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

function Navbar() { 
    const links = [
        { to: "/", label: "home" },
        { to: "/projects", label: "projects" },
        { to: "/about-me", label: "about-me" },
        { to: "/blog", label: "blog" },
        { to: "/contact-me", label: "contact-me" }
    ];

    return (
        <div className={styles.container}>
            {links.map((link, index) => (
                <p key={index}>
                    <Link to={link.to} className={styles.link}>
                        <span style={{ color: "#BA84CB" }}>#</span>{link.label}
                    </Link>
                </p>
            ))}
        </div>
    );
}

export default Navbar;
