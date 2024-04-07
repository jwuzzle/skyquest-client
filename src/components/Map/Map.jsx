import React from 'react'
import { Component, useState } from 'react'
import USAMap from 'react-usa-map'


/* class Map extends Component { */

  const Map = () => {

  const [stateColor, setStateColor] = useState('white');

    const handleClick = (event) => {
      // Handle click event
      console.log(`Clicked on state: ${event.currentTarget.getAttribute('name')}`);
     };
    
     const handleMouseEnter = (event) => {
      // Handle mouse enter event
      console.log(`Mouse entered state: ${event.currentTarget.getAttribute('name')}`);
     };
    
     const handleMouseLeave = () => {
      // Handle mouse leave event
      console.log('Mouse left a state');
     };
  
  

  /* const statesCustomConfig = () => {
    //highlight with color inside of map

    return {
      "NJ": {
        fill: "navy",
        clickHandler:(event) => console.log("new jersey")
      }
    }
  } */


 return(
  
    <div>
    <USAMap 
    /* customize={statesCustomConfig()} */
    onClick={handleClick}
    onUSAStateMouseEnter={handleMouseEnter}
    onUSAStateMouseLeave={handleMouseLeave}
    showStateNameOnHover={true}
    USAStateOnHoverColor="yellow"
    />
    <button onClick={handleClick}>Click here</button>
</div>
  )
}

export default Map