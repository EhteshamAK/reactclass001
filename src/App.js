import React from 'react';
import './App.css';

function App({name,age}) {
  return (
    <div className="nerd" >
    <strong> Hello {name} </strong>
    <br/>
    Mr {name}
    <h2>React Class 2</h2>
    <ol>
    <li> props </li>  
    <li> State </li>  
    <li> Hooks </li>  

    </ol>
    <ul> Context Api</ul>
    <ul> Reducer</ul>
   <strong> Ehtesham age is {age}</strong>
    </div>
  );
}

export default App;
