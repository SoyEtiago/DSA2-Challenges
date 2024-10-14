import { TodoItem } from "./TodoItem";

export const TodoList = ({todos = []}) => {
  return (
      <ul className="list-group">
        {
          todos.map((todo, key) => {
            return <TodoItem data={todo} key={key} id={key}/>
          })
        }
      </ul>
  );
}