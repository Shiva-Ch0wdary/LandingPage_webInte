// Advantages.js

import styles from '../styles/Advantages.module.css';

export default function Advantages() {
  return (
    <section id="advantages" className={styles.advantagesSection}>
      <div className={styles.advantage}>
        <div className={styles.advantageDetails}>
          <h2 style={{ color: 'orange', fontSize: '2.2rem' }}>ADVANTAGES</h2>
          <h2 style={{ fontWeight: 'bold', fontSize: '3.2rem' }}>Why Choose Uifry?</h2>
          <div className={styles.logoHeading}>
            <h3>Clever Notifications</h3>
            <img src="/assets/advantageslogo1.svg" alt="Advantages logo" />
          </div>
          <p>
            Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Acomusan, Ultricies. In Ultrices Malesuada Elit 
            Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam 
            Suspendisse Sit Nunc, Gravida Eu. Leotus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
          </p>
        </div>
        <div className={styles.appScreenshot}>
          <img src="/assets/advantages1.svg" alt="App Screenshot" />
        </div>
      </div>
      <div className={styles.advantage}>
        <div className={styles.advantageDetails}>
          <div className={styles.logoHeading}>
            <img src="/assets/advantageslogo2.svg" alt="Advantages logo" />
            <h3>Fully Customizable</h3>
          </div>
          <p>
            Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Acomusan, Ultricies. In Ultrices Malesuada Elit 
            Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam 
            Suspendisse Sit Nunc, Gravida Eu. Leotus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
          </p>
        </div>
        <div className={styles.appScreenshot}>
          <img src="/assets/advantages2.svg" alt="App Screenshot" />
        </div>
      </div>
    </section>
  );
}
