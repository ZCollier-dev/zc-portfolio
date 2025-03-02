import circuitTree from "/circuit-tree.svg";
import githubImg from "../assets/PortfolioPics/github-logo.svg";
import linkedinImg from "../assets/PortfolioPics/linkedin-logo.png";
import emailImg from "../assets/PortfolioPics/email-icon.png";

import { send } from "emailjs-com";
import { useState, useRef, useEffect } from "react";
import "../styles/Contact.css";

function Contact() {
	const [toSend, setToSend] = useState({
		sendername: "",
		senderemail: "",
		sendermessage: "",
	});

	const [alertInfo, setAlertInfo] = useState({
		type: "empty",
		alertMessage: "",
	});

	const alertElement = useRef(null);

	useEffect(() => {
		if (alertElement.current) {
			alertElement.current.innerHTML = `<p>${alertInfo.alertMessage}</p>`;
			if (alertInfo.type === "empty") {
				alertElement.current.style.background = "rgba(0,0,0,0)";
			} else if (alertInfo.type === "success") {
				alertElement.current.style.background = "green";
			} else {
				alertElement.current.style.background = "red";
			}

			if (alertInfo.type != "empty") {
				setTimeout(() => {
					setAlertInfo({ type: "empty", alertMessage: "" });
				}, 5000);
			}
		}
	}, [alertInfo]);

	const handleChangeInput = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};

	const handleChangeTextarea = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		send("service_y1amfoj", "template_l5wc3yb", toSend, "TyhAq8dr8vfw_DyMj")
			.then((response) => {
				console.log("SUCCESS", response.status, response.text);
				setAlertInfo({ type: "success", alertMessage: `Message Sent.` });
			})
			.catch((err) => {
				console.log("FAILED", err);
				setAlertInfo({
					type: "fail",
					alertMessage: `An error occured. Please try again later.`,
				});
			});
	};

	return (
		<main>
			<img className="treeimg" src={circuitTree} />
			<article>
				<div className="toparticle">
					<h2>Contact Info</h2>
					<br />
					<div className="contactgrid">
						<a href="https://github.com/ZCollier-dev" target="_blank">
							<img src={githubImg} alt="GitHub Logo" />
							<p>https://github.com/ZCollier-dev</p>
						</a>

						<a
							href="https://www.linkedin.com/in/zachary-collier-010a42332/"
							target="_blank"
						>
							<img src={linkedinImg} alt="LinkedIn Logo" />
							<p>https://www.linkedin.com/in/zachary-collier-010a42332/</p>
						</a>
						<div>
							<img src={emailImg} alt="Email Icon" />
							<p>zacharycollier36@protonmail.com</p>
						</div>
					</div>
				</div>
				<div className="mainarticle">
					<div className="quickemailbox">
						<h3>Quick Email</h3>
						<br />
						<br />
						<form onSubmit={onSubmit}>
							<div className="quickemailsendername">
								<label htmlFor="sendername">Your Name</label>
								<input
									type="text"
									id="sendername"
									name="sendername"
									value={toSend.sendername}
									onChange={handleChangeInput}
									required
								/>
							</div>
							<div className="quickemailsenderemail">
								<label htmlFor="senderemail">Your Email</label>
								<input
									type="email"
									id="senderemail"
									name="senderemail"
									value={toSend.senderemail}
									onChange={handleChangeInput}
									required
								/>
							</div>
							<div className="quickemailmessage">
								<label htmlFor="sendermessage">Your Message</label>
								<textarea
									name="sendermessage"
									id="sendermessage"
									value={toSend.sendermessage}
									onChange={handleChangeTextarea}
									required
								></textarea>
							</div>
							<div>
								<button type="submit">Submit</button>
							</div>
							<div className="sendalert" ref={alertElement}>
								<p></p>
							</div>
						</form>
					</div>
				</div>
			</article>
		</main>
	);
}

export default Contact;
