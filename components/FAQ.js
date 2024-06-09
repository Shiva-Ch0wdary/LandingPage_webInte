import styles from '../styles/FAQ.module.css';

export default function FAQ() {
  return (
    <section id="faq" className={styles.faq}>
      <h1>Frequently Asked Questions</h1>
      <div className={styles['faq-grid']}>
        <div className={`${styles['faq-box']} ${styles['white-bg']}`}>
          <h3>The Best Financial Accounting App Ever!</h3>
          <p>Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Acoumsan, Ultricies. In Ultrices Malesuada Elit Mauris.</p>
        </div>
        <div className={`${styles['faq-box']} ${styles['red-bg']}`}>
          <h3>The Best Financial Accounting App Ever!</h3>
          <p>Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Acoumsan, Ultricies. In Ultrices Malesuada Elit Mauris.</p>
        </div>
        <div className={`${styles['faq-box']} ${styles['white-bg']}`}>
          <h3>The Best Financial Accounting App Ever!</h3>
          <p>Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Acoumsan, Ultricies. In Ultrices Malesuada Elit Mauris.</p>
        </div>
        <div className={`${styles['faq-box']} ${styles['red-bg']}`}>
          <h3>The Best Financial Accounting App Ever!</h3>
          <p>Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Acoumsan, Ultricies. In Ultrices Malesuada Elit Mauris.</p>
        </div>
        <div className={`${styles['faq-box']} ${styles['white-bg']}`}>
          <h3>The Best Financial Accounting App Ever!</h3>
          <p>Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Acoumsan, Ultricies. In Ultrices Malesuada Elit Mauris.</p>
        </div>
        <div className={`${styles['faq-box']} ${styles['red-bg']}`}>
          <h3>The Best Financial Accounting App Ever!</h3>
          <p>Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Acoumsan, Ultricies. In Ultrices Malesuada Elit Mauris.</p>
        </div>
      </div>
    </section>
  );
}
