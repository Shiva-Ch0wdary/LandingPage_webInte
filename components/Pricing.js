import styles from '../styles/Pricing.module.css';

export default function Pricing() {
  return (
    <section id="pricing" className={styles["pricing-section"]}>
      <h1>Choose Your Plan</h1>
      <div className={styles["pricing"]}>
        <div className={styles["plan"]}>
          <h3>Basic</h3>
          <p>Free</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button className={styles["btn"]}>Select</button>
        </div>
        <div className={styles["plan"]}>
          <h3>Pro</h3>
          <p>$9.99/month</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
          <button className={styles["btn"]}>Select</button>
        </div>
        <div className={styles["plan"]}>
          <h3>Enterprise</h3>
          <p>$29.99/month</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
          </ul>
          <button className={styles["btn"]}>Select</button>
        </div>
      </div>
    </section>
  );
}
