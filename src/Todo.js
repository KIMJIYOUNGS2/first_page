import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import moment from "moment"; // 시간 모듈

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(moment().format("YYYY-MM-DD HH:mm:ss"));
  }, [time]);

  //   const time = moment().format("YYYY-MM-DD HH:mm:ss");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("onSubmit Click");

    setTodos((currentTodos) => [...currentTodos, todo]);
    setTodo("");

    console.log(todos);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <button>Add todo</button>
        {todos.map((item, index) => {
          // return <li key={index}>{item}</li>;
          // 역순으로 하는 것도 고민해보기
          return (
            <TodoItem
              key={index}
              text={item}
              time={time}
              index={index}
              total={todos.length}
              name="김인섭"
            />
          );
        })}
      </form>
    </div>
  );
}

export default Todo;
