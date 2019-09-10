import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

const colorArray = [
  '#ec7753',
  'Lightblue',
  'Pink',
  'Yellow',
  'Brown',
  'Magenta',
  '#536aec'
];

export default function App() {
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
            // ======================================================
            // Use multiple styles in one:
            // ------------------------------------------------------
            // with Object.assign:
            // style={Object.assign(buttonStyle, buttonMargin)}

            // with Spread operator:
            style={{ ...buttonStyle, ...buttonMargin }}
            // ======================================================
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
