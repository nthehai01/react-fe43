import React, { Component } from 'react';
import { connect } from 'react-redux';

import DanhSachCuoc from './DanhSachCuoc';
import XucXac from './XucXac';

import './style.css';

export class GameBauCua extends Component {
	render() {
		const { tongTien } = this.props;

		return (
			<div>
				<div className="bau-cua">
					<div className="container">
						<div className="d-flex justify-content-between align-items-center">
							<div className="bau-cua__tien font-weight-bold">
								Tổng Tiền : ${tongTien}
							</div>
							<h2 className="text-center text-danger">Bầu Cua</h2>
							<div>
								<btn className="btn btn-info">Chơi Game</btn>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 col-lg-7">
								<DanhSachCuoc />
							</div>
							<div className="col-md-12 col-lg-5">
								<XucXac />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		tongTien: state.GameBauCuaReducer.tongTien,
	};
};

export default connect(mapStateToProps, null)(GameBauCua);
