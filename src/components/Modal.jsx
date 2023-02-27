import React, { useState, useEffect, useContext } from "react";
import "./Modal.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../pages/Home";

export default function Modal() {
	const [modal, setModal] = useState(false);
	const [lang, setLang] = useState([]);
	const { langID, setLangID } = useContext(AppContext);

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
						<div className="radio">
							<input
								type="radio"
								value={item.code}
								checked={langID === item.code}
								onChange={() => setLangID(item.code)}
								name="radioBtn"
								id={item.code}
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
				<p style={{ color: "#fff" }}>{langID}</p>
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
					<div className="modal-content">{result}</div>
				</div>
			)}
		</div>
	);
}
