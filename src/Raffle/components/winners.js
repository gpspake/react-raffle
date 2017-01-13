import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as winnerActions from '../actions/winners';
import Contestants from './contestants';

class Winners extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
		const winnerList = this.props.winners.map((contestant, idx) => {
			return <li key={idx}>{contestant}</li>;
		});
		return (
			<div className="Winners">
				<Contestants addWinner={this.props.actions.addToWinners}/>
				<h2>Winners</h2>
				<ol>
					{winnerList}
				</ol>
			</div>
		);
	}
}
function mapStateToProps(state, props) {
	return {
		winners: state.winners
	};
}
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(winnerActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Winners);