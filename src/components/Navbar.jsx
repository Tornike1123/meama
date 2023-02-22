import React from "react";
import classes from "./Navbar.module.css";
import logo from "../images/logo.png";
import Language from "../components/Language";

const Navbar = () => {
	return (
		<div>
			<div>
				<div className={classes.logo_container}>
					<img src={logo} alt="" />
				</div>
				<h1>MEAMA</h1>
				<p>Collect</p>
			</div>
			<div>
				<Language />
			</div>
		</div>
	);
};

export default Navbar;
