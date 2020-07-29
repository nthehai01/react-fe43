import React, { Component } from 'react';
import { connect } from 'react-redux';

export class DanhSachCuoc extends Component {
	renderDanhSachCuoc = (list) => {
		return list.map((item, index) => {
			return (
				<div className="card col-4" key={index}>
					<img
						className="card-img-top"
						src={item.hinhAnh}
						alt="Card cap"
						style={{ height: 200 }}
					/>
					<div className="card-body">
						<h5 className="card-title" />
						<div className="d-flex justify-content-around align-items-center">
							<button
								className="btn btn-info"
								onClick={() => {
									this.props.tangGiamMucCuoc(item.ma, false);
								}}
							>
								-
							</button>
							<span>${item.giaCuoc}</span>
							<button
								className="btn btn-info"
								onClick={() => {
									this.props.tangGiamMucCuoc(item.ma, true);
								}}
							>
								+
							</button>
						</div>
					</div>
				</div>
			);
		});
	};

	render() {
		const { danhSachCuoc } = this.props;

		return (
			<div className="bau-cua__chon">
				<div className="bau-cua__bang row">
					{this.renderDanhSachCuoc(danhSachCuoc)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		danhSachCuoc: state.GameBauCuaReducer.danhSachCuoc,
	};
};

const mapDispatchtoProps = (dispatch) => {
	return {
		// key is props of component, value is method that sends action to reducers
		tangGiamMucCuoc: (ma, tangGiam) => {
			const actions = {
				type: 'TANG_GIAM',
				ma: ma,
				tangGiam: tangGiam,
			};
			dispatch(actions);
		},
	};
};

export default connect(mapStateToProps, mapDispatchtoProps)(DanhSachCuoc);
