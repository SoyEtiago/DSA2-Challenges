import { useState } from "react";

export const AddCategory = ({onAddCategory}) => {
  const [inputValue, setInputValue] = useState('...');

  const onInputChange = (evt) => {
    setInputValue(evt.target.value);
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    onAddCategory(inputValue);
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar"
        value={inputValue}
        onChange={onInputChange}
        className="form-control d-inline-block"
      />
    </form>
  )

}