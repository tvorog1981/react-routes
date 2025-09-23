import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ShowToDo.module.css";
import Button from "../../UI/Button/Button";
import { useNavigate } from "react-router-dom";
function ShowToDo() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [todo, setTodo] = useState({});
  useEffect(() => {
    const url = `http://localhost:3175/todos/${id}`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((data) => data.json())
      .then((d) => {
        console.log(d);
        setTodo(d);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, []);
  const backTo = () => {
    navigate(-1);
  };
  return (
    <div className={styles.todoMain}>
      <div className={styles.content}>
        <div className={styles.todoShow}>Автор: {todo.author}</div>
        <div className={styles.author}>Дело: {todo.todo}</div>
        <div className={styles.complited}>
          Результат: {todo.complited ? "Завершено" : "Не завершено"}
        </div>
        <Button className={styles.btn} onClick={backTo}>
          Назад
        </Button>
      </div>
    </div>
  );
}

export default ShowToDo;
