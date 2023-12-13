import React from 'react'

const Navigation = () => {
  return (
    <div>
    <nav>
     <div className="logo"><img src="./public/images/nike-logo-39975.png" alt="logo" /></div>
     <ul>
       <li><a href="#">Menu</a></li>
       <li><a href="#">Location</a></li>
       <li><a href="#">About</a></li>
       <li><a href="#">Contact</a></li>
     </ul>
     <button className='nav-btn'>Login</button>
    </nav>
   </div>
  )
}

export default Navigation
