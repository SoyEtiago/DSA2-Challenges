import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TodoApp } from './TodoApp'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import {Provider} from "react-redux"
import { store } from './store/store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
)
