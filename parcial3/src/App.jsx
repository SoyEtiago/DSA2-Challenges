import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import {Routes, Route, Link} from "react-router-dom"
import { TodoApp } from './pages/TodoApp';
import MultipleCustomHooks from './pages/MultipleCustomHooks';


function App() {
  return (
    <>
      <h1>Parcial 3 EDyA2</h1>
      <br />

      <div className='container d-flex gap-2 m-2'>
        <Link className='p-5' to="/partea">Use Reducer Challenge</Link>
        <Link className='p-5' to="/parteb">Pokemon Challenge</Link>
      </div>

      <Routes>
        <Route path="/partea" element={<TodoApp/>}/>
        <Route path="/parteb" element={<MultipleCustomHooks/>}/>
      </Routes>
    </>
  )
}

export default App
