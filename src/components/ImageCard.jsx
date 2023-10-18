const ImageCard = ({ id, title, key }) => {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <a href='#' className='card-link'>
          {id}
        </a>
        <a href='#' className='card-link'>
          {key}
        </a>
      </div>
    </div>
  )
}
export default ImageCard
