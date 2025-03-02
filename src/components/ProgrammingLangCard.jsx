import "../styles/ProgrammingLangCard.css";

import ReactLogo from "../assets/PortfolioPics/React-logo.png";
import HTML5Logo from "../assets/PortfolioPics/HTML5-Logo.png";
import JSLogo from "../assets/PortfolioPics/JavaScript-logo.png";
import TSLogo from "../assets/PortfolioPics/ts-logo.svg";
import CSS3Logo from "../assets/PortfolioPics/css3-logo.png";
import PythonLogo from "../assets/PortfolioPics/python-logo.svg";
import ExpressLogo from "../assets/PortfolioPics/express-js-logo.png";
import JavaLogo from "../assets/PortfolioPics/java-logo.png";
import PostgresLogo from "../assets/PortfolioPics/postgresql-logo.png";

function ProgrammingLangCard(props) {
	switch (props.name) {
		case "Python":
			return (
				<div className="proglangcard">
					<img src={PythonLogo} alt={props.name + "Logo"} />
					<h4>{props.name}</h4>
				</div>
			);
		case "HTML5":
			return (
				<div className="proglangcard">
					<img src={HTML5Logo} alt={props.name + "Logo"} />
					<h4>{props.name}</h4>
				</div>
			);
		case "CSS3":
			return (
				<div className="proglangcard">
					<img src={CSS3Logo} alt={props.name + "Logo"} />
					<h4>{props.name}</h4>
				</div>
			);
		case "JavaScript":
			return (
				<div className="proglangcard">
					<img src={JSLogo} alt={props.name + "Logo"} />
					<h4>{props.name}</h4>
				</div>
			);
		case "TypeScript":
			return (
				<div className="proglangcard">
					<img src={TSLogo} alt={props.name + "Logo"} />
					<h4>{props.name}</h4>
				</div>
			);
		case "React":
			return (
				<div className="proglangcard">
					<img src={ReactLogo} alt={props.name + "Logo"} />
					<h4>{props.name}</h4>
				</div>
			);
		case "ExpressJS":
			return (
				<div className="proglangcard">
					<img src={ExpressLogo} alt={props.name + "Logo"} />
					<h4>{props.name}</h4>
				</div>
			);
		case "Java":
			return (
				<div className="proglangcard">
					<img src={JavaLogo} alt={props.name + "Logo"} />
					<h4>{props.name}</h4>
				</div>
			);
		case "PostgreSQL":
			return (
				<div className="proglangcard">
					<img src={PostgresLogo} alt={props.name + "Logo"} />
					<h4>{props.name}</h4>
				</div>
			);

		default:
			return (
				<div className="proglangcard">
					<img src="" alt="Logo Unavailable" />
					<h4>{props.name}</h4>
				</div>
			);
	}
}

export default ProgrammingLangCard;
