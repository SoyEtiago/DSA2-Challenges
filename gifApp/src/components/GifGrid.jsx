import {GetGifs} from "../helpers/GetGifs"
import { useEffect, useState } from "react"
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {
  const [images, setImages] = useState([]);

  const getImages = async() => {
    const images = await GetGifs(category);
    console.log(images);
    setImages(images);
  }

  useEffect(() => {
    getImages();
  }, [category])

  return (
    <>
      <h3>{category}</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        
        {
          images.map((image, key) => {
            return <GifItem key={key} {...image}/>
          })
        }
      </div>
    </>
  )
}