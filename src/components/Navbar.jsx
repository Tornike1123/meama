import React from "react";
import classes from "./Navbar.module.css";
import logo from "../images/logo.png";
import Language from "../components/Language";

const Navbar = () => {
	return (
		<div className={classes.flex}>
			<div>
				<div className={classes.logo_container}>
					<img src={logo} alt="" className={classes.logo} />
				</div>
			</div>
			<div>
				<Language />
			</div>
		</div>
	);
};

export default Navbar;
