import React, { useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifCard } from './GifCard'

export const GifGrid = ({ categoria }) => {

  const [peticiones, setPeticiones] = useState(0)
  const { gifs, isLoading } = useFetchGifs( categoria, peticiones )

  const onAddGifs= () => {
    setPeticiones(peticiones + 10);

  }
  console.log(gifs)
  return (
    <div className="Gif-grid">
      <h1 className="categoria"> { categoria } </h1>
      <div className="gifGrid">
        {
          gifs.map( gif => 
            <GifCard
              key={ gif.id }
              {...gif}
            />
          )
        } 
      </div>
      <button 
        className='verMas'
        onClick={ onAddGifs }
      >Ver Mas....</button>
      <hr />
    </div>
  )
}
