import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section">
         <h2 className="section__title">Qualification</h2>
         <span className="section__subtitle">My personal journey</span>

         <div className="qualification__container container">
            <div className="qualification__tabs">
                <div 
                className={
                toggleState === 1 
                ? "qualification__button qualification__active button--flex" 
                : "qualification__button button--flex"
                }
                onClick={() =>toggleTab(1)}
               >
                    <i className="uil uil-graduation-cap
                     qualification__icon"></i>
                     Education
                </div>

                <div className={
                toggleState === 2 
                ? "qualification__button qualification__active button--flex" 
                : "qualification__button button--flex"
                }

                 onClick={() =>toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt 
                    qualification__icon"></i> 
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? 
                "qualification__content qualification__content-active" :
                    "qualification__content"}>

                    <div className="qualification__data">
                       <div>
                         <h3 className="qualification__title">Bachelor's Degree — Information Systems</h3>
                            <li 
                            className="qualification__subtitle">
                             Nile Institute for Science and Technology
                            Department of Administrative and Information Systems — Grade: Very Good
                            📅 2018 – 2022
                            </li>
                            <div className="qualification__calender">
                                <span className="uil uil-calendar">
                                
                                </span>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                       <div>
                         <h3 className="qualification__title">Freelance Full Stack Developer </h3>
                         <li className="qualification__subtitle">
                                  📅 Upwork & Medianesta
                                </li>

                                <span className="qualification__calendar">
                                     📅 Ongoing
                                </span>

                                <p className="qualification__description">
                                    Delivered full-stack web applications using PHP/Laravel and React.js. Managed projects independently from requirements to deployment.
                                </p>

                            {/* <div className="qualification__calender">
                                <i className="uil uil-calendar-alt">
                                </i> 2021 - 2026
                            </div> */}
                        </div>
                    </div>
                
                  <div className="qualification__data">
                      <div>
                        <h3>Back-End Development Course</h3>
                        <p>Black Horse Courses</p>
                        <span>📅 March – June 2026 | Grade: Excellent</span>
                        <a href="certificates/black-horse.pdf" target="_blank" rel="noopener noreferrer">
                            View Certificate →
                        </a>
                    </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                       <div>
                         <h3 className="qualification__title">SKILLS AND TECHNOLOGY</h3>
                            <li 
                            className="qualification__subtitle">
                                 Full Stack web development using React.js, PHP, and Laravel.
                             - Building and consuming RESTful APIs.</li>
                            <div className="qualification__calender">
                            <li 
                            className="qualification__subtitle">
                               Database design and management with MySQL.
                                - Version control and collaboration using Git & GitHub.</li>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={toggleState === 2 ? 
                "qualification__content qualification__content-active" :
                    "qualification__content"}>

                    <div className="qualification__data">
                       <div>
                         <h3 className="qualification__title">Freelance 
                            Full Stack Developer
                         </h3>
                            <li 
                            className="qualification__subtitle">Upwork & Medianesta
                            </li>
                            <div className="qualification__calender">
                                <li className="uil uil-calendar"> 📅 Ongoing
                                
                                </li>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                       <div>
                         <h3 className="qualification__title">Skills and Technology </h3>
                            <li
                            className="qualification__subtitle">
                                Full Stack web development using React.js, PHP, and Laravel
                                Building and consuming RESTful APIs.</li> 
                            <li 
                            className="qualification__subtitle">
                               Database design and management with MySQL
                                Version control and collaboration using Git & GitHub.</li>
                            
                        </div>
                    </div>
                
                  <div className="qualification__data">
                       <div>
                         <h3 className="qualification__title"> Full Stack Development Training
                            </h3>
                            <li
                            className="qualification__subtitle">
                                ITSHARE Training Center, Mansoura
                                </li> 
                           <li className="uil uil-calendar"> 📅 2019 – 2022
                                
                                </li>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </section>
  );
};

export default Qualification;