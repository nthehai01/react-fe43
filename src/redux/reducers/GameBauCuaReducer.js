const initialState = {
	tongTien: 100,
	danhSachCuoc: [
		{ ma: 'bau', hinhAnh: './img/bau.png', giaCuoc: 0 },
		{ ma: 'cua', hinhAnh: './img/cua.png', giaCuoc: 0 },
		{ ma: 'tom', hinhAnh: './img/tom.png', giaCuoc: 0 },
		{ ma: 'ca', hinhAnh: './img/ca.png', giaCuoc: 0 },
		{ ma: 'nai', hinhAnh: './img/nai.png', giaCuoc: 0 },
		{ ma: 'ga', hinhAnh: './img/ga.png', giaCuoc: 0 },
	],
	xucXac: [
		{ ma: 'bau', hinhAnh: './img/bau.png', giaCuoc: 0 },
		{ ma: 'cua', hinhAnh: './img/cua.png', giaCuoc: 0 },
		{ ma: 'tom', hinhAnh: './img/tom.png', giaCuoc: 0 },
	],
};

const GameBauCuaReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case 'TANG_GIAM':
			let { tongTien } = state;
			let danhSachCuoc = [...state.danhSachCuoc];
			let index = danhSachCuoc.findIndex(
				(item) => item.ma === actions.ma
			);

			if (index !== -1) {
				if (actions.tangGiam && tongTien) {
					danhSachCuoc[index].giaCuoc += 10;
					tongTien -= 10;
				}
				if (!actions.tangGiam && danhSachCuoc[index].giaCuoc) {
					danhSachCuoc[index].giaCuoc -= 10;
					tongTien += 10;
				}
			}

			return { ...state, tongTien, danhSachCuoc };

		default:
			break;
	}

	return { ...state };
};

export default GameBauCuaReducer;