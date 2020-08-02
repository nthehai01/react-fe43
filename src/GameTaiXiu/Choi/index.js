import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Choi extends Component {
	render() {
		return (
			<div className="xi-ngau__play text-center">
				<button
					className="btn btn-success btn-lg"
					style={{
						fontSize: 30,
						backgroundColor: 'white',
						color: '#d83226',
						fontWeight: 'bold',
					}}
					onClick={() => {
						this.props.choi();
					}}
				>
					Chơi Game
				</button>
			</div>
		);
	}
}

const mapDispatchtoProps = (dispatch) => {
	return {
		choi: () => {
			const actions = {
				type: 'CHOI',
			};
			dispatch(actions);
		},
	};
};

export default connect(null, mapDispatchtoProps)(Choi);
