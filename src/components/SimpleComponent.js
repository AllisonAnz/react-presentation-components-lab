// Code SimpleComponent Here
//specs: Create a SimpleComponent
// Should be decared as a class (instance of Comp.) so that it can carry state 
// Should have a state property called mood that default value of happy
// Should simply render its current mood state to the page in a div 
// Should implement a handleClick function that can serve as a cb to the <div>'s click event 
// When clicked, the comps mood should toggle between happy and sad states 
import React, { Component } from 'react';

class SimpleComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mood: 'happy'
        };
    }

    handleClick = () => {
        const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
        this.setState({ mood: newMood });
    }

    render() {
        return <div onClick={this.handleClick}>{this.state.mood}</div>;
    }
}

export default SimpleComponent;
