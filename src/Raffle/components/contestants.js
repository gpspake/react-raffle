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
	onAddPersonToWinners(item) {
		console.log(item);
		this.props.addWinner(item);
	}
	render() {
		const contestants = this.state.contestants.map((item, idx) => {
			return <li key={idx}><button onClick={() => this.onAddPersonToWinners(item)}>[+]</button>{item}</li>
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