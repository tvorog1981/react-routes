import { useEffect, useState } from "react";
import styles from "./ListToDo.module.css";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";

const ListToDo = () => {
  const [todos, setTodos] = useState([]);
  const [fetchToServer, setFetchToServer] = useState(false);
  useEffect(() => {
    getDataTodos();
  }, [fetchToServer]);
  const deleteTodo = (id) => {
    setFetchToServer(!fetchToServer);
    const url = `http://localhost:3175/todos/${id}`;
    fetch(url, {
      method: "DELETE",
    });
  };
  const getDataTodos = () => {
    const url = `http://localhost:3175/todos`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((data) => data.json())
      .then((d) => setTodos(d));
  };

  return (
    <div className={styles.mainTodo}>
      {todos.map(({ id, author, todo, complited }) => {
        return (
          <div key={id} className={styles.todoItem}>
            <div className={styles.author}>{author}</div>
            <div className={styles.todo}>
              {complited ? (
                <span style={{ textDecoration: "line-through" }}>{todo}</span>
              ) : (
                <span>{todo}</span>
              )}
            </div>
            <Link to={`/update-todo/${id}`} className={styles.btnTodo}>
              Обновить
            </Link>
            <Link onClick={() => deleteTodo(id)} className={styles.btnTodo}>
              Удалить
            </Link>
            <Link to={`/showTodo/${id}`} className={styles.btnTodo}>
              Просмотр
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ListToDo;
