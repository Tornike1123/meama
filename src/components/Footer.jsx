import React, { useEffect, useState } from "react";
import classes from "./Footer.module.css";
import axios from "axios";

const Footer = () => {
	const [footerSocialData, setFooterSocialData] = useState([]);
	const [footerContactUs, setfooterContactUs] = useState({});

	useEffect(() => {
		axios
			.get(
				`https://cms.meamacollect.ge/meama-collect/api/client/ka/contact-info`
			)
			.then((getData) => {
				setFooterSocialData(getData.data.socialLinks);
				setfooterContactUs(getData.data);
			});
	}, []);

	return (
		<div className={classes.wrapper}>
			<div>
				<div>
					<p className={classes.connect}>{footerContactUs.name}</p>
					<div className={classes.dFlex}>
						<div>
							<p className={classes.tel}>
								{footerContactUs.value}
							</p>
						</div>
						<div className={classes.dFlexinline}>
							{footerSocialData.map((data, index) => (
								<a href={data.link}>
									<img
										src={data.imageUrl}
										alt=""
										className={classes.icon}
									/>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
