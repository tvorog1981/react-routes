import styles from "./NotFound.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";
const NotFound = () => {
  const navigate = useNavigate();
  const notfound = {
    title: "Ты попал сюда зачем",
    body: "Поищи нормальные ссылки на страницы, а не эксперементируй",
  };
  return (
    <div className={styles.notfound}>
      <div className={styles.content}>
        <div className={styles.title}>{notfound.title}</div>
        <div className={styles.body}>{notfound.body}</div>
        <Button onClick={() => navigate("/")} style={{ marginTop: "2rem" }}>
          На главную
        </Button>
      </div>
    </div>
  );
};
export default NotFound;
