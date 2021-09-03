import "./App.css";
import { useState } from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";

function App() {
	const [route, setRoute] = useState("page1");

	const onRouteChange = (route) => setRoute(route);

	return (
		<div className="App">
			{route === "page1" ? <Page1 onRouteChange={onRouteChange} /> : null}
			{route === "page2" ? <Page2 onRouteChange={onRouteChange} /> : null}
			{route === "page3" ? <Page3 onRouteChange={onRouteChange} /> : null}
		</div>
	);
}

export default App;
