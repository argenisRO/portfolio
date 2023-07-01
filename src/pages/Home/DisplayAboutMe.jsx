import { Link } from "react-router-dom";

import React, { useContext } from "react";
import { Context } from "../../context";
import Skill from "../../components/Skill";

export default function DisplayAboutMe() {
  const { skills } = useContext(Context);

  const previewSkills = [].concat(
    skills.frontend,
    skills.backend,
    skills.devops
  );

  return (
    <section className="large-display-container center-set">
      <div className="about-extra-title">About Me</div>
      <hr className="about-extra-separator"></hr>
      <p className="about-extra-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        accusantium possimus earum! Assumenda ex reprehenderit nemo labore,
        obcaecati repellat a! Laborum iure quae sequi accusamus, nesciunt quia
        assumenda. Eveniet, eius.
      </p>
      <div className="about-extra-info">
        <div className="about-container">
          <h1 className="semi-box-title">Get to know me</h1>
          <p className="about-gtk-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            accusantium possimus earum! Assumenda ex reprehenderit nemo labore,
            obcaecati repellat a! Laborum iure quae sequi accusamus, nesciunt
            quia assumenda. Eveniet, eius.
          </p>
          <Link className="about-gtk-btn" to="/contact">
            Contact
          </Link>
        </div>
        <div className="about-container-skill">
          <h1 className="semi-box-title">My Skills</h1>
          <div className="about-ms-skills">
            {previewSkills.map((skill, id) => (
              <Skill key={id} skillName={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
