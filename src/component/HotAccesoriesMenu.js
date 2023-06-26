import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/HotAccessories.css"


const HotAccesoriesMenu = () => {
  return (
    <div className='HotAccesoriesMenu'> 
    <Link className="HotAccesoriesLink" to="/music"> Music </Link>
    <Link className="HotAccesoriesLink" to="/SmartDevice"> SmartDevice </Link>
    <Link className="HotAccesoriesLink" to="/Home"> Home </Link>
    <Link className="HotAccesoriesLink" to="/Lifestyle"> Lifestyle </Link>
    <Link className="HotAccesoriesLink" to="/MobileAccessories"> Mobile Accessories</Link>
    
    
    </div>
  )
}

export default HotAccesoriesMenu