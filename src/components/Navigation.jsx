import React from 'react'
import "./Navbar.css"
const Navigation = () => {
  return (
    <div>
    <header>
    {/* <div className="brand-logo">
        <a href="#"><img src="images/logo.jpg" alt="Brand Logo" className="logo" /></a>
    </div> */}
    <div className="bname">
      <h1 className="Amazcart">Metacommerce360</h1>
    </div>

    <input type="checkbox" id="toggle-btn" />
    <label for="toggle-btn" className="show-menu-btn"><i className="fas fa-bars"></i></label>

    <nav>
        <ul className="navigation">
            <li><a href="/"><i className="fa-solid fa-house"></i> Home</a></li>
            <li><a href="/about" target="_blank"><i className="fab fa-blogger-b"></i> About</a></li>
            <li><a href="https://r3f-manoj-kumar.onrender.com" target="_blank"><i className="fas fa-question"></i> Support</a></li>
            <li><a href="mailto:manojmogul123@gmail.com?subject=feedback" target="_blank"><i className="fas fa-phone-alt"></i> Contact Us</a></li>
            <label for="toggle-btn" className="hide-menu-btn"><i className="fas fa-times"></i></label>
        </ul>
    </nav>
</header>
</div>
  )
}

export default Navigation