import React from "react";

const Page1 = ({ onRouteChange }) => (
	<div className="App">
		
		<button className="disabled">Page1</button>
		<button onClick={() => onRouteChange("page2")}>Page 2</button>
		<button onClick={() => onRouteChange("page3")}>Page 3</button>
	</div>
);

export default Page1;
