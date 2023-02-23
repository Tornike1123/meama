import React, { useState, useEffect } from "react";
import axios from "axios";

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

	return (
		<div>
			{productList.map((data) => {
				let color = [];
				data.products.map((bg) => {
					color.push(bg.bgColor);
				});

				const bgColors = color.map((colr) => );

				return (
					<div
						key={data.id}
						style={{
							backgroundColor: {},
						}}
					>
						<p>{data.name}</p>
						<div>
							{data.products.map((desc, idx) => {
								return (
									<div key={idx}>
										<p>{desc.id}</p>
										<p>{desc.name}</p>
										<img src={desc.imgUrls[0]} alt="" />
									</div>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Products;
