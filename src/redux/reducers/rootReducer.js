import { combineReducers } from 'redux';

import BTGioHangReducer from './BTGioHangReducer';
import GameBauCuaReducer from './GameBauCuaReducer';

// Store of all app (contain all state)
const rootReducers = combineReducers({
	// Declare each state
	stateBTGioHang: BTGioHangReducer,
	GameBauCuaReducer,
});

export default rootReducers;
