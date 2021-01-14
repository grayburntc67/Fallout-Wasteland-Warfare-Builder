import React from 'react'
import logo from '../images/falloutlogo.PNG'

function Header(){
    return(
        <header className="header">
            <img src={logo} alt="Fallout Logo" className="logo"></img>
            <span>Army Builder</span>
        </header>
    )
}

export default Header