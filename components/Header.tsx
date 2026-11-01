import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>NoteFlow</div>
      <nav className={styles.nav}>
        <a href="#">Возможности</a>
        <a href="#">Тарифы</a>
        <a href="#">Войти</a>
      </nav>
    </header>
  );
}