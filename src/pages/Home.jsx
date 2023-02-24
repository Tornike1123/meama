import React from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<div style={{ width: "600px", overflowX: "hidden" }}>
			<Header />
			<Products />
			<Footer />
		</div>
	);
};

export default Home;
