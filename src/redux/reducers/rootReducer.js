import { combineReducers } from 'redux';

import BTGioHangReducer from './BTGioHangReducer';

// Genaral store of app (contain all state)
const rootReducers = combineReducers({
	// Declare each state
	stateBTGioHang: BTGioHangReducer,
});

export default rootReducers;
