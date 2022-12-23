import styels from "./TodoItem.module.css";
import { useState } from "react";

// function TodoItem(props) {
function TodoItem({ text, index, name, total, time }) {
  //   const [time, setTime] = useState(""); // inifite loop

  return (
    <div className={styels.todoItem}>
      <h3>
        {name} {total - index}번째 todo list 입니다.
      </h3>
      <li>{text}</li>
      <p>작성한 시간: {time}</p>
    </div>
  );
}

export default TodoItem;
