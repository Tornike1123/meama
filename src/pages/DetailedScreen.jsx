import React from "react";
import { useNavigate } from "react-router-dom";

const DetailedScreen = () => {
	const navigate = useNavigate();

	const navigateHandler = () => {
		navigate("/");
	};
	return (
		<div>
			<h1>Detailed Screen</h1>
			<button onClick={navigateHandler}>Navigate</button>
		</div>
	);
};

export default DetailedScreen;
