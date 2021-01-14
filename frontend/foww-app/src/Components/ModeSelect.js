import React from 'react'
import { Link } from 'react-router-dom'
import freeBuildLogo from '../images/freebuild.png'
import battleModeLogo from '../images/battlemode.png'

function ModeSelect(){
    return(
        <div className="background">
            <div className="mainSelect">
                <Link to="/freebuild">
                    <img src={freeBuildLogo} alt="free build"></img>
                    <p>Free Build</p>
                </Link>
                <Link to="/battlemode">
                    <img src={battleModeLogo} alt="battle mode"></img>
                    <p>Battle Mode</p>
                </Link>
            </div>
        </div>
    )
}

export default ModeSelect