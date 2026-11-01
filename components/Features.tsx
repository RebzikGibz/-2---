import styles from './Features.module.css';

const features = [
  { title: 'Быстро', text: 'Мгновенная синхронизация на всех устройствах.' },
  { title: 'Удобно', text: 'Интуитивный интерфейс, не требующий обучения.' },
  { title: 'Безопасно', text: 'Ваши данные зашифрованы и защищены.' },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <h2 className={styles.sectionTitle}>Почему мы?</h2>
      <div className={styles.grid}>
        {features.map((f, i) => (
          <div key={i} className={styles.card}>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}