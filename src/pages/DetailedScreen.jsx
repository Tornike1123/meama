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

	const allProducts = productList.map((product, inx) => {
		const filtered = product.products.map((drink) => drink);
		const filteredProducts = filtered.map((single) => single);
		const ready = filteredProducts.filter((el) => el.id === +id);
		const fetched = ready[0];
		// const ddd = ready.specifications.map((dddd) => console.log(dddd));
		//console.log(fetched);
		const codeMy = fetched?.description;

		return (
			<div key={inx}>
				<p>{fetched?.price}</p>

				<p>{fetched?.name}</p>
				<img
					style={{ background: fetched?.bgColor }}
					src={fetched?.mainPhoto}
					alt=""
				/>
				<p>{fetched?.title}</p>
				<p dangerouslySetInnerHTML={{ __html: codeMy }}></p>
			</div>
		);
	});

	const navigate = useNavigate();

	const navigateHandler = () => {
		navigate("/");
	};

	return (
		<div>
			{allProducts}
			<button onClick={navigateHandler}>Navigate</button>
		</div>
	);
};

export default DetailedScreen;
