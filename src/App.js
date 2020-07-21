import React from 'react';
import logo from './logo.svg';
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

function App() {
	return (
		<div className="App">
			{/* <DataBinding /> */}

			{/* <EventBinding /> */}

			{/* <RenderWithState /> */}

			{/* <BaiTapChonXe /> */}

			{/* <RenderWithMap /> */}

			{/* <DemoProps /> */}

			<ExampleCard />
		</div>
	);
}

export default App;
