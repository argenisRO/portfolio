import { useContext } from "react";
import Project from "../../components/Project";
import { Context } from "../../context";

export default function Projects() {
  const { projects } = useContext(Context);

  return (
    <div className="main-content">
      <section className="display-element display-element-project">
        <h1>Projects</h1>
      </section>
      <div className="projects center-set">
        {projects.map((projectData, i) => (
          <Project key={i} projectData={projectData} detailed />
        ))}
      </div>
    </div>
  );
}
