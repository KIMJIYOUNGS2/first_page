import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (event) => {
    console.log(event.target.value);
    setTodo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("onSubmit Click");

    setTodos((currentTodos) => [todo, ...currentTodos]);
    setTodo("");

    console.log(todos);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          placeholder="할 일을 추가하세요."
        />
        <button>Add todo</button>
        {todos.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </form>
    </div>
  );
}

export default Todo;
