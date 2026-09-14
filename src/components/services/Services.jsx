import React, { useState } from 'react';
import "./services.css";
const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">what i offer</span>

        <div className="services__container container grid">
            <div className="services__content">
               <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">
                        Front-End <br /> Development
                    </h3>
                </div>
                <span className="services__button" onClick={() => 
                    toggleTab(1)}>
                    View More 
                    <i className="uil uil-arrow-right
                   services__button-icon"></i>
                </span>
 
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times 
                        services__modal-close"></i>

                        <h3 className="services__modal-title">Front-End  
                        Development</h3>
                        <p className="services__modal-description">
                       Building responsive, fast, and user-friendly interfaces with more than 4 years 
                       of experience, using modern tools to bring designs to life.
                        </p>
                        
                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I build responsive user interfaces using React.js.
                                 </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I implement designs with Tailwind CSS and Bootstrap.
                                 </p>
                            </li>

                           
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                       I ensure fast performance and smooth user experience.
                                 </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I integrate front-end apps with back-end APIs.
                                 </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                      I fix bugs and optimize existing interfaces.
                                 </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                 <div>
                <i className="uil uil-server-network services__icon"></i>
                <h3 className="services__title">
                    Back-End <br /> Development
                </h3>
                </div>

                <span onClick={() => toggleTab(2)} 
                className="services__button">
                View More <i 
                className="uil uil-arrow-right
                services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Back-End Development</h3>
                        <p className="services__modal-description">
                       Building robust, secure server-side systems with more than 4 years of experience,
                        delivering reliable solutions for clients and companies.
                        </p>
                        
                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I build RESTful APIs using PHP/Laravel and Node.js.
                                 </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I design and manage relational databases with MySQL.
                                 </p>
                            </li>

                           

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                       I implement authentication and authorization systems.
                                 </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                       I handle payment integration and order management.
                                 </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                       I write clean, maintainable, and well-structured code.
                                 </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
             <div>
            <i className="uil uil-layer-group services__icon"></i>
            <h3 className="services__title">
                Full Stack <br /> Solutions
            </h3>
            </div>

                <span onClick={() => toggleTab(3)}
                className="services__button">
                    View More 
                    <i className="uil uil-arrow-right
                services__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil 
                        uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Full Stack Web  
                            Applications </h3>
                        <p className="services__modal-description">
                        Delivering complete web solutions from database to interface, with more than
                         4 years of experience managing projects end-to-end.
                        </p>
                        
                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I plan and architect full web applications from scratch.
                                 </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                       I connect front-end and back-end into one seamless product.
                                 </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I deploy and maintain live applications.
                                 </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I manage freelance projects independently, from requirements to delivery.
                                 </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I troubleshoot and scale existing applications.
                                 </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>            
        </div>
    </section>
  );
};

export default Services;