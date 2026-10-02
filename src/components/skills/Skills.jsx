import React from 'react';
import Frontend from "./Back-End";
import Backend from "./Database";
import "./skills.css";


const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Skills technical skills</span>

        <div className="skills__container container grid">
          <Frontend />
          <Backend /> 
        </div>
    </section>
  );
};

export default Skills;