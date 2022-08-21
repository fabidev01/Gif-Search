import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = ( categoria ) => {

  const [gifs, setGifs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImage = async() => {
    const respuesta = await getGifs( categoria )
    setGifs( respuesta )
    setIsLoading( false )
  }

  useEffect( () => {
    getImage();
  }, [])
  
  
  return{
    gifs,
    isLoading
  }
}
