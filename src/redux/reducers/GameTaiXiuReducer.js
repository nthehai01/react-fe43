import { getRandomInt } from '../../utils/randomInt.js';

const danhSachXucXac = [
	{ ma: 'one', classes: 'fa fa-dice-one', so: 1 },
	{ ma: 'two', classes: 'fa fa-dice-two', so: 2 },
	{ ma: 'three', classes: 'fa fa-dice-three', so: 3 },
	{ ma: 'four', classes: 'fa fa-dice-four', so: 4 },
	{ ma: 'five', classes: 'fa fa-dice-five', so: 5 },
	{ ma: 'six', classes: 'fa fa-dice-six', so: 6 },
];

const initialState = {
	xucXac: [
		{ ma: 'one', classes: 'fa fa-dice-one', so: 1 },
		{ ma: 'two', classes: 'fa fa-dice-two', so: 2 },
		{ ma: 'three', classes: 'fa fa-dice-three', so: 3 },
	],
	taiXiu: false,
	soBanThang: 0,
	soBanChoi: 0,
};

const GameTaiXiuReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case 'CHON_TAI_XIU': {
			let { taiXiu } = state;
			taiXiu = actions.chonTaiXiu;

			return { ...state, taiXiu };
		}

		case 'CHOI': {
			let { soBanChoi, soBanThang, taiXiu } = state;
			soBanChoi++;

			let xucXac = [
				danhSachXucXac[getRandomInt(6)],
				danhSachXucXac[getRandomInt(6)],
				danhSachXucXac[getRandomInt(6)],
			];

			let tong = xucXac.reduce((sum, item) => sum + item.so, 0);
			if (taiXiu && tong > 12) soBanThang++;
			if (!taiXiu && tong <= 12) soBanThang++;

			return { ...state, soBanChoi, soBanThang, xucXac };
		}

		default:
			break;
	}

	return { ...state };
};

export default GameTaiXiuReducer;
