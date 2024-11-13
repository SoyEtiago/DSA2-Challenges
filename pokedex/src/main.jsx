import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MultipleCustomHooks from './component/MultipleCustomHooks'
import {Provider} from "react-redux"
import './index.css'
import { store } from './store/store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <MultipleCustomHooks />
  </Provider>,
)
