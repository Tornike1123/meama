import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/Products";

const Home = () => {
	return (
		<div style={{width:'600px', overflowX:'hidden'}}>
			<Header />
			<h1>Home Page </h1>
			<Products />
			<Footer />
		</div>
	);
};

export default Home;
