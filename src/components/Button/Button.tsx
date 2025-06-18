import styles from './Button.module.scss'
function Button() {
    return (
        <button className={styles.button}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#BA84CB')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'black')}
        >
        Resume
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        >
        <path d="M12 3v12m0 0l-4-4m4 4l4-4" />
        <path d="M4 17h16" />
        </svg>
        </button>
    );
}

export default Button;
