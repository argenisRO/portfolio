import { useContext } from "react";

import { Context } from "../../context";
import Project from "../../components/Project";

export default function DisplayProjects() {
  const { projects } = useContext(Context);

  return (
    <>
      <h1 className="projects-heading">Projects</h1>
      <div className="projects">
        {projects.map((projectData, i) => (
          <Project key={i} projectData={projectData} />
        ))}
      </div>
    </>
  );
}
