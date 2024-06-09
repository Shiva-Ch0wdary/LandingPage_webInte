// Features.js

import styles from '../styles/Features.module.css';

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.featuresImage}>
        <img src="/assets/features.svg" alt="Features Image" />
      </div>
      <div className={styles.featuresText}>
        <h2 style={{ color: 'orange' }}>FEATURES</h2>
        <h1>Uifry Premium</h1>
        <ul>
          <li>
            <div className={styles.featureItem}>
              <img src="/assets/star.svg" alt="Star Image" />
              <div>
                <h2>Budgeting Intervals</h2>
                <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.featureItem}>
              <img src="/assets/wheel.svg" alt="Wheel Image" />
              <div>
                <h2>Budgeting Intervals</h2>
                <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.featureItem}>
              <img src="/assets/cube.svg" alt="Cube Image" />
              <div>
                <h2>Budgeting Intervals</h2>
                <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
