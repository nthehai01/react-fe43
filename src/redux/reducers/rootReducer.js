import { combineReducers } from 'redux';

import BTGioHangReducer from './BTGioHangReducer';
import GameBauCuaReducer from './GameBauCuaReducer';
import GameTaiXiuReducer from './GameTaiXiuReducer';

// Store of all app (contain all state)
const rootReducers = combineReducers({
	// Declare each state
	stateBTGioHang: BTGioHangReducer,
	GameBauCuaReducer,
	GameTaiXiuReducer,
});

export default rootReducers;
