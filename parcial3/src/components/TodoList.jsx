import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
      <ul className="list-group">
        {
          todos.map((todo, key) => {
            return <TodoItem key={key} data={todo} id={todo.id}/>
          })
        }
      </ul>
  );
}