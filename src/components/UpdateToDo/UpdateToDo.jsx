import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./UpdateToDo.module.css";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
const UpdateToDo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState({});
  const getTodoToServer = () => {
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
  };
  const setTodoData = (e) => {
    if (e.target.name === "author") {
      setTodo({ ...todo, author: e.target.value });
    }
    if (e.target.name === "todo") {
      setTodo({ ...todo, todo: e.target.value });
    }
    if (e.target.name === "complited") {
      console.log(e.target.value);
      setTodo({ ...todo, complited: !todo.complited });
    }
  };
  const updateData = (id) => {
    console.log(todo);
    console.log(id);
    const url = `http://localhost:3175/todos/${id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        complited: todo.complited,
        author: todo.author,
        todo: todo.todo,
      }),
    }).then((d) => {
      if (d.ok) {
        navigate("/list");
      }
    });
  };
  useEffect(() => {
    getTodoToServer();
  }, []);
  return (
    <div className={styles.updateTodo}>
      <div className={styles.content}>
        <div>
          {" "}
          Автор:{" "}
          <Input value={todo.author} name="author" onChange={setTodoData} />
        </div>
        <div>
          Задача :
          <Input value={todo.todo} name="todo" onChange={setTodoData} />
        </div>
        <div>
          Завершено:{" "}
          <input
            type="checkbox"
            checked={todo.complited}
            name="complited"
            onChange={setTodoData}
          />
        </div>
        <div style={{ marginTop: "2rem" }}>
          {" "}
          <Button onClick={() => navigate(-1)} style={{ marginRight: "20px" }}>
            Назад
          </Button>
          <Button onClick={() => updateData(todo.id)}>Обновить</Button>
        </div>
      </div>
    </div>
  );
};
export default UpdateToDo;
