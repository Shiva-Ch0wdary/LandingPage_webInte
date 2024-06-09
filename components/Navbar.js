import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/assets/fire.svg" alt="Fire Icon" /> uifry
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#" className={styles.active}>Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Features</a></li>
      </ul>
      <div className={styles.downloadButton}>
        <a href="#" className={styles.btn}>Download</a>
      </div>
    </nav>
  );
}
