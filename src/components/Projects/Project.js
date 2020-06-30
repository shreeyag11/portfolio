import React from 'react'
import './projects.scss';
import meetup from '../../assets/images/projects/meetup.jpg';
import pigame from '../../assets/images/projects/pigame.PNG'
import githubFinder from '../../assets/images/projects/github-finder.PNG'
import forkify from '../../assets/images/projects/forkify.PNG'
import leetcode from '../../assets/images/projects/leetcode.PNG'
import budgety from '../../assets/images/projects/budgety.PNG'
import smartcity from '../../assets/images/projects/smartcity.jpg'
import tcetkiosk from '../../assets/images/projects/tcetkiosk.PNG'


function Project() {
    return (
        <div>
            <div className="projects"  id="projects">
                <div className="in-middle_projects">
                    <h3 className="section-title">Projects</h3>
                    <div className="centered line"></div>
            <div className="wrapper">
                <div className="pcard">
                    <input type="checkbox" id="card1" className="more" aria-hidden="true" />
                    <div className="content">
                        <div className="front" style={{
                            backgroundImage: `url(${meetup})`
                        }}>
                            <div className="inner">
                                <h2>Women Empowerment</h2>
                                <label htmlFor="card1" className="button" aria-hidden="true">
                                    Details
                        </label>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <div className="info">
                                    <b>Tags: HTML5, CSS, JavaScript, NodeJS, MongoDB</b>
                                </div>
                                <div className="description">
                                    <p>Developed web-based artifacts for a meetup-application to render women empowerment events in the form of connections,
                                    user can login and respond to respective events as well as create a new event. This is implemented
                                    on NodeJS, HTML5 for front-end, dynamic content to website is stored in MongoDB and Mongoose is the
                                           npm API used to serve requests.</p>
                                </div>
                                <div className="project-header">
                                    <div className="location">January 2020 – April 2020</div>

                                </div>
                                <label htmlFor="card1" className="button return" aria-hidden="true">
                                    <i className="fa fa-arrow-left"></i>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pcard">
                    <input type="checkbox" id="card3" className="more" aria-hidden="true" />
                    <div className="content">
                        <div className="front" style={{
                            backgroundImage: `url(${githubFinder})`}}>
                            <div className="inner">
                                <h2>Github Finder</h2>
                                <label htmlFor="card3" className="button" aria-hidden="true">
                                    Details
                                </label>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <div className="info">
                                    <b>Tags: React, Netlify, Hooks, Context, GitHub API</b> 
                                </div>
                                <div className="description">
                                    <p>A nicer look at your GitHub profile and repositories. 
                                    It searches for all the Github users using the text inputted by the user in the form. It returns all the users matching the string in a grid format.
                                     Clicking on the more tab takes the user to a custom made page with the vital stats.
                                    </p>
                                </div>
                                <div className="project-header">
                                    <div className="location">January 2020 – April 2020</div>

                                </div>
                                <label htmlFor="card3" className="button return" aria-hidden="true">
                                    <i className="fa fa-arrow-left"></i>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>


              
                <div className="pcard">
                    <input type="checkbox" id="card4" className="more" aria-hidden="true" />
                    <div className="content">
                        <div className="front" style={{
                            backgroundImage: `url(${forkify})`
                        }}>
                            <div className="inner">
                                <h2>Forkify</h2>
                                <label htmlFor="card4" className="button" aria-hidden="true">
                                    Details
                        </label>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <div className="info">
                                    <b> Tags: HTML5, CSS, Vanilla JavaScript</b>
                                </div>
                                <div className="description">
                                    <p>A recipe searching application in which you can search over 1,000,000 recipes.
                                        The recipes actually come from a real world API that I have used.
                                        You can search a recipe and the recipe again loads it from the external API.
                                        You can also adjust the number of servings and the amount of ingredients then automatically adjusts.
                                        You can then add these ingredients to a shopping list.
                                        You can adjust the number of any ingredient in the shopping list or delete any particular item.
                                        You can save these recipes in your favorites by hitting the like button on the recipe page.
                                    </p>
                                </div>
                                <div className="project-header">
                                    <div className="location">May 2020</div>
                                </div>
                                <label htmlFor="card4" className="button return" aria-hidden="true">
                                    <i className="fa fa-arrow-left"></i>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pcard">
                    <input type="checkbox" id="card5" className="more" aria-hidden="true" />
                    <div className="content">
                        <div className="front" style={{
                            backgroundImage: `url(${budgety})`
                        }}>
                            <div className="inner">
                                <h2>Budgety</h2>
                                <label htmlFor="card5" className="button" aria-hidden="true">
                                    Details
                        </label>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <div className="info">
                                    <b> Tags: HTML5, CSS, Vanilla JavaScript</b>
                                </div>
                                <div className="description">
                                    <p>Budgety is a simple budget tracker app.
It allows user to input incomes &amp; expenses and see how the complete budget changes due to custom insertions.
It keep tracks of percentage expense done with respect to the income.

                                    </p>
                                </div>
                                <div className="project-header">
                                    <div className="location">May 2020</div>
                                </div>
                                <label htmlFor="card5" className="button return" aria-hidden="true">
                                    <i className="fa fa-arrow-left"></i>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="pcard">
                    <input type="checkbox" id="card2" className="more" aria-hidden="true" />
                    <div className="content">
                        <div className="front" style={{
                            backgroundImage: `url(${pigame})`
                        }}>
                            <div className="inner">
                                <h2>Pig game</h2>
                                <label htmlFor="card2" className="button" aria-hidden="true">
                                    Details
                                </label>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className="inner">
                                        <div className="info">
                                            <b> Tags: HTML5, CSS, Vanilla JavaScript</b>
                                        </div>
                                        <div className="description">
                                            <p>Pig Game, commonly called Pig Dice Game is a JavaScript based game, made for fun and time pass in leisure.
                                                
                                            </p>
                                        </div>
                                        <div className="project-header">
                                            <div className="location">May 2020</div>
                                        </div>
                                        <label htmlFor="card2" className="button return" aria-hidden="true">
                                            <i className="fa fa-arrow-left"></i>
                                        </label>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="pcard">
                    <input type="checkbox" id="card6" className="more" aria-hidden="true" />
                    <div className="content">
                        <div className="front" style={{
                            backgroundImage: `url(${tcetkiosk})`
                        }}>
                            <div className="inner">
                                <h2>TCET Kiosk System</h2>
                                <label htmlFor="card6" className="button" aria-hidden="true">
                                    Details
                        </label>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <div className="info">
                                    <b> Tags: Android Studio, Google Firebase, Java</b>
                                </div>
                                <div className="description">
                                    <p>This kiosk system is and Android application which is used to automate the generation of letters for an institute
                                         where anyone who had the app could interact with the administration using an 
                                         appropriate formal letter format. It will automate the letter generation and will help to track 
                                         the letter thus helping us to save the time. This system will be helpful for the admin office as 
                                         they can maintain the record of the letters 
                                        from students on the computer system rather than maintaining the hardcopies.
                                    </p>
                                </div>
                                <div className="project-header">
                                    <div className="location">May 2020</div>
                                </div>
                                <label htmlFor="card6" className="button return" aria-hidden="true">
                                    <i className="fa fa-arrow-left"></i>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pcard">
                    <input type="checkbox" id="card7" className="more" aria-hidden="true" />
                    <div className="content">
                        <div className="front" style={{
                            backgroundImage: `url(${smartcity})`
                        }}>
                            <div className="inner">
                                <h2>Smart City</h2>
                                <label htmlFor="card7" className="button" aria-hidden="true">
                                    Details
                        </label>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <div className="info">
                                    <b> Tags: Android Studio, Google Firebase, Java</b>
                                </div>
                                <div className="description">
                                    <p>Participated in Inter-collegiate project competition on Smart city. 
                                        This is an Android application which covers the Society Management, Women Safety, Health and Empowerment,
                                         and a Climate Control and Disaster Management Module. We consider this application as an all in one 
                                         Smart City Working Application for the citizens. The aim of this project
                                         is to have a Hassle Free all in one application to help citizens’ life their life a better way. 
                                    </p>
                                </div>
                                <div className="project-header">
                                    <div className="location">May 2020</div>
                                </div>
                                <label htmlFor="card7" className="button return" aria-hidden="true">
                                    <i className="fa fa-arrow-left"></i>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pcard">
                    <input type="checkbox" id="card8" className="more" aria-hidden="true" />
                    <div className="content">
                        <div className="front" style={{
                            backgroundImage: `url(${leetcode})`
                        }}>
                            <div className="inner">
                                <h2>Leetcode</h2>
                                <label htmlFor="card8" className="button" aria-hidden="true">
                                    Details
                        </label>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <div className="info">
                                    <b> Tags: Java, Algorithm and Data Structures</b>
                                </div>
                                <div className="description">
                                    <p>Leetcode is a platform where I practise my coding skills.
                                        Mostly I use the programming language Java. I love to solve some challenging 
                                        questions to enhance my coding skills.
                                    </p>
                                </div>
                                <div className="project-header">
                                    <div className="location">May 2020</div>
                                </div>
                                <label htmlFor="card8" className="button return" aria-hidden="true">
                                    <i className="fa fa-arrow-left"></i>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
        </div>
    )
}

export default Project
