import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 NoteFlow. Все права защищены.</p>
      <div className={styles.links}>
        <a href="#">Политика конфиденциальности</a>
        <a href="#">Контакты</a>
      </div>
    </footer>
  );
}