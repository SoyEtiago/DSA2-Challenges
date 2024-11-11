import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  // Obtener tareas en tiempo real
  useEffect(() => {
    const q = query(collection(db, 'todos'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const todosArray = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setTodos(todosArray);
    });
    return () => unsubscribe();
  }, []);

  // Agregar tarea
  const addTodo = async (e) => {
    e.preventDefault();
    if (todo.trim()) {
      await addDoc(collection(db, 'todos'), {
        text: todo,
        createdAt: new Date(),
      });
      setTodo('');
    }
  };

  return (
    <div className="app-container">
      <h1>Lista de Tareas</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Escribe una nueva tarea..."
        />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {todos.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
