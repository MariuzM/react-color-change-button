import React from 'react';

export default function App() {
	// const colorArray = ['red', 'lightblue', 'pink', 'yellow', 'brown', 'magenta'];
	
const state = {
	color: 'ROSYBROWN'
}

	changeColor(e) {
    this.setState({
      color: e.target.value
    });
	}
	
	const stylesObj = {
		background: this.state.color
	};

  return (
    <div style={stylesObj} className="container">
      <div className="box">
        <input value={this.state.color} onChange={this.changeColor.bind(this)} />
      </div>
    </div>
  );
}
