import { Display, Pad} from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';


export const CalculatorApp = () => {
  return(
    <>
    <div>
      <h1>Calculator App</h1>
      <Display/>
      <Pad/>
    </div>      
    </>
  )
}