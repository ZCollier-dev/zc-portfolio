import "../styles/ProjectCard.css";

const ProjectCard = (props: { title: string; description: string }) => {
  return (
    <div className="projectcard">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default ProjectCard;
