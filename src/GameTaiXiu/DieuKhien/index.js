import React, { Component } from 'react';
import { connect } from 'react-redux';

export class DieuKhien extends Component {
	renderDanhSachXucXac = () => {
		return this.props.xucXac.map((item, index) => {
			return (
				<span key={index}>
					<i
						className={item.classes}
						style={{ color: 'white', fontSize: 150 }}
					/>
				</span>
			);
		});
	};

	render() {
		const { xucXac } = this.props;

		return (
			<div className="xi-ngau__control row text-center mt-4">
				<div className="col-4">
					<button
						className="btn btn-lg rounded-circle"
						style={{ overflow: 'hidden' }}
						onClick={() => {
							this.props.chonTaiXiu(true);
						}}
					>
						<img src="./img/tai.PNG" alt="tai" />
					</button>
				</div>
				<div className="col-4 d-flex align-items-center justify-content-around">
					{this.renderDanhSachXucXac()}
				</div>
				<div className="col-4">
					<button
						className="btn btn-lg rounded-circle"
						style={{ overflow: 'hidden' }}
						onClick={() => {
							this.props.chonTaiXiu(false);
						}}
					>
						<img src="./img/xiu.PNG" alt="xiu" />
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		xucXac: state.GameTaiXiuReducer.xucXac,
	};
};

const mapDispatchtoProps = (dispatch) => {
	return {
		chonTaiXiu: (chonTaiXiu) => {
			const actions = {
				type: 'CHON_TAI_XIU',
				chonTaiXiu,
			};
			dispatch(actions);
		},
	};
};

export default connect(mapStateToProps, mapDispatchtoProps)(DieuKhien);
