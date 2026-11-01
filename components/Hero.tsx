import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Управляйте задачами с легкостью</h1>
      <p className={styles.subtitle}>NoteFlow помогает фокусироваться на главном, а не на хаосе.</p>
      <button className={styles.cta}>Начать бесплатно</button>
    </section>
  );
}