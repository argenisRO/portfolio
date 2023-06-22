import Skill from "../../components/Skill";

export default function SkillsBox({ title, skillList }) {
  return (
    <div className="skill-box-container">
      <h1 className="skill-box-heading">{title}</h1>
      <hr className="skill-box-separator"></hr>
      <div className="skill-box-list">
        {skillList.map((skill) => (
          <Skill skillName={skill} />
        ))}
      </div>
    </div>
  );
}
