import { useState } from 'react';
import styles from '../styles/testimonials.module.css';

const reviews = [
  {
    title: 'Testimonial 1',
    content: 'Amazing app!',
    name: 'John Doe',
    image: '/assets/profile1.png',
  },
  {
    title: 'Testimonial 2',
    content: 'I love using this app for my finances.',
    name: 'Jane Smith',
    image: '/assets/profile2.png',
  },
  {
    title: 'Testimonial 3',
    content: 'Highly recommend to everyone.',
    name: 'Michael Brown',
    image: '/assets/profile3.png',
  },
];

export default function Testimonials() {
  const [currentReview, setCurrentReview] = useState(0);

  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2>TESTIMONIALS</h2>
      <h1>Our Lovely Clients</h1>
      <div className={styles.testimonial}>
        <div className={styles.testimonialImage}>
          <img src={reviews[currentReview].image} alt={reviews[currentReview].name} />
        </div>
        <h2>{reviews[currentReview].title}</h2>
        <p>{reviews[currentReview].content}</p>
        <h3>{reviews[currentReview].name}</h3>
        <div className={styles.navigation}>
          <button onClick={() => setCurrentReview((currentReview + reviews.length - 1) % reviews.length)}>Previous</button>
          <button onClick={() => setCurrentReview((currentReview + 1) % reviews.length)}>Next</button>
        </div>
      </div>
    </section>
  );
}
