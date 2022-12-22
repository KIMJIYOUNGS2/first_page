import styels from "./TodoItem.module.css";

// function TodoItem(props) {
function TodoItem({ text, index, name }) {
  return (
    <div className={styels.todoItem}>
      {/* <li>{(props.text, props.index)}</li> */}
      <h3>
        {name} {index + 1}번째 todo list 입니다.
      </h3>
      <li>{text}</li>
      <p>작성한 시간: </p>
    </div>
  );
}

export default TodoItem;
