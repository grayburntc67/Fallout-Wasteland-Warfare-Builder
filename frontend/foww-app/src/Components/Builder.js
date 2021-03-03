import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Filterbar from './Filterbar'
import cardImg from '../images/default.png'

var activeIndex = -1;
var key = 0;

//*************************TEST DATA************************
var units = [
    {
        "listIndex": null,
        "name": 'Paladin Danse',
        "faction": 'Brotherhood of Steel',
        "cost": 118,
        "bmCost": 118,
        "card": 'danse.png'
    },
    {
        "listIndex": null,
        "name": 'Knight',
        "faction": 'Brotherhood of Steel',
        "cost": 65,
        "bmCost": 65,
        "card": 'knight.png'
    }
];

var items =[
    {
        "listIndex": null,
        "name": "Laser Rifle",
        "type": "rifle",
        "category": "high tech",
        "cost": 30,
        "bmCost": 30,
        "card": "laserrifle.png"
    },
    {
        "listIndex": null,
        "name": "10mm Pistol",
        "type": "pistol",
        "category": "advanced",
        "cost": 6,
        "bmCost": 6,
        "card": "10mmpistol.png"
    },
    {
        "listIndex": null,
        "name": "Super Sledge",
        "type": "melee",
        "category": "high tech",
        "cost": 30,
        "bmCost": 30,
        "card": "supersledge.png"
    },
    {
        "listIndex": null,
        "name": "T-60 Power Armor",
        "type": "power armor",
        "category": "high tech",
        "cost": 70,
        "bmCost": 70,
        "card": "t60.png"
    },
];



//*******************END TEST DATA******************************

class Builder extends Component{
    state = {
        listUnits: units.map((unit) =>
        <div key={unit.name} className='item'>
            <span className="pointer" onClick={() => this.displayCard(unit.card)}>{unit.name} ({unit.cost})</span>
            <span className='rightButton align-middle' onClick={() => this.addUnit(unit)}>Add</span>
        </div>),

        listItems: items.map((item) =>
        <div key={item.name} className="item">
            <span className="pointer" onClick={() => this.displayCard(item.card)}>{item.name} ({item.cost})</span>
            <span className='rightButton align-middle' onClick={() => this.addItem(item)}>Add</span>
        </div>),

        playerList: [],
        listPrice: 0
    };

    addUnit(unit){
        var newUnit = {
            "listIndex": this.state.playerList.length,
            "name": unit.name,
            "faction": unit.faction,
            "cost": unit.cost,
            "bmCost": unit.bmCost,
            "items": [],
            "card": unit.card
        };

        this.state.playerList.push(newUnit);
        this.setState({
            listPrice: this.state.listPrice+unit.cost
        });
    }
    
    addItem(item){
        var newItem = {
            "listIndex": this.state.playerList[activeIndex].items.length,
            "name": item.name,
            "cost": item.cost,
            "bmCost": item.bmCost,
            "card": item.card
        };
    
        var newList = this.state.playerList.slice();
        newList[activeIndex].items.push(newItem);
        newList[activeIndex].cost += item.cost;
        newList[activeIndex].bmCost += item.bmCost;
        this.setState({playerList: newList});
        this.setState({listPrice: this.state.listPrice+item.cost});
    }
    
    displayCard(cardName){
        import("../images/" + cardName).then(card => document.getElementById("card").setAttribute("src", card.default));
    }
    
    removeUnit(index){
        var newList = this.state.playerList.slice();
        this.setState({listPrice: this.state.listPrice-newList[index].cost});
        newList.splice(index,1);
    
        for(var i=0; i<newList.length; i++)
            newList[i].listIndex = i;
            
        this.setState({playerList: newList});
        this.displayUnits();
    }
    
    removeItem(unitIndex, itemIndex){
        var newList = this.state.playerList.slice();
        newList[unitIndex].cost -=  newList[unitIndex].items[itemIndex].cost;
        newList[unitIndex].bmCost -=  newList[unitIndex].items[itemIndex].bmCost;
        this.setState({listPrice: this.state.listPrice-newList[unitIndex].items[itemIndex].cost});
        newList[unitIndex].items.splice(itemIndex,1);
    
        for(var i=0; i<newList[unitIndex].items.length; i++)
            newList[unitIndex].items[i].listIndex = i;
            
        this.setState({playerList: newList});
    }
    
    //changes the leftmost grid to show units instead of items
    //deactivates the "active" unit
    displayUnits(){
        activeIndex = -1;
        ReactDOM.render(this.state.listUnits, document.getElementById("optionsList"));
    }
    
    //determines the "active" unit that items will be added to
    //changes the leftmost grid section to show items instead of units
    displayItems(unitIndex){
        activeIndex = unitIndex;
    
        var itemOptions = 
        <div>
            <div className="item">
                <span>Selecting Items for {this.state.playerList[activeIndex].name}:</span>
                <span className="rightButton" onClick={() => this.displayUnits()}>X</span>
            </div>
            {this.state.listItems}
        </div>;
        
        ReactDOM.render(itemOptions, document.getElementById("optionsList"));
    }

    render(){
        return(
            <div id="test">
                <Filterbar cost={this.state.listPrice}/>
                <div className="builderContainer">
                    <div className="gridItem" id="optionsList">
                        {this.state.listUnits}
                    </div>
                    <div className="gridItem">
                        {
                            this.state.playerList.map((unit) =>
                            <div key={key++} className='item'>
                                <span className="pointer" onClick={() => this.displayCard(unit.card)}>{unit.name} ({unit.cost})</span>
                                <span className='rightButton' onClick={() => this.removeUnit(unit.listIndex)}>X</span>
                                {
                                    unit.items.map((item) =>
                                        <div key={key++}>
                                            <span className="font-weight-normal ml-4 pointer" onClick={() => this.displayCard(item.card)}>{item.name} ({item.cost})</span>
                                            <span className="font-weight-normal rightButton" onClick={() => this.removeItem(unit.listIndex, item.listIndex)}>X</span>
                                        </div>
                                    )
                                }
                                <span className="font-weight-normal ml-4 pointer upgradeButton" onClick={() => this.displayItems(unit.listIndex)}>Add Items...</span>
                            </div>
                            )
                        }
                    </div>
                    <div className="gridItem">
                        <img src={cardImg} alt="Card View" className="unitCard" id="card"></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Builder;