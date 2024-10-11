import { useEffect, useState } from 'react';
import './App.css'
import useFetch from './Hooks/useFetch'

function App() {

  const API = "https://api.giphy.com/v1/gifs/search?api_key=dLI1g5cko27M2iCKKvHU2PfJaowGBTu2&q=${category}&limit=25&offset=0&rating=g&lang=ens"
  
  const {data, isLoading, hasError} = useFetch(API);

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
