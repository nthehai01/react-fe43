import React from 'react';

export default function ProductList(props) {
	return (
		<div>
			<div classname="row">{props.renderProduct()}</div>
		</div>
	);
}
