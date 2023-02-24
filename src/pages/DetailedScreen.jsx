import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DetailedScreen = () => {
	const [productList, setProductList] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`https://cms.meamacollect.ge/meama-collect/api/client/ka`)
			.then((getData) => {
				setProductList(getData.data);
			});
	}, []);

	const navigate = useNavigate();

	const navigateHandler = () => {
		navigate("/");
	};

	return (
		<div>
			<h1>Detailed Screen</h1>

			<p>{id}</p>
			<button onClick={navigateHandler}>Navigate</button>
		</div>
	);
};

export default DetailedScreen;
