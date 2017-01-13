import React, { Component } from 'react';

class Contestants extends Component {
	constructor(props) {
		super(props);
		this.onAddPersonToWinners = this.onAddPersonToWinners.bind(this);
		this.state = {
			contestants: [
				'dave',
				'mary',
				'john'
			]
		}
	}
	onAddPersonToWinners(contestant) {
		console.log(contestant);
		this.props.addWinner(contestant);
	}
	render() {
		const contestants = this.state.contestants.map((contestant, idx) => {
			return <li key={idx}><button onClick={() => this.onAddPersonToWinners(contestant)}>[+]</button>{contestant}</li>
		});
		return (
			<div>
				<h2>Contestants:</h2>
				<ul>
					{contestants}
				</ul>
			</div>
		);
	}
}
export default Contestants;