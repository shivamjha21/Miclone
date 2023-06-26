import React from 'react'
import Offer from "./Offer"
import "../styles/Offer.css"

export default function Offers({offer}) {
  return (
   <div className='offersection'>
   {offer.map((item,index)=> (
    <Offer key={item.image} index={index} src={item.image} link={item.url} />
   ))}

   </div>
  )
}
