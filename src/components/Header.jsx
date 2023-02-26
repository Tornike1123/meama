import React from "react";
import classes from "./Header.module.css";
import logo from "../images/logo.png";
import Modal from "./Modal";

const Header = () => {
	return (
		<div className={classes.header}>
			<div className={classes.flex}>
				<div>
					<div className={classes.logo_container}>
						<img src={logo} alt="" className={classes.logo} />
					</div>
				</div>
				<div>
					<Modal />
				</div>
			</div>
		</div>
	);
};

export default Header;
