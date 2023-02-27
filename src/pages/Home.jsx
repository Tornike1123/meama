import React, { useState, createContext } from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import Footer from "../components/Footer";

export const AppContext = createContext(null);

const Home = () => {
	const [langID, setLangID] = useState("ka");
	return (
		<div style={{ width: "600px", overflowX: "hidden" }}>
			<AppContext.Provider value={{ langID, setLangID }}>
				<Header />
				<Products />
				<Footer />
			</AppContext.Provider>
		</div>
	);
};

export default Home;
