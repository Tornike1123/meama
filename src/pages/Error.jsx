import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Error.module.css";

const Error = () => {
	const navigate = useNavigate();

	const navigateHandler = () => {
		navigate("/");
	};
	return (
		<>
			<main className={classes.center}>
				<h1 className={classes.errorHeading}>ოპააა...</h1>
				<p className={classes.errorPara}>გვერდი ვერ მოიძებნა</p>
				<button
					className={classes.errorButton}
					onClick={navigateHandler}
				>
					მთავარზე დაბრუნება
				</button>
			</main>
		</>
	);
};

export default Error;
