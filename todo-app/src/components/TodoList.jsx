import { TodoItem } from "./TodoItem";

export const TodoList = ({todos = [], deleteTodo, toggleDone}) => {
  return (
      <ul className="list-group">
        {
          todos.map((todo, key) => {
            return <TodoItem data={todo} key={key} id={todo.id} deleteTodo={deleteTodo} toggleDone={toggleDone}/>
          })
        }
      </ul>
  );
}