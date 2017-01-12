import React, { Component } from 'react';

class Raffle extends Component {

	handleClick(e) {
	e.preventDefault();
	console.log('The link was clicked.');
	}

	render() {
		return (
			<div className="raffle">
				<h1>Raffle</h1>
				<div onClick={this.handleClick} >Click Me</div>
			</div>
		);
	}
}

export default Raffle;
