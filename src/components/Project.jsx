import Icon from "./Icon";
import Skill from "./Skill";

export default function Project({ projectData, detailed }) {
  const extractedData = {
    name: projectData.name,
    description: detailed
      ? projectData.description
      : projectData.shortDescription,
    image: projectData.image,
    link: projectData.link,
    github: projectData.github,
    techStack: projectData.techStack,
  };

  return (
    <div className="project">
      <div className="project-img">
        <img
          src={extractedData.image}
          alt="project"
          className="project-image"
        />
      </div>
      <div className="project-info-container">
        <h1 className="project-title">{extractedData.name}</h1>
        <p className="project-description">{extractedData.description}</p>
        {detailed && (
          <div className="project-tech-stack">
            {extractedData.techStack.map((tech, i) => (
              <Skill key={i * 2} skillName={tech} />
            ))}
          </div>
        )}
        <div className="project-icons">
          <Icon alias="Link" link={extractedData.link} />
          <Icon alias="Github" link={extractedData.github} />
        </div>
      </div>
    </div>
  );
}
