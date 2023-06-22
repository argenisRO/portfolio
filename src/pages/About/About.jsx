import { useContext } from "react";
import SkillsBox from "./SkillsBox";
import { Context } from "../../context";

export default function About() {
  const { skills } = useContext(Context);

  const otherSkills = [].concat(skills.devops, skills.others, skills.paradigms);

  return (
    <div className="about-page-header">
      <h1 className="about-page-title">About Me</h1>
      <hr class="about-extra-separator"></hr>
      <p className="about-page-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet ad,
        perferendis minima tempore neque aut aspernatur commodi doloremque eius
        quidem expedita error rem ea dolor officiis provident incidunt facilis.
        Molestias!
      </p>
      <div className="about-me-page-container">
        <p className="about-me-page-container-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          quod, non vero perspiciatis quaerat laudantium exercitationem laborum
          pariatur maiores soluta alias ea ducimus, ipsam in facilis unde,
          eveniet similique officia.
        </p>
        <div className="skill-sets">
          <SkillsBox title={"Frontend"} skillList={skills.frontend} />
          <SkillsBox title={"Backend"} skillList={skills.backend} />
          <SkillsBox title={"Others"} skillList={otherSkills} />
        </div>
      </div>
    </div>
  );
}
