import React from 'react';
import './App.css';

export default function App() {
  const colorArray = ['Red', 'Lightblue', 'Pink', 'Yellow', 'Brown', 'Magenta'];
  const [set, setSet] = React.useState(colorArray[1]);
  const stylesObj = { background: set };

  return (
    <div style={stylesObj} className="container">
      <button onClick={() => setSet(colorArray[3])}>{colorArray[3]}</button>
      <button onClick={() => setSet(colorArray[2])}>{colorArray[2]}</button>
    </div>
  );
}
