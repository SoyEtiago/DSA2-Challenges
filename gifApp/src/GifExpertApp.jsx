import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Zodiac']);

  const onAddCategory = (category) => {
    setCategories(list => [...list, category]);
  }

  return (
    <>
    <div className="container text-center">
      <div className="row">
      <h1 className="col">Gif Expert</h1>
      </div>
      <div className="row">
        <AddCategory onAddCategory={onAddCategory} className="col"/>
      </div>      
      <div className="container-fluid">
        {
          categories.map(
            (category, key) => {
              return <GifGrid category={category} key={key} className="col-auto"/>
            }
          )
        }
      </div>
    </div>
    </>
  )

}