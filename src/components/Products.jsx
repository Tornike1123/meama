import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Products.module.css";

const Products = () => {
	const [productList, setProductList] = useState([]);
	const [bColor, setBcolor] = useState(null);

	useEffect(() => {
		axios
			.get(`https://cms.meamacollect.ge/meama-collect/api/client/ka`)
			.then((getData) => {
				setProductList(getData.data);
				console.log(getData.data);
			});
	}, []);

	return (
		<div>
			{productList.map((data) =>
				data.products.map((product) => (
					<div>
						<h1>{data.name}</h1>
						<div style={{ backgroundColor: `${product.bgColor}` }}>
							<p>{product.name}</p>
							<img
								src={product.imgUrls}
								alt=""
								className={classes.imgS}
							/>
							<h1>{product.price}ლარი</h1>
						</div>
					</div>
				))
			)}
		</div>
	);
};

export default Products;
