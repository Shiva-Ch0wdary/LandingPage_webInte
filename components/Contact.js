import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactDetails}>
        <h2>Contact Us</h2>
        <p>Email: info@uifry.com</p>
        <p>Phone: +1 234 567 890</p>
      </div>
      <div className={styles.contactLinks}>
        <h2>Useful Links</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Features</a></li>
        </ul>
      </div>
      <div className={styles.legalInfo}>
        <h2>Legal Information</h2>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
      </div>
      <div className={styles.newsletter}>
        <h2>Join Our Newsletter</h2>
        <input type="email" placeholder="Email" />
        <button className={styles.btn}>Submit</button>
      </div>
    </section>
  );
}
