import React, { useState } from "react";
import styles from "./todo.module.css";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Todo from "./todo";
import TodosFooter from "./todos-footer";

const Content = ({title, placeHolder, all, completed, uncompleted, message, direction='rtl',task,tasks,done,open,font}) => {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [status, setStatus] = useState("all");
  // const [completed, setCompleted] = useState(false);

  const onChangeHandler = (e) => {
    setTodoTitle(e.target.value);
  };

  const AddTodo = (e) => {
    e.preventDefault();
    let newTodoObject = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };
    setTodos([...todos, newTodoObject]);
    setTodoTitle("");
  };

  const deleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  const editTodo = (id) => {
    let newTodos = [...todos];
    newTodos.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
    setTodos(newTodos);
  };

  return (
    <form className={styles["content"]} onSubmit={AddTodo}>
      <div className={styles["content-header"]}>
        <div className={styles["content-header-add"]}>
          <button className={styles["add-btn"]} type="submit">
            <h3 className={styles["add"]}>{title}</h3>
            <FontAwesomeIcon icon={faAdd} className={styles["add-icon"]} />
          </button>
          <input
            type="text"
            id="new-item"
            value={todoTitle}
            onChange={onChangeHandler}
            className={styles["new-item"]}
            placeholder={placeHolder}
            style={{direction,fontFamily:font}}
          />
        </div>
        <div className={styles["content-header-mode"]}>
          <select className={styles["filter-todo"]} onChange={statusHandler}>
            <option value={"all"}>{all}</option>
            <option value={"completed"}>{completed}</option>
            <option value={"uncompleted"}>{uncompleted}</option>
          </select>
        </div>
      </div>
      {todos.length > 0 ? (
        <div className={styles["content-body"]}>
          {status === "all" &&
            todos.map((todo) => (
              <Todo
                title={todoTitle}
                key={todo.id}
                {...todo}
                onRemove={deleteHandler}
                todo={todo}
                onEdit={editTodo}
                checked={todo.completed}
              />
            ))}

          {status === "completed" &&
            todos
              .filter((todo) => todo.completed)
              .map((todo) => (
                <Todo
                  title={todoTitle}
                  key={todo.id}
                  {...todo}
                  onRemove={deleteHandler}
                  todo={todo}
                  onEdit={editTodo}
                  checked={todo.completed}
                />
              ))}
          {status === "uncompleted" &&
            todos
              .filter((todo) => !todo.completed)
              .map((todo) => (
                <Todo
                  title={todoTitle}
                  key={todo.id}
                  {...todo}
                  onRemove={deleteHandler}
                  todo={todo}
                  onEdit={editTodo}
                  checked={todo.completed}
                />
              ))}
        </div>
      ) : (
        <div className={styles["content-body"]}>
          <p className={styles["message"]}>{message}</p>
        </div>
      )}
      <TodosFooter
        all={todos.length}
        complete={todos.filter((todo) => todo.completed).length}
        uncomplete={
          todos.length - todos.filter((todo) => todo.completed).length
        }
        tasks={todos.length === 1 ? (task) : (tasks)}
        done={done}
        open={open}
      />
    </form>
  );
};

export default Content;
