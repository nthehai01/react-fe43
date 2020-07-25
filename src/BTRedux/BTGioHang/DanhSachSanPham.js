import React, { Component } from 'react';
import SanPham from './SanPham';

// import redux
import { connect } from 'react-redux';

class DanhSachSanPham extends Component {
	renderSanPham = () => {
		return this.props.mangSanPham.map((item, index) => {
			return (
				<div className="col-4" key={index}>
					<SanPham sanPham={item}></SanPham>
				</div>
			);
		});
	};

	render() {
		return (
			<div>
				<h3>Danh Sach San Pham</h3>
				<div className="row">{this.renderSanPham()}</div>

				<h3>Chi Tiet</h3>
				<div className="row">
					<div className="col-4">
						<img
							className="w-100"
							src={this.props.spChiTiet.hinhAnh}
							alt="123"
						/>
					</div>
					<div className="col-8">
						<table className="table">
							<tr>
								<td>Ten</td>
								<td>{this.props.spChiTiet.tenSP}</td>
							</tr>
							<tr>
								<td>Man Hinh</td>
								<td>{this.props.spChiTiet.manHinh}</td>
							</tr>
							<tr>
								<td>He Dieu Hanh</td>
								<td>{this.props.spChiTiet.heDieuHanh}</td>
							</tr>
							<tr>
								<td>Camera Truoc</td>
								<td>{this.props.spChiTiet.cameraTruoc}</td>
							</tr>
							<tr>
								<td>Camera Sau</td>
								<td>{this.props.spChiTiet.cameraSau}</td>
							</tr>
							<tr>
								<td>RAM</td>
								<td>{this.props.spChiTiet.ram}</td>
							</tr>
							<tr>
								<td>ROM</td>
								<td>{this.props.spChiTiet.rom}</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

//Take state of redux and convert to props of component
const mapStateToProps = (state) => {
	return {
		spChiTiet: state.stateBTGioHang.sanPham,
	};
};

export default connect(mapStateToProps)(DanhSachSanPham);
