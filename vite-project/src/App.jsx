import { useState } from 'react'
import './App.css'

function App() {
  const [categories, setCategories] = useState(['First Category', 'Second Category']);
  const [category, setCategory] = useState('');

  const handleSetCategory = (event) => {
    setCategory(event.target.value);
  }

  const handleAddCategory = () => {
    if(category.trim() != "") setCategories([...categories, category]);
    setCategory('');
  }
  return (
    <>
    <ol>
      {categories.map(
        (category, key) => {
          return <li key={key}>{category}</li>
        }
      )}
    </ol>
    <input type="text" value={category} onChange={handleSetCategory}/>
    <button onClick={handleAddCategory}>Add Categories</button>
    </>
  );
}

export default App
