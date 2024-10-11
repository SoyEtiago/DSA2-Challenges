import { useEffect, useState } from 'react';
import './App.css'
import useFetch from './Hooks/useFetch'

function App() {

  const API = "https://api.giphy.com/v1/gifs/search?api_key=moZznorHYNukeAr405oLywKqmcc3f6n2&q=cats&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"
  
  const {adata, isLoading, hasError} = useFetch(API);

  const [data, setData] = useState(null)

  const toJson = async () => {

    setData(await adata.json());

  }
  
  useEffect(() => {

    if(isLoading === false) {

      toJson()

    }
    

  }, [adata])
  
  return (
    <>
      {console.log(data)}
    </>
  )
}

export default App
