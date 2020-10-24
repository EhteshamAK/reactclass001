import React from 'react';
import './App.css';

function App({name}) {
  return (
    <div className="nerd" >
    <strong> Hello {name,age} </strong>
    Mr {name}
    <h2>React Class 2</h2>
    <ol>
      Props
    </ol>
    <ol>
      State
    </ol>
    <ol>
      Hooks
    </ol>
    <ul> Context Api</ul>
    <ul> Reducer</ul>
   <strong> Ehtesham age is {age}</strong>
    </div>
  );
}

export default App;
