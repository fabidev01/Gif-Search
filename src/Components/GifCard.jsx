
export const GifCard = ({ url, title }) => {


  return (
    <div className="gifCard">
      <img src={ url } alt={ title } />
      <p className="title">{ title }</p>
    </div>
  )
}
