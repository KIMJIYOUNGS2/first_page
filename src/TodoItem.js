import styels from "./TodoItem.module.css";
import moment from "moment"; // 시간 모듈
import { useState } from "react";

// function TodoItem(props) {
function TodoItem({ text, index, name }) {
  //   const [time, setTime] = useState(""); // inifite loop
  const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");

  return (
    <div className={styels.todoItem}>
      <h3>
        {name} {index + 1}번째 todo list 입니다.
      </h3>
      <li>{text}</li>
      <p>작성한 시간: {nowTime}</p>
    </div>
  );
}

export default TodoItem;
