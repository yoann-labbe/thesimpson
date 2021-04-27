import React from 'react';
import './App.css';
import QuoteCard from './components/QuoteCard';
import {useState} from 'react';
import axios from 'axios';



function App() {
  const card = 
    {
      quote: "Ha ha!",
      character: "Nelson Muntz",
      image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
      characterDirection: "Left"
    };
  

  const [simpson, setSimpson] = useState(card);
  const getSimpson= () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setSimpson(data[0]);
      });
  };
  return (
    <div className="App">
      <QuoteCard simpson={simpson} />
      <button type="button" onClick={getSimpson}>Get quote simpson</button>
    </div>
      
    
  );
}

export default App;

