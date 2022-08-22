import { useState } from 'react'
import { GifGrid } from './Components/GifGrid'
import { Input } from './Components/Input'
import { Titulo } from './Components/Titulo'


export const GifApp = () => {

  const [categorias, setCategorias] = useState(['ONE PUNCH'])

  const onNewCategory = ( categoria ) => {

    if( categorias.includes( categoria.toUpperCase() )) return;
    setCategorias( [categoria.toUpperCase(), ...categorias] );

  }
  

  return (
    <>
      {/* titulo */}
      <Titulo/>
      {/* input */}
      <Input onNewCategory={onNewCategory} />
      {/* gifgrid */}
      {
        categorias.map(categoria => (
          <GifGrid 
            categoria={ categoria }
            key={ categoria }
          />
        ))
      }
        {/* gifcard */}
    </>
  )
}
