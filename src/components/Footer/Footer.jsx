import styles from "./Footer.module.css";

const Footer = () => {
  const dev = {
    dev: "Smetankin Denis Nikolaevich",
    email: "smetankin.denis@ya.ru",
  };
  return (
    <div className={styles.footer}>
      <div>Разработчик: {dev.dev}</div>
      <div>Email: {dev.email}</div>
    </div>
  );
};
export default Footer;
