import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './Components/Header';
import DataBinding from './DataBinding/DataBinding';
import EventBinding from './EventBinding/EventBinding';
import RenderWithState from './RenderWithState/RenderWithState';
import BaiTapChonXe from './RenderWithState/BaiTapChonXe';
import RenderWithMap from './RenderWithState/RenderWithMap/RenderWithMap';
import DemoProps from './Props/DemoProps';
import ExampleCard from './LiftingUpdate/ExampleCard.js';
import BTGioHang from './BTRedux/BTGioHang/BTGioHang';
import GameBauCua from './GameBauCua';
import GameTaiXiu from './GameTaiXiu';

function App() {
	return (
		<div className="App">
			{/* <DataBinding /> */}
			{/* <EventBinding /> */}
			{/* <RenderWithState /> */}
			{/* <BaiTapChonXe /> */}
			{/* <RenderWithMap /> */}
			{/* <DemoProps /> */}
			{/* <ExampleCard /> */}
			{/* <BTGioHang /> */}
			{/* <GameBauCua /> */}
			<GameTaiXiu />
		</div>
	);
}

export default App;
