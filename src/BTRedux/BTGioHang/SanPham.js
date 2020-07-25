import React, { Component } from 'react';
import { connect } from 'react-redux';

class SanPham extends Component {
	render() {
		let { sanPham } = this.props;

		return (
			<div className="card">
				<img
					className="card-img-top"
					src={sanPham.hinhAnh}
					alt="asdsad"
				/>
				<div className="card-body">
					<h4 className="card-title">{sanPham.tenSP}</h4>
					<button
						className="btn btn-success"
						onClick={() => {
							this.props.xemChiTiet(sanPham);
						}}
					>
						Chi tiết
					</button>
					<button
						type="button"
						className="btn btn-danger"
						onClick={() => {}}
					>
						Mua
					</button>
				</div>
			</div>
		);
	}
}

// get callback value from store and push to redux
const mapDispatchtoProps = (dispatch) => {
	return {
		xemChiTiet: (sanPham) => {
			// define 1 props for this component as 1 function
			// use dispatch function of redux and push to all reducers

			// use dispatch function from the return of redux => push data to reducers then handle
			const action = {
				type: 'XEM_CHI_TIET', // compulsory value
				sanPham,
			};
			dispatch(action); //send to reducer
		},
	};
};

export default connect(null, mapDispatchtoProps)(SanPham);
