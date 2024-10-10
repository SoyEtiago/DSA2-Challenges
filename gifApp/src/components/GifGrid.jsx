import {GetGifs} from "../helpers/GetGifs"
import { useEffect, useState } from "react"
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
  const {images, isLoading} = useFetchGifs(category);

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