import './App.css';

const title = 'First App';
// Props recibe un objecto - puede manejar Destructuring assignment {title}
const FirstApp = ( props ) => {
  return (
    <>
    <h1> {props.title} </h1>
    <span>10</span>
    </>
  )
}

export default FirstApp;