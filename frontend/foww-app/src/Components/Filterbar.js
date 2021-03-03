import React from 'react'

function Filterbar(props){
    return(
        <div className="filterbar">
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
            <label className="label align-middle">Faction:</label>
            <select name="faction" id="faction" className="dropdown align-middle">
                <option value="All">All</option>
                <option value="Survivors">Survivors</option>
                <option value="Raiders">Raiders</option>
                <option value="SuperMutants">Super Mutants</option>
                <option value="Brotherhood of Steel">Brotherhood of Steel</option>
                <option value="Enclave">Enclave</option>
                <option value="Institute">Institute</option>
                <option value="Robots">Robots</option>
                <option value="Creatures">Creatures</option>
            </select>

            <input type="text" placeholder=" Search units.." className="search align-middle"></input>

            <span className="align-middle float-right">{props.cost} caps</span>
        </div>
    )
}

export default Filterbar