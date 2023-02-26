import React, { useState, useEffect } from "react";
import "./Modal.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Modal() {
	const [modal, setModal] = useState(false);
	const [lang, setLang] = useState([]);
	const [langH, setLangH] = useState("ka");

	const lng = `https://cms.meamacollect.ge/meama-collect/api/client/en`;

	useEffect(() => {
		axios
			.get(
				`https://cms.meamacollect.ge/meama-collect/api/client/languages`
			)
			.then((getData) => {
				setLang(getData.data);
			});
	}, []);

	const toggleModal = () => {
		setModal(!modal);
	};

	if (modal) {
		document.body.classList.add("active-modal");
	} else {
		document.body.classList.remove("active-modal");
	}

	const result = lang.map((item, idx) => {
		return (
			<div key={idx}>
				<div>
					<div className="langFlex">
						<div>
							<img src={item.imageUrl} alt="" />
						</div>
						<div>{item.name}</div>
						<div>
							<input
								type="radio"
								value={item.code}
								checked={langH === item.code}
								onChange={() => setLangH(item.code)}
								name="radioBtn"
								id={item.code}
								onClick={lng}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	});

	return (
		<div className="modalWrapper">
			<div>
				<FontAwesomeIcon icon={faGlobe} className="icon" />
			</div>
			<div>
				<p style={{ color: "#fff" }}>{langH}</p>
			</div>
			<div>
				<FontAwesomeIcon
					onClick={toggleModal}
					icon={faChevronDown}
					className="arrow"
				/>
			</div>
			{modal && (
				<div className="modal">
					<div onClick={toggleModal} className="overlay"></div>
					<div className="modal-content">
						<h2>ენა</h2>
						{result}
					</div>
				</div>
			)}
		</div>
	);
}
