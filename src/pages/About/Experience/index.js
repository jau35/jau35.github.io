import React, { Component } from 'react';

class Experience extends Component {
    render() {
        return (
            <section id="experience" className="job-area offwhite section-gap-top section-gap-bottom-90">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Job History</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div>
                            <div className="single-job">
                                <div className="top-sec d-flex justify-content-between">
                                    <div className="top-left">
                                        <h4>Full Stack Software Engineer</h4>
                                        <h5>CardConnect</h5>
                                        <p>King of Prussia, PA</p>
                                    </div>
                                    <div className="top-right">
                                        <div className="primary-btn" data-text="Jul '19 to Present">
                                            <span>J</span><span>u</span><span>l</span>
                                            <span>'</span><span>1</span><span>9</span>
                                            <span>t</span><span>o</span>
                                            <span>P</span><span>r</span><span>e</span><span>s</span><span>e</span><span>n</span><span>t</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-sec wow fadeIn" data-wow-duration="2s">
                                    As a member of the CoPilot / CardPointe development team, I contribute to
                                    the development of CardConnect's two main user-facing applications. I work
                                    across the full stack, making changes to both an AngularJs frontend and
                                    a Java backend using Spring Framework.
                                    </div>
                            </div>
                        </div>

                        <div>
                            <div className="single-job">
                                <div className="top-sec d-flex justify-content-between">
                                    <div className="top-left">
                                        <h4>Software Development Co-op</h4>
                                        <h5>Bentley Systems</h5>
                                        <p>Philadelphia, PA</p>
                                    </div>
                                    <div className="top-right">
                                        <div className="primary-btn" data-text="Apr to Sept '18">
                                            <span>A</span><span>p</span><span>r</span>
                                            <span>t</span><span>o</span>
                                            <span>S</span><span>e</span><span>p</span><span>t</span>
                                            <span>'</span><span>1</span><span>8</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-sec wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                                    As a member of iModel Tools (formerly EC Tech), I contributed to the
                                    EC library, a core internal C++ library used widely within Bentley's
                                    software products. I especially worked on integrating breaking changes into the
                                    library, conducting thorough testing of consuming libraries and applications to
                                    ensure a smooth transition as the new changes were rolled out. Additionally, in
                                    support of the iModel 2.0 Early Access Program, I designed and implemented
                                    the validation and release process for an evolving set of Base Infrastructure Schemas
                                    (BIS), including integrating schema validation and difference audit tools into an
                                    automated workflow. In order to visualize and understand the validation status of the
                                    BIS schemas, I created a dashboard enabling schema domain experts to quickly identify
                                    schemas that are failing validation, access error logs, and view an audit of changes
                                    over time, including which changes introduced validation errors.
                                    </div>
                            </div>
                        </div>

                        <div>
                            <div className="single-job">
                                <div className="top-sec d-flex justify-content-between">
                                    <div className="top-left">
                                        <h4>Software Development Co-op</h4>
                                        <h5>Bentley Systems</h5>
                                        <p>Philadelphia, PA</p>
                                    </div>
                                    <div className="top-right">
                                        <div className="primary-btn" data-text="Apr to Sept '17">
                                            <span>A</span><span>p</span><span>r</span>
                                            <span>t</span><span>o</span>
                                            <span>S</span><span>e</span><span>p</span><span>t</span>
                                            <span>'</span><span>1</span><span>7</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-sec wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                                    As a member of Strategic Technology Advancement, I contributed to a cloud-based
                                    model synchronization application  supporting the ongoing partnership between
                                    Bentley and Siemens. The application, which is based on the microservices architecture,
                                    was largely a proof of concept, so I spent a lot of time investigating key components of
                                    Azure Service Fabric and implementing them into the project. This including such things as
                                    application scaling and data backup to ensure reliability, as well as conducting a storage
                                    cost analysis to determine the most cost-effective approach to designing and implementing the
                                    application. Although the project was a proof of concept, we invested significant effort into
                                    testing the microservices. I utilized a test-driven development approach to write unit tests
                                    with mocked components, and tested the interaction between microservices with a suite of extensive
                                    integration tests.
                                    </div>
                            </div>
                        </div>

                        <div>
                            <div className="single-job">
                                <div className="top-sec d-flex justify-content-between">
                                    <div className="top-left">
                                        <h4>Software Development Co-op</h4>
                                        <h5>Susquehanna International Group</h5>
                                        <p>Bala Cynwyd, PA</p>
                                    </div>
                                    <div className="top-right">
                                        <div className="primary-btn" data-text="Apr to Sept '16">
                                            <span>A</span><span>p</span><span>r</span>
                                            <span>t</span><span>o</span>
                                            <span>S</span><span>e</span><span>p</span><span>t</span>
                                            <span>'</span><span>1</span><span>6</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-sec wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                                    As a member of the Monitoring, Management, and Automation Development team,
                                    I contributed to the development of internal applications enabling employees to
                                    monitor and manage technology assets. In particular, one interesting project I
                                    worked on involved designing and implementing a RESTful API to enable DC Ops to automate
                                    the desktop provisioning process, which was previously a manual process. I also
                                    implemented several changes to a critical server inventory website used by
                                    hundreds of employees throughout the company. Additionally, I set up a CI/CD process
                                    to automate the build, test, and packaging of over 80 applications, and through my
                                    own initiative, protoyped and configured the infrastructure to automate the deployment
                                    of software artifacts. The benefits of this work were immediately realized as it greatly
                                    improved the efficiency of the entire team, so much so that other teams became interested
                                    in adopting our workflow.
                                    </div>
                            </div>
                        </div>
                        <div>
                            <div className="single-job">
                                <div className="top-sec d-flex justify-content-between">
                                    <div className="top-left">
                                        <h4>Software Engineering Intern</h4>
                                        <h5>Siemens Healthineers</h5>
                                        <p>Plymouth Meeting, PA</p>
                                    </div>
                                    <div className="top-right">
                                        <div className="primary-btn" data-text="Jul to Sept '15">
                                            <span>J</span><span>u</span><span>l</span>
                                            <span>t</span><span>o</span>
                                            <span>S</span><span>e</span><span>p</span><span>t</span>
                                            <span>'</span><span>1</span><span>5</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-sec wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                                    After my freshman year of college, I interned at Siemens Healthineers (formerly Siemens
                                    Healthcare) in their Ultrasound division. I worked on projects specifically pertaining to
                                    the Acuson Freestyle. One such project involved developing an encryption program for the
                                    generation and validation of system license keys, which would enable customers to unlock
                                    additional features of the system upon entering a provided key. I also spent a significant
                                    effort rewriting existing system configuration scripts that had grown overly complicated
                                    over time. I set up a database to store configuration parameters and simplify the scripts,
                                    both improving the maintainability and reducing overall configuration time by half.
                                    Additionally, I contributed to minor UI changes and assisted with system testing efforts.
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;