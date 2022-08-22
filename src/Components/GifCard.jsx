
export const GifCard = ({ url, title }) => {


  return (
    <div className="gifCard animate__animated animate__pulse">
      <img src={ url } alt={ title } />
      <p className="title">{ title }</p>
    </div>
  )
}
