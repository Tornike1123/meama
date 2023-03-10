import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import classes from "./Products.module.css";
import { Link } from "react-router-dom";
import { AppContext } from "../pages/Home";

const Products = () => {
	const [productList, setProductList] = useState([]);
	const { langID } = useContext(AppContext);

	useEffect(() => {
		axios
			.get(
				`https://cms.meamacollect.ge/meama-collect/api/client/${langID}`
			)
			.then((getData) => {
				setProductList(getData.data);
				console.log(getData.data);
			});
	}, [langID]);

	const productCategory = productList.map((product, idx) => (
		<div key={idx} className={classes.category_main}>
			<h3>{product.name}</h3>
			<div className={classes.infoWrapper}>
				{product.products.map((coffe, idx) => (
					<div key={idx} className={classes.card_prod}>
						<Link
							to={`/DetailedScreen/${coffe.id}`}
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
							<p className={classes.title} key={idx}>
								{coffe.name}
							</p>
							<p className={classes.price}>{coffe.price}ლ</p>
						</Link>
					</div>
				))}
			</div>
		</div>
	));

	return <div className={classes.card}>{productCategory}</div>;
};

export default Products;
