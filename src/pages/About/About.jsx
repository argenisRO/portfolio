import { useContext } from "react";
import SkillsBox from "./SkillsBox";
import { Context } from "../../context";

export default function About() {
  const { personal, skills } = useContext(Context);

  const otherSkills = [].concat(skills.devops, skills.others, skills.paradigms);

  return (
    <div className="large-display-container">
      <h1 className="about-page-title">About Me</h1>
      <hr class="about-extra-separator"></hr>
      <div className="about-me-page-container">
        <div className="about-me-page-container-description">
          <p>
            Hey! I'm Argenis Rodriguez, a passionate tech enthusiast who enjoys
            building and fixing things. My journey has first taken me to a
            Dental Laboratory, where I handle everything from office admin to
            CAD/CAM tech - a bit of an odd mix, but I enjoy the challenge.
          </p>
          <p>
            I'm always up for a challenge and getting my hands dirty in the tech
            world. I've even been able to make work a bit smoother for everyone
            at the lab, building a handy system to store our CAD files and
            providing technical training throughout.
          </p>

          <p>
            But outside of work, I've put together some side projects like
            qChat, a real-time communication chat app, Club Organizers, a tool
            that gives club leaders a way to organize their members. Plus, I've
            whipped up a few command-line games to keep my skills fresh and just
            for the fun of it.
          </p>
          <p>
            When it comes to my toolkit, I'm well-versed with Python,
            JavaScript, PostgreSQL, Docker, and more. Even though I'm early in
            my career, I'm always eager to learn new things and I'm never one to
            back down from a challenge. If you're after someone who's a fast
            learner and a go-getter, contact me and let's have a chat!
          </p>
        </div>
        <div className="skill-sets">
          <SkillsBox title={"Frontend"} skillList={skills.frontend} />
          <SkillsBox title={"Backend"} skillList={skills.backend} />
          <SkillsBox title={"Others"} skillList={otherSkills} />
        </div>
      </div>
    </div>
  );
}
