import './ViewAllCreator.css'
import img1 from '../../NFTMarket/img/Path.svg'

function ViewAllCreator({title,more}) {
  return (
    <>
    <div className='SM-ViewAllCreator'>
        <p>{title}</p>
        <div className='see-more'>
        <p>{more}</p>
        <img className='Path' src={img1}/>
        </div>
        
    </div>
    </>
  )
}

export default ViewAllCreator