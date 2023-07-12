import { Link } from "react-router-dom";

import React, { useContext } from "react";
import { Context } from "../../context";
import Skill from "../../components/Skill";

export default function DisplayAboutMe() {
  const { personal, skills } = useContext(Context);

  const previewSkills = [].concat(
    skills.frontend,
    skills.backend,
    skills.devops
  );

  return (
    <section className="large-display-container center-set">
      <div className="about-extra-title">About Me</div>
      <hr className="about-extra-separator"></hr>
      <div className="about-extra-info">
        <div className="about-container">
          <h1 className="semi-box-title">Get to know me</h1>
          <p className="about-gtk-desc">
            Hey, I'm Argenis Rodriguez, a tech lover who enjoys building and
            fixing. I've done everything from office admin to CAD/CAM tech at a
            Dental Lab, and even built a system for our CAD files. Outside work,
            I've made a chat app called qChat, a club organizer tool, and a
            bunch of fun command-line games. I know Python, JavaScript,
            PostgreSQL, Docker and more. I'm still learning, but I never back
            down from a challenge. If you need a tech-savvy go-getter, let's
            chat!
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
