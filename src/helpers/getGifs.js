
export const getGifs = async( categoria ) => {
  

  const respuesta = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=oG952BeEIXJ1pwRUBTAULmhhWTjhGget&q=${ categoria }&limit=10`)
  const { data } = await respuesta.json();
  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  return gifs;
}
