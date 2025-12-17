import React from 'react'
import { Link } from 'react-router-dom'

function Navbar()
{
    return(
        <div className="navbar">
        <nav>
            <Link to="/">HOME |  </Link>
            <Link to="/product">PRODUCT |  </Link>
            <Link to="/cart">CART |  </Link>
            <Link to="/contact">CONTACT</Link>
        </nav>
        </div>
    );
}
export default Navbar