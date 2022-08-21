import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifCard } from './GifCard'

export const GifGrid = ({ categoria }) => {

  const { gifs, isLoading } = useFetchGifs( categoria )

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
      <button className='verMas'>Ver Mas....</button>
    </div>
  )
}
