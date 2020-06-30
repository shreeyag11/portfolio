
import React from 'react';
import './education.scss';

export default function Education() {

    return (
        <div className="education" id="education">
            <div className="in-middle_education">
                <h3 className="section-title" >Academics</h3>
                <div className="centered line"></div>
                <section class="timeline">
                    <ul>
                        <li>
                            <div class="content" >
                                <div className="acad-title">University of North Carolina at Charlotte</div>
                                <div>Charlotte, North Carolina, USA<br />
                                August 2019 - Present<br />
                                Master of Science in Computer Science<br />
                                GPA: 4.0/4.0<br />
                                Related Courses: Algorithm and Data Structures, Databse Systems, Network based application development, Cloud Computing, Software system and design implementation, Knowledge discovery in databases.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="content">
                                <div className="acad-title">University of Mumbai</div>
                                <div>Mumbai, Maharashtra, India<br />
                                August 2015 - May 2019<br />
                                Bachelor of Engineering in Information Technology<br />
                                GPA: 4.0/4.0<br />
                                Related Courses: Software Engineering, Object Oriented Programming Methodology, Advance Database Management Systems, Web Programming, Cloud Computing.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="content">
                                <div className="acad-title">TP Bhatia College of Science</div>
                                <div>Mumbai, Maharashtra, India<br />
                                August 2013 - May 2015<br />
                                Master of Science in Computer Science<br />
                                GPA: 4.0/4.0<br />
                                </div>
                            </div>
                        </li>
                        <li></li>

                    </ul>
                </section>



            </div>
        </div>
    );
}
