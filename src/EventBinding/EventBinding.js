import React, { Component } from 'react';

export default class EventBinding extends Component {
	handleClick = () => {
		alert('hello fe 43');
	};

	showMessage = (mess) => {
		alert('Hello ' + mess);
	};

	render() {
		return (
			<div>
				{/*Cách 1: Truyền callback function xử lý sự kiện*/}
				<button onClick={this.handleClick}>click me!</button>
				<button onClick={this.showMessage.bind(this, 'cybersoft')}>
					showMess
				</button>

				<br />
				<hr />

				{/*Cách 2: dùng arrowfunction */}
				<button
					onClick={() => {
						this.handleClick();
					}}
				>
					click me
				</button>
				<button
					onClick={() => {
						this.showMessage('cybersoft');
					}}
				>
					ShowMess
				</button>
			</div>
		);
	}
}
