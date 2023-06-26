
import React from 'react'
import "../styles/Starproduct.css"

const StarProduct = ({starProduct}) => {
  return (
    <div className='starproduct'>
      <div> <a href={starProduct[0].url}><img src={starProduct[0].image} alt='Ist product'/></a></div>
      <div>
      <a href={starProduct[1].url}><img src={starProduct[1].image} alt='Ist product'/></a>
      <a href={starProduct[2].url}><img src={starProduct[2].image} alt='Ist product'/></a>
      <a href={starProduct[3].url}><img src={starProduct[3].image} alt='Ist product'/></a>
         
      </div>

     
    
    
    
    </div>
  )
}

export default StarProduct