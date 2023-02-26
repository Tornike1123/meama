import React from "react";
import classes from "./Header.module.css";
import logo from "../images/logo.png";
import Modal from "./Modal";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
					<FontAwesomeIcon icon={faGlobe} className={classes.icon} />
					<Modal />
				</div>
			</div>
		</div>
	);
};

export default Header;
