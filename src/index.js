import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';
//currently the SimplerComp. receives one prop called handleClick
//which is currently undefined. 
//Rewrite this prop to perform an action
//Then, make sure SimplerComponent can trigger this action when clicked on
ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={() => alert("You clicked me!")} />
  </div>,
  document.getElementById('root')
);