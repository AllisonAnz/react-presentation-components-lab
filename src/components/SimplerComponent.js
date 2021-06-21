// Code SimplerComponent Here
//Specs: create a SimplerComp. 
// Should be "stateless functional"
// Should render a <div> to the page that contains the text "I'm just happy"
import React from 'react'

const SimplerComponent = props => <div onClick={props.handleClick}>I am just happy.</div>

export default SimplerComponent