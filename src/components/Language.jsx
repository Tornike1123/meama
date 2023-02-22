import React from "react";
import classes from "./Language.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Language = () => {
	return (
		<div className={classes.wrapper}>
			<FontAwesomeIcon icon={faGlobe} className={classes.icon} />
			<div className={classes.wrapDiv}>
				<span className={classes.lang}>ქა</span>
				<FontAwesomeIcon
					icon={faChevronDown}
					className={classes.arrow}
				/>
			</div>
		</div>
	);
};

export default Language;
