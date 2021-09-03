import "./App.css";
import React, { Suspense } from "react";
import Page1 from "./components/Page1";
import logo from "./logo.svg";
// Part 3 cleaner Code Splitting
import AsyncComponent from "./components/AsyncComponent";
// Part 4 React.lazy
const Page2Lazy = React.lazy(() => import("./components/Page2"));
const Page3Lazy = React.lazy(() => import("./components/Page3"));

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			route: "page1",
			component: null,
		};
	}

	onRouteChange = (route) => {
		this.setState({ route });
	};

	render() {
		// // Part 3 cleaner Code Splitting
		// if (this.state.route === "page1") {
		// 	return <Page1 onRouteChange={this.onRouteChange} />;
		// } else if (this.state.route === "page2") {
		// 	const AsyncPage2 = AsyncComponent(() =>
		// 		import("./components/Page2")
		// 	);
		// 	return <AsyncPage2 onRouteChange={this.onRouteChange} />;
		// } else if (this.state.route === "page3") {
		// 	const AsyncPage3 = AsyncComponent(() =>
		// 		import("./components/Page3")
		// 	);
		// 	return <AsyncPage3 onRouteChange={this.onRouteChange} />;
		// }
		// return (
		// 	<div className="App">
		// 		<header className="App-header">
		// 			<img src={logo} className="App-logo" alt="logo" />
		// 		</header>
		// 	</div>
		// );

		// Part 4 React.lazy
		if (this.state.route === "page1") {
			return <Page1 onRouteChange={this.onRouteChange} />;
		} else if (this.state.route === "page2") {
			return (
				<Suspense fallback={<div>Loading...</div>}>
					<Page2Lazy onRouteChange={this.onRouteChange} />
				</Suspense>
			);
		} else if (this.state.route === "page3") {
			return (
				<Suspense fallback={<div>Loading...</div>}>
					<Page3Lazy onRouteChange={this.onRouteChange} />
				</Suspense>
			);
		}
	}
}

export default App;
