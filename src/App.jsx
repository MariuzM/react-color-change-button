import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

export default function App() {
  const colorArray = [
    '#ec7753',
    'Lightblue',
    'Pink',
    'Yellow',
    'Brown',
    'Magenta',
    '#536aec'
  ];
  const [set, setSet] = React.useState(colorArray[1]);
  const stylesObj = { background: set };
  const buttonMargin = { margin: '10px' };

  return (
    <div style={stylesObj} className="container">
      {Object.entries(colorArray).map(c => {
        const buttonStyle = { background: c[1] };
        return (
          <Button
            key={c[0]}
            style={Object.assign(buttonStyle, buttonMargin)}
            variant="contained"
            onClick={() => setSet(c[1])}
          >
            {c[1]}
          </Button>
        );
      })}
    </div>
  );
}
