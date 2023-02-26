import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import classes from "./DetailedScreen.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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

	const allProducts = productList.map((product, inx) => {
		const filtered = product.products.map((drink) => drink);
		const filteredProducts = filtered.map((single) => single);
		const ready = filteredProducts.filter((el) => el.id === +id);
		const fetched = ready[0];
		const specification = fetched?.specifications.map((spec, idx) => {
			return (
				<div key={idx} className={classes.pad}>
					<p className={classes.title}>{spec.name}</p>
					<p>{spec.value}</p>
				</div>
			);
		});
		console.log(fetched);

		const imgggg = fetched?.imgUrls.map((imm) => {
			return (
				<div
					style={{ background: fetched?.bgColor }}
					className={classes.backCol}
				>
					<img className={classes.imgRes} src={imm} alt="" />
				</div>
			);
		});


		const codeMy = fetched?.description;

		return (
			<div className={classes.mainDiv} key={inx}>
				<div className={classes.flex}>
					<div>
						<p className={classes.sz}>{fetched?.name}</p>
						<p className={classes.sz2}>{fetched?.price}</p>
						<p>{specification}</p>
					</div>
					<div
						style={{ background: fetched?.bgColor }}
						className={classes.backGr}
					>
						<img
							className={classes.imgg}
							src={fetched?.mainPhoto}
							alt=""
						/>
					</div>
				</div>
				<div className={classes.imgFlex}>
					<div>{imgggg?.[0]}</div>
					<div>{imgggg?.[1]}</div>
				</div>
				<p className={classes.title}>{fetched?.title}</p>
				<p
					dangerouslySetInnerHTML={{ __html: codeMy }}
					className={classes.desc}
				></p>
			</div>
		);
	});

	return (
		<div>
			<div className={classes.fl}>
				<div>
					<FontAwesomeIcon
						icon={faArrowLeft}
						className={classes.icon}
						onClick={navigateHandler}
					/>
				</div>
				<div className={classes.icons}>
					<FontAwesomeIcon icon={faGlobe} />
					<span>En</span>
				</div>
			</div>

			{allProducts}
		</div>
	);
};

export default DetailedScreen;
