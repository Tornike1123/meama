import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Products.module.css";

const Products = () => {
	const [productList, setProductList] = useState([]);

	useEffect(() => {
		axios
			.get(`https://cms.meamacollect.ge/meama-collect/api/client/ka`)
			.then((getData) => {
				setProductList(getData.data);
				console.log(getData.data);
			});
	}, []);
	const productCategory = productList.map((product, idx) => (
		<div key={idx}>
			<h1>{product.name}</h1>
			{/* {console.log(product)} */}
			{product.products.map((coffe,idx) => (
				<div style={{
					background : `${coffe.bgColor}`
				}}>
				{console.log(coffe)}
				<img src={coffe.mainPhoto} alt="coffe" />
				<p key={idx}>{coffe.name}</p>
				<p>{coffe.price}ლ</p>
				</div>
               
			))}
		</div>
	));

	return <div>{productCategory}</div>;
};

export default Products;
