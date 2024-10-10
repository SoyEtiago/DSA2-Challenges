import { useEffect, useState } from "react";
import { GetGifs } from "../helpers/GetGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);

  const getImages = async() => {
    const images = await GetGifs(category);
    console.log(images);
    setImages(images);
  }

  useEffect(() => {getImages()}, []);

  return {
    images: images,
    isLoading: false
  }
}