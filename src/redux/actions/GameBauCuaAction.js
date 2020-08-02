import { TANG_GIAM } from '../constaints/GameBauCuaConst';

export function tangGiamAction(ma, tangGiam) {
	return {
		type: TANG_GIAM,
		ma: ma,
		tangGiam: tangGiam,
	};
}
