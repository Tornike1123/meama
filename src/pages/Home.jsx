import React from "react";
import Header from "../components/Header";
import Products from "../components/Products";

const Home = () => {
	return (
		<div style={{ width: "600px", overflowX: "hidden" }}>
			<Header />
			<Products />
		</div>
	);
};

export default Home;
