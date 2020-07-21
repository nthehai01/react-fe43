import React, { Component } from 'react';

export default class Card extends Component {
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
						<button classname="btn btn-info">-</button>
						<span classname="mx-2">{item.soLuong}</span>
						<button classname="btn btn-info">+</button>
					</td>
					<td>17100000$</td>
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
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td>32300000</td>
						</tr>
					</tfoot>
				</table>
			</div>
		);
	}
}
