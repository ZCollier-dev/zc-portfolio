import "../styles/ProjectCard.css";

import { Link } from "react-router-dom";
import Button from "./Button";

const ProjectCardButtons = (props: {
  title: string;
  description: string;
  tryLink: string;
  codeLink: string;
}) => {
  return (
    <div className="projectcard">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className="buttongrid">
        <Link to={props.tryLink}>
          <Button name="Try" />
        </Link>
        <Link to={props.codeLink}>
          <Button name="Code" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCardButtons;
