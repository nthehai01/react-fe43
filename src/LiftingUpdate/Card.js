import React, { Component } from 'react';

export default class Card extends Component {
	tongTien = () => {
		return this.props.cardList.reduce((tongTien, item, index) => {
			return tongTien + item.soLuong * item.giaBan;
		}, 0);
	};

	renderCardList = () => {
		return this.props.cardList.map((item, index) => {
			return (
				<tr key={index}>
					<td>{index + 1}</td>
					<td>
						<img
							src={item.hinhAnh}
							alt="asda"
							style={{ width: 100 }}
						/>
					</td>
					<td>{item.tenSP}</td>
					<td>{item.giaBan}</td>
					<td>
						<button
							classname="btn btn-info"
							onClick={() =>
								this.props.tangGiam(item.maSP, false)
							}
						>
							-
						</button>
						<span classname="mx-2">{item.soLuong}</span>
						<button
							classname="btn btn-info"
							onClick={() => this.props.tangGiam(item.maSP, true)}
						>
							+
						</button>
					</td>
					<td>{(item.soLuong * item.giaBan).toLocaleString()}$</td>
					<td>
						<button
							classname="btn btn-danger"
							onClick={() => {
								this.props.deleteItem(item);
							}}
						>
							xóa
						</button>
					</td>
				</tr>
			);
		});
	};

	render() {
		return (
			<div>
				<h2>Card</h2>
				<table classname="table">
					<thead>
						<tr>
							<th>id</th>
							<th>Hình Ảnh</th>
							<th>Tên sảm phẩm</th>
							<th>Giá bán</th>
							<th>số lượng</th>
							<th>thành giá</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>{this.renderCardList()}</tbody>
					<tfoot>
						<tr>
							<td colSpan="5"></td>
							<td>{this.tongTien().toLocaleString()}$</td>
						</tr>
					</tfoot>
				</table>
			</div>
		);
	}
}
