import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Products.module.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

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
		<div key={idx} className={classes.category_main}>
			<h1>{product.name}</h1>
			<div className={classes.infoWrapper}>
				{product.products.map((coffe, idx) => (
					<div className={classes.card_prod}>
						<Link
							to={`/DetailedScreen`}
							className={classes.child}
							style={{
								background: `${coffe.bgColor}`,
							}}
						>
							<img
								className={classes.product_image}
								src={coffe.mainPhoto}
								alt="coffe"
							/>
							<p key={idx}>{coffe.name}</p>
							<p className={classes.price}>{coffe.price}ლ</p>
						</Link>
					</div>
				))}
			</div>
		</div>
	));

	return (
		<div className={classes.card}>
			{productCategory}
			<Footer />
		</div>
	);
};

export default Products;
