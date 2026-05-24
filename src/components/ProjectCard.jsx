import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={project.image} className="card-img-top" alt={project.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{project.title} </h5>
        <p className="card-text">{project.description} </p>
        <Link to={project.link} className="btn btn-primary mt-auto">
          View Project
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
