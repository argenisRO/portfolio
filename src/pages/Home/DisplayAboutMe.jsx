import { Link } from "react-router-dom";

import React, { useContext } from "react";
import { Context } from "../../context";

function Skill({ skillName }) {
  return <div className="skillBtn">{skillName}</div>;
}

export default function DisplayAboutMe() {
  const { skills } = useContext(Context);

  return (
    <section className="about-me">
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
          <h1 className="about-gtk-title">Get to know me</h1>
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
          <h1 className="about-ms-title">My Skills</h1>
          <div className="about-ms-skills">
            {skills.frontend.map((skill) => (
              <Skill skillName={skill} />
            ))}
            {skills.backend.map((skill) => (
              <Skill skillName={skill} />
            ))}
            {skills.paradigms.map((skill) => (
              <Skill skillName={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
