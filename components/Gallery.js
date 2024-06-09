import { useState } from 'react';
import styles from '../styles/Gallery.module.css';

const images = [
  '/assets/advantages1.svg',
  '/assets/advantages2.svg',
  '/assets/advantages1.svg',
];

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(null);

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.images}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Screenshot ${index + 1}`} onClick={() => setCurrentImage(src)} />
        ))}
      </div>
      {currentImage && (
        <div className={styles.lightbox} onClick={() => setCurrentImage(null)}>
          <img src={currentImage} alt="Large Screenshot" />
          <button onClick={() => setCurrentImage(null)}>Close</button>
        </div>
      )}
    </section>
  );
}
