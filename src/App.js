//4. Create Provider
import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
//import cartItems from "./cart-items";
// redux stuff
import { Provider } from "react-redux";
import { store } from "./components/store";

function App() {
	// cart setup

	return (
		<Provider store={store}>
			<Navbar />
			<CartContainer />
		</Provider>
	);
}

export default App;
