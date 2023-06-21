import Icon from "../../components/Icon";
import githubIcon from "../../assets/svg/github-icon.svg";
import linkIcon from "../../assets/svg/link-icon.svg";

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
          <Icon alias={"project page"} img={linkIcon} link={projectData.link} />
          <Icon alias={"github"} img={githubIcon} link={projectData.github} />
        </div>
      </div>
    </div>
  );
}
