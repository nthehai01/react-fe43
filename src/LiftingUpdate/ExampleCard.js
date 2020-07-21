import React, { Component } from 'react';
import data from './data.json';
import Product from './Product.js';
import ProductList from './ProductList.js';
import Card from './Card.js';

export default class ExampleCard extends Component {
	state = {
		proList: data,
		proSelected: null,
		cardList: [],
	};

	renderProList = () => {
		return this.state.proList.map((item, index) => {
			return (
				<div className="col-sm-4" key={index}>
					<Product
						select={this.handleSelectPro}
						item={item}
						buy={this.handleBuy}
					/>
				</div>
			);
		});
	};

	handleSelectPro = (pro) => {
		this.setState({ proSelected: pro });
	};

	handleBuy = (card) => {
		let cardUpdate = [...this.state.cardList];

		let index = cardUpdate.findIndex((item) => item.maSP === card.maSP);
		if (index >= 0) {
			cardUpdate[index].soLuong += 1;
		} else {
			card.soLuong = 1;
			cardUpdate = [...this.state.cardList, card];
		}

		this.setState({ cardList: cardUpdate });
	};

	handleDelete = (card) => {
		let cardUpdate = [...this.state.cardList];

		let index = cardUpdate.findIndex((item) => item.maSP === card.maSP);
		if (index >= 0) {
			cardUpdate.splice(index, 1);
		}

		this.setState({ cardList: cardUpdate });
	};

	render() {
		return (
			<div className="container">
				<Card
					cardList={this.state.cardList}
					deleteItem={this.handleDelete}
				/>
				<ProductList renderProduct={this.renderProList} />
				{this.state.proSelected ? (
					<div className="row">
						<div className="col-sm-5">
							<img
								className="img-fluid"
								src={this.state.proSelected.hinhAnh}
							/>
						</div>
						<div className="col-sm-7">
							<h3>Thông số kỹ thuật</h3>
							<table className="table">
								<tbody>
									<tr>
										<td>Màn hình</td>
										<td>
											{this.state.proSelected.manHinh}
										</td>
									</tr>
									<tr>
										<td>Hệ điều hành</td>
										<td>
											{this.state.proSelected.heDieuHanh}
										</td>
									</tr>
									<tr>
										<td>Camera trước</td>
										<td>
											{this.state.proSelected.cameraTruoc}
										</td>
									</tr>
									<tr>
										<td>Camera sau</td>
										<td>
											{this.state.proSelected.cameraSau}{' '}
											&amp;{' '}
											{this.state.proSelected.cameraTruoc}
										</td>
									</tr>
									<tr>
										<td>RAM</td>
										<td>{this.state.proSelected.ram}</td>
									</tr>
									<tr>
										<td>ROM</td>
										<td>{this.state.proSelected.rom}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				) : null}
			</div>
		);
	}
}
