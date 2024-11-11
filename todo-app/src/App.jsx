import { useEffect, useReducer, useRef } from "react"
import { TodoReducer } from "./components/TodoReducer"
import { TodoForm, TodoList, Title } from "./components"
import useTodo from "./hooks/useTodo";

export default function App() {
  const { todos, inputRef, addTodo, deleteTodo, toggleTodo } = useTodo();

  const handleNewTodo = (e) => {
    e.preventDefault();
    addTodo(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <>
      <Title total={todos.length} missing={todos.filter((todo) => todo.done == false).length}/>
      <div className="row">
        <div className="col-7">
        <TodoList 
            todos={todos} 
            deleteTodo={deleteTodo} 
            toggleDone={toggleTodo} 
          />
        </div>
        <div className="col-5">
          <TodoForm OnNewTodo={handleNewTodo} inputRef={inputRef}/>
        </div>
      </div>
    </>
  )
}