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
                        Back-End <br /> Development
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

                        <h3 className="services__modal-title">Back-End  
                        Development</h3>
                        <p className="services__modal-description">
                      Building reliable web applications and server-side solutions 
                      using PHP and Laravel, with a focus on clean code and business logic.
                        </p>
                        
                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Developing back-end functionality using PHP.
                                 </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Building web applications with Laravel.
                                 </p>
                            </li>

                           
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                       Implementing business logic and CRUD operations.
                                 </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Creating and integrating RESTful APIs.
                                 </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                      Writing clean and maintainable server-side code.
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
                    Database <br /> Development
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

                        <h3 className="services__modal-title">Database Development</h3>
                        <p className="services__modal-description">
                       Designing and managing relational databases to support 
                       efficient and reliable web applications.
                        </p>
                        
                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Designing relational database schemas.
                                 </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Writing and managing MySQL queries.
                                 </p>
                            </li>

                           

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                       Handling data relationships and database operations.
                                 </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                       Managing product, user, and order data.
                                 </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                      Managing database operations for web applications.
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
                Web Application <br /> Solutions
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

                        <h3 className="services__modal-title">Web Application Solutions  
                             </h3>
                        <p className="services__modal-description">
                       Delivering complete back-end solutions for web applications,
                        from database design to API delivery and deployment.
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
                                       Building content management systems.
                                 </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                       Implementing shopping cart and order logic.
                                 </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Managing projects from requirements through deployment.
                                 </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle 
                                 services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Delivering solutions from requirements through deployment
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