import './App.css';
import Button from './Components/Button';
import React, { useState } from 'react';
import axios from 'axios'

function App() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [carState, setCarState] = useState("Parado")
  
  const clickHandler = (command) => {
    let url = `https://api.thingspeak.com/update?api_key=EJQBXDWP1YIUJ0ET&field1=${command}`;
    axios.post(url)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    setTimeout(() => setIsDisabled(true), 1)
    switch(command){
      case 1:
        setCarState("Virando à Esquerda.");
        break;
      case 2:
        setCarState("Virando à Direita.");
        break;
      case 3:
        setCarState("Indo para traz.");
        break;
      case 4:
        setCarState("Indo para frente.");
        break;
        
    }
    setTimeout(() => setIsDisabled(false), 15000)
    setTimeout(() => setCarState("Parado"), 15000)
    
  }
  // 1 = esquerda
	// 2 = direita
	// 3 = pra frente
	// 4 = pra traz
  return (
    <div className="App">
      <div>
        <Button onClick={() => clickHandler(4)} disabled={isDisabled}>↑</Button>

      </div>
      <Button onClick={() => clickHandler(1)} disabled={isDisabled}>↶</Button>
      <Button onClick={() => clickHandler(4)} disabled={isDisabled}>↓</Button>
      <Button onClick={() => clickHandler(2)} disabled={isDisabled}>↷</Button>
      <div>
        {carState}
      </div>
      
    </div>
  );
}

export default App;
