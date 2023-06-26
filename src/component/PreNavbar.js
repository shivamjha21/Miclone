import React from 'react'
import "../styles/PreNavbar.css"

const PreNavbar = () => {
  return (
    <>
    <div className='preNav'>
    <div>
     <a href="https://www.mi.com/in/service/mihome/">Mi home</a> <span>|</span>
     <a href="https://www.mi.com/in/service/authorized_stores/">Mi Authorized</a><span>|</span>
     <a href="https://in.event.mi.com/in/questionnaire/mistore_franchise">Mi Store Franchise</a><span>|</span>
    

    </div>
    <div>
      <a href="https://www.mi.com/in/user">Signin</a><span>|</span>
      <a href="https://www.mi.com/in/user">Signup</a><span>|</span>
      <a href="https://m.store.mi.com/in/cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></a> <span>|</span>
     


    </div>
     


    </div>
    </>
  )
}

export default PreNavbar;