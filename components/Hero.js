// Hero.js

import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroText}>
        <h1>Make The Best Financial Decisions</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos laborum quisquam vitae in fugiat dio dolorum natus distinctio minus nemo velit.</p>
        <div className={styles.buttons}>
          <a href="#" className={`${styles.btn} ${styles.getStarted}`}>Get Started</a>
          <a href="#" className={`${styles.btn} ${styles.watchVideo}`}>
            <img src="/assets/watchVideo.svg" alt="Button Icon" />Watch Video
          </a>
        </div>
      </div>
      <div className={styles.heroImage1}>
        <img src="/assets/herosectionright.svg" alt="left Image" />
      </div>
      <div className={styles.heroImage2}>
        <img src="/assets/herosectionleft.svg" alt="right Image" />
      </div>
    </section>
  );
}
