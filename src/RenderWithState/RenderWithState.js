import React, { Component } from 'react';

export default class RenderWithState extends Component {
	//this.state: Thuộc tính chứa những giá trị thay đổi khi người dùng thao tác trên giao diện. Đây là thuộc tính có sẵn của component
	state = {
		isLogin: false,
	};
	userName = 'khai';

	renderContent = () => {
		if (this.state.isLogin) {
			return <p>hello {this.userName}</p>;
		}
		return (
			<button
				onClick={() => {
					this.login();
				}}
			>
				Đăng nhập
			</button>
		);
	};

	login = () => {
		//Phương thức this.setState là 1 phương thức có sẵn của component làm 2 nhiệm vụ, 1 là thay đổi giá trị state, 2 là gọi this.render lại giao diện.
		//this.setState là 1 phương thức bất đồng bộ
		this.setState(
			{
				isLogin: true,
			},
			() => {
				console.log(this.state);
			}
		);
	};

	render() {
		return <div>{this.renderContent()}</div>;
	}
}
