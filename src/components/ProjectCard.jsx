import "../styles/ProjectCard.css";

const ProjectCard = (props) => {
	return (
		<div className="projectcard">
			<h3>{props.title}</h3>
			<p>{props.description}</p>
		</div>
	);
};

export default ProjectCard;
