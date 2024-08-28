import PropTypes from 'prop-types';
import './App.css';

// Props recibe un objecto - puede manejar Destructuring assignment {title}
const FirstApp = ( {title, sum} ) => {
  return (
    <>
    <h1> {title} </h1>
    <span> {sum} </span>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  title: 'No hay titulo',
  sum: 300
}

export default FirstApp;