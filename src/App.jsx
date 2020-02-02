import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import './App.css'

const colorArray = ['#ec7753', 'Lightblue', 'Pink', 'Yellow', 'Brown', 'Magenta', '#536aec']

export default function App() {
  const [set, setSet] = useState(colorArray[Math.floor(Math.random() * colorArray.length)])

  // React.useEffect(() => {
  //   const onMouseMove = e => console.log(e);
  //   window.addEventListener('mousemove', onMouseMove);
  // });

  return (
    <>
      <div style={{ background: set }} className="container">
        <div>
          {Object.entries(colorArray).map(c => {
            // const buttonMargin = { margin: '10px' };
            // const buttonStyle = { background: c[1] };
            return (
              <Button
                key={c[0]}
                // ======================================================
                // Use multiple styles in one:
                // ======================================================
                // with Object.assign:
                // style={Object.assign(buttonStyle, buttonMargin)}
                // ------------------------------------------------------
                // with Spread operator:
                // style={{ ...buttonStyle, ...buttonMargin }}
                // ------------------------------------------------------
                // have styles inside style, thus no need for buttonMargin and buttonStyle:
                style={{ margin: '10px', background: c[1] }}
                // ========================================`==============
                variant="contained"
                onClick={() => setSet(c[1])}
              >
                {c[1]}
              </Button>
            )
          })}
        </div>
        <TextField
          label="Enter your color"
          // value={set}
          onChange={e => setSet(e.target.value)}
        />
      </div>
    </>
  )
}
