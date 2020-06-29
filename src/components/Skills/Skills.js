import React from 'react';
import './skills.css';
import java from '../../assets/images/java-seeklogo.com.svg';
import javascript from '../../assets/images/javascript-js-seeklogo.com.svg';
import python from '../../assets/images/python-seeklogo.com.svg';
import react from '../../assets/images/react-seeklogo.com.svg';
import vue from '../../assets/images/vuejs-seeklogo.com.svg';
import node from '../../assets/images/nodejs-seeklogo.com.svg';
import mongo from '../../assets/images/mongodb.svg';
import mysql from '../../assets/images/mysql-seeklogo.com.svg';
import sqlite from '../../assets/images/sqlite-icon.svg';
import git from '../../assets/images/git-seeklogo.com.svg';
// import sqlite from '../../assets/images/java-seeklogo.com.svg';
// import sqlite from '../../assets/images/java-seeklogo.com.svg';

export default function Skills() {

    return (
        <div className="skills" id="skills" >
            <div className="in-middle-skills" >
                <h3 className="section-title">Skills</h3>
                <div className="centered line"></div>
                <div className="content content--mlarge skill-set__flex">
                    <div className="container-skills">
                        <div className="tape">Programming Languages</div>
                        <ul className="skill-set__list">
                            <li className="skill-set__item">
                                <div className="skill-set__name">
                                    <div className="skill-set__icon"><img src={java} className="img-skills" alt="Java" /></div>

                                    <h4 className="small-title small-title--skill">Java</h4>
                                    {/* <p className="skill-set__year">3YEARS</p> */}
                                </div>
                                {/* <p className="small-title small-title--skill skill-set__high">85<span className="skill-set__ratio">%</span></p> */}
                                {/* </div> */}
                                <div className="skill-set__bar p90 js-scroll in java"></div>
                                {/* </div> */}
                            </li>
                            <li className="skill-set__item">
                                <div className="skill-set__detail">
                                    <div className="skill-set__meta">
                                        <div className="skill-set__name">
                                            <div className="skill-set__icon"><img src={javascript} className="img-skills" alt="JavaScript" /></div>
                                            <h4 className="small-title small-title--skill">JavaScript</h4>
                                            {/* <p className="skill-set__year">1YEARS</p> */}
                                        </div>
                                        {/* <p className="small-title small-title--skill ">80<span className="skill-set__ratio">%</span></p> */}
                                    </div>
                                    <div className="skill-set__bar p80 js-scroll in javascript"></div>
                                </div>
                            </li>
                            <li className="skill-set__item">
                                <div className="skill-set__detail">
                                    <div className="skill-set__meta">
                                        <div className="skill-set__name">
                                            <div className="skill-set__icon"><img src={python} className="img-skills" alt="Pyhton" /></div>
                                            <h4 className="small-title small-title--skill">Python</h4>
                                            {/* <p className="skill-set__year">HALF A YEAR</p> */}
                                        </div>
                                        {/* <p className="small-title small-title--skill">80<span className="skill-set__ratio">%</span></p> */}
                                    </div>
                                    <div className="skill-set__bar p80 js-scroll in python"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="container-skills">
                        <div className="tape">Database</div>
                        <ul className="skill-set__list">
                            <li className="skill-set__item">
                                <div className="skill-set__detail">
                                    <div className="skill-set__meta">
                                        <div className="skill-set__name">
                                            <div className="skill-set__icon"><img src={mysql} className="img-skills" alt="MySQL" /></div>
                                            <h4 className="small-title small-title--skill">MySQL</h4>
                                            {/* <p className="skill-set__year">3YEARS</p> */}
                                        </div>
                                        {/* <p className="small-title small-title--skill skill-set__high ">90<span className="skill-set__ratio">%</span></p> */}
                                    </div>
                                    <div className="skill-set__bar p90 js-scroll in mysql"></div>
                                </div>
                            </li>
                            <li className="skill-set__item">
                                <div className="skill-set__detail">
                                    <div className="skill-set__meta">
                                        <div className="skill-set__name">
                                            <div className="skill-set__icon"><img src={mongo} className="img-skills" alt="MongoDB" /></div>
                                            <h4 className="small-title small-title--skill ">MongoDB</h4>
                                            {/* <p className="skill-set__year">1YEARS</p> */}
                                        </div>
                                        {/* <p className="small-title small-title--skill">80<span className="skill-set__ratio">%</span></p> */}
                                    </div>
                                    <div className="skill-set__bar p80 js-scroll in mongo"></div>
                                </div>
                            </li>
                            <li className="skill-set__item">
                                <div className="skill-set__detail">
                                    <div className="skill-set__meta">
                                        <div className="skill-set__name">
                                            <div className="skill-set__icon"><img src={sqlite} className="img-skills" alt="SQLite" /></div>
                                            <h4 className="small-title small-title--skill">SQLite</h4>
                                            {/* <p className="skill-set__year">3YEARS</p> */}
                                        </div>
                                        {/* <p className="small-title small-title--skill skill-set__high ">90<span className="skill-set__ratio">%</span></p> */}
                                    </div>
                                    <div className="skill-set__bar p90 js-scroll in sqlite"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content content--mlarge skill-set__flex">
                    <div className="container-skills">
                        <div className="tape">Frameworks</div>
                        <ul className="skill-set__list">
                            <li className="skill-set__item">
                                <div className="skill-set__name">
                                    <div className="skill-set__icon"><img src={react} className="img-skills" alt="React" /></div>
                                    <h4 className="small-title small-title--skill">React</h4>
                                </div>
                                <div className="skill-set__bar p90 js-scroll in react"></div>
                            </li>
                            <li className="skill-set__item">
                                <div className="skill-set__name">
                                    <div className="skill-set__icon"><img src={vue} alt="VueJS" className="img-skills" /></div>
                                    <h4 className="small-title small-title--skill">VueJS</h4>
                                </div>
                                <div className="skill-set__bar p80 js-scroll in vue"></div>
                            </li>
                            <li className="skill-set__item">
                                <div className="skill-set__name">
                                    <div className="skill-set__icon"><img src={node} alt="NodeJS" className="img-skills" /></div>
                                    <h4 className="small-title small-title--skill">NodeJS</h4>
                                </div>
                                <div className="skill-set__bar p80 js-scroll in node"></div>
                            </li>
                        </ul>
                    </div>
                    <div className="container-skills">
                        <div className="tape">Software</div>
                        <ul className="skill-set__list">
                            <li className="skill-set__item">
                                <div className="skill-set__detail">
                                    <div className="skill-set__meta">
                                        <div className="skill-set__name">
                                            <div className="skill-set__icon"><img src={git} className="img-skills" alt="Git" /></div>
                                            <h4 className="small-title small-title--skill">Git</h4>

                                            {/* <p className="skill-set__year">3YEARS</p> */}
                                        </div>
                                        {/* <p className="small-title small-title--skill skill-set__high">90<span className="skill-set__ratio">%</span></p> */}
                                    </div>
                                    <div className="skill-set__bar p90 js-scroll in git"></div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div >

    );
}