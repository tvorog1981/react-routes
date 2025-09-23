import styles from "./Main.module.css";
const Main = () => {
  const Present = {
    title: "Список дел",
    body: "Здесь вы можете вести свои ежедневные дела ",
    keyWords: "Заводить удалять помечать и т.д",
  };
  return (
    <div className={styles.container}>
      <div className={styles.present}>
        <h1 className={styles.title}> {Present.title}</h1>
        <h4 className={styles.body}>{Present.body}</h4>
        <h4 className={styles.keyWords}>{Present.keyWords}</h4>
      </div>
    </div>
  );
};

export default Main;
