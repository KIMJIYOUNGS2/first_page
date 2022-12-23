import "./App.css";
import Count from "./Count";
import Effect from "./Effect";
import Todo from "./Todo";
import Button from "./Button";
import BookList from "./BookList";
import Users from "./Users";

// 최상위 컴포넌트
function App() {
  return (
    <div>
      {/* <Count /> */}
      {/* <Effect /> */}
      {/* <Button text="첫 번째 버튼" work="" />
      <Button text="두 번째 버튼" work="" />
    <Button text="세 번째 버튼" work="true" /> */}
      <Todo />
      {/* <BookList /> */}
      {/* <Users /> */}
    </div>
  );
}

export default App;
