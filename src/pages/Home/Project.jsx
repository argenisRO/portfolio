import Icon from "../../components/Icon";

export default function Project({ projectData }) {
  return (
    <div className="project">
      <div className="project-img">
        <img src={projectData.image} alt="project" className="project-image" />
      </div>
      <div className="project-info-container">
        <h1 className="project-title">{projectData.name}</h1>
        <p className="project-description">{projectData.shortDescription}</p>
        <div className="project-icons">
          <Icon alias="Link" link={projectData.link} />
          <Icon alias="Github" link={projectData.github} />
        </div>
      </div>
    </div>
  );
}
