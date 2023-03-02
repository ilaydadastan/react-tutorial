import React from 'react';
import './App.css';
import User from './components/User'

function ConsoleLog() {
    console.log('from App Module')
    
}
function App() {
  return (
    <div>
        <User name = "Ilayda" status = "online" method={ConsoleLog}/>
        <User name = "Ahmet Can" status = "offline" method={ConsoleLog}/>
        <User name = "Ayse" status = "busy" method={ConsoleLog}/>

    </div>
  );
}

export default App;
