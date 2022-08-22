import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = ( categoria, peticiones ) => {

  const [gifs, setGifs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImage = async() => {
    const respuesta = await getGifs( categoria, peticiones )
    setGifs( [...gifs, ...respuesta] )
    setIsLoading( false )
  }

  useEffect( () => {
    getImage();
  }, [peticiones])
  
  
  return{
    gifs,
    isLoading
  }
}
