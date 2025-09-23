import { useEffect, useState } from "react";
import Input from "../../UI/Input/Input";
import styles from "./AddToDo.module.css";
import Button from "../../UI/Button/Button";
import { useNavigate } from "react-router-dom";

const AddToDo = () => {
	const [todo, setToDo] = useState({ author: "", todo: "" });

	const navigate = useNavigate();
	const addTodo = (e) => {
		e.preventDefault();
		console.log(todo.author);
		if (todo.todo != "" && todo.author != "") {
			// setShowButton(true);
			const url = "http://localhost:3175/todos";
			fetch(url, {
				method: "POST",
				headers: {
					"Content-type": "application/json;charset=utf-8",
				},
				body: JSON.stringify({
					author: todo.author,
					todo: todo.todo,
					complited: false,
				}),
			});
			// setToDo(setToDo({ author: "", todo: "" }));
			return navigate("/list");
		}
	};
	return (
		<form
			className={styles.form}
			style={{ marginTop: "4rem", paddingTop: "2rem" }}
		>
			<div className={styles.input}>
				<span>
					{" "}
					СОЗДАТЕЛЬ:{" "}
					<Input
						onChange={(e) => setToDo({ ...todo, author: e.target.value })}
						value={todo.author}
						style={{ marginBottom: "16px" }}
					/>
				</span>
				<span>
					{" "}
					НАЗВАНИЕ:{" "}
					<Input
						onChange={(e) => setToDo({ ...todo, todo: e.target.value })}
						style={{ marginBottom: "16px" }}
						value={todo.todo}
					/>
				</span>

				<Button
					onClick={addTodo}
					style={{
						marginBottom: "16px",
						borderRadius: "13px",
						fontSize: "1.2rem",
						border: "none",
					}}
				>
					Добавить
				</Button>
			</div>
		</form>
	);
};

export default AddToDo;
