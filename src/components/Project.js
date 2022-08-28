import React, { useState } from "react";
import headshot from "../assets/img/headshot.jpg";
import resume from "../assets/resume/SMP Resume.pdf";

// Project Image Imports

import healthyhelperv2 from "../assets/img/landingpage.png";
import bse from "../assets/img/bse.gif";
// import reactportfolio from "../assets/img/";
import budgettracker from "../assets/img/budgettracker.png";
import socialnetworkAPI from "../assets/img/socialnetworkapi.gif"; 
// import regextutorial from "../assets/img/RegexTutorial.png";
import fastfingers from "../assets/img/fast-fingers.png";
import randomphotogenerator from "../assets/img/randomphotogen.png";
import ecommercebackend from "../assets/img/ecommerce.gif";
import employeetracker from "../assets/img/employeetracker.png";
import notetaker from "../assets/img/note-taker.png";
import teamprofilegenerator from "../assets/img/teamprofilegen.png";
import readmegenerator from "../assets/img/readmegen.jpeg";
// import healthyhelper from "../assets/img/healthyhelper.gif";
import weatherdashboard from "../assets/img/weatherdashboard.png";
import dailyplanner from "../assets/img/dailyplanner.gif";
import codequiz from "../assets/img/code-quiz.gif";
import passwordgenerator from "../assets/img/passwordgen.png";
// import portfolioV1 from "../assets/img/portfolioV1.png";
// import horiseonrefactor from "../assets/img/horiseon.jpg";



function Main() {

    // add background color when scrolling to make reading text easier
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    };

    window.addEventListener('scroll', changeColor);

    // create development project object to contain all project details
    let devObjects = [

        // Healthy Helper V2
        {
            title: "Healthy Helper V2",
            description: "Help inspire users to find health-conscious meal recipes based on the ingredients found in their kitchen.",

            thumbnail: healthyhelperv2,
            altTag: "landing page for healthy helper v2",
            
            projectURL: "https://healthy-helper-v2.herokuapp.com/",
            githubURL: "https://github.com/sam-pettyjohn/healthy-helper-v2",
        },

        // book search engine
        {
            title: "Book Search Engine",
            description: "Taking a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server.",

            thumbnail: bse,
            altTag: "demo of the Book Search Engine",
            
            projectURL: "book-search-engine-smp.herokuapp.com",
            githubURL: "https://github.com/sam-pettyjohn/book-search-engine",
        },

        // // react portfolio
        // {
        //     title: "React.JS Portfolio",
        //     description: "",

        //     thumbnail: "WIP",
        //     altTag: "WIP",
            
        //     projectURL: "WIP",
        //     githubURL: "https://github.com/sam-pettyjohn/react-portfolio",
        // },

        // budget tracker
        {
            title: "Budget Tracker",
            description: "Updating an existing budget tracker application to allow for offline access and functionality by utilizing Progressive Web Application (PWA) features!",

            thumbnail: budgettracker,
            altTag: "",
            
            projectURL: "budget-tracker-smp.herokuapp.com/",
            githubURL: "https://github.com/sam-pettyjohn/budget-tracker",
        },

        // social network API
        {
            title: "Social Network API",
            description: "API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.",

            thumbnail: socialnetworkAPI,
            altTag: "",
            
            projectURL: "https://drive.google.com/file/d/10jHoi8E-RsvdxIHhv3JUK4c7UFG115Mf/view",
            githubURL: "https://github.com/sam-pettyjohn/social-network-api",
        },

        // // regex tutorial
        // {
        //     title: "Regex Tutorial",
        //     description: "A guide to understanding regular expression matching in URLs.",

        //     thumbnail: regextutorial,
        //     altTag: "",
            
        //     projectURL: "https://github.com/sam-pettyjohn/regex-tutorial/blob/main/gist-template.md",
        //     githubURL: "https://github.com/sam-pettyjohn/regex-tutorial",
        // },

        // fast fingers (GP2)
        { 
            title: "Fast-Fingers",
            description: "80's inspired typing game that aims to enhance typing skill and speed.",

            thumbnail: fastfingers,
            altTag: "80's inspired typing game that aims to enhance typing skill and speed.",
            
            projectURL: "https://fast-fingers-gp2.herokuapp.com/",
            githubURL: "https://github.com/sam-pettyjohn/fast-fingers",
        },

        // random photo generator
        {
            title: "Random Photo Generator",
            description: "A Swift iOS application that randomly pulls images from a database! ",

            thumbnail: randomphotogenerator,
            altTag: "",
            
            // TODO: Record a demo video for projectURL
            projectURL: "https://github.com/sam-pettyjohn/random-photo-generator",
            githubURL: "https://github.com/sam-pettyjohn/random-photo-generator",
        },

        // ecommerce back-end
        {
            title: "E-Commerce Back-End Database",
            description: "Custom built back end for an e-commerce site using Express.js API and configured to use Sequelize to interact with a MySQL database.",

            thumbnail: ecommercebackend,
            altTag: "",
            
            projectURL: "https://github.com/sam-pettyjohn/ecommerce-back-end",
            githubURL: "https://github.com/sam-pettyjohn/ecommerce-back-end",
        },

        // employee tracker
        {
            title: "Employee Tracker",
            description: "A command-line application to manage a company's employee database!",

            thumbnail: employeetracker,
            altTag: "",
            
            projectURL: "https://drive.google.com/file/d/1yasPgretrYf7zHobY-B8rR-YXFW8FUO9/view",
            githubURL: "https://github.com/sam-pettyjohn/employee-tracker",
        },

        // note taker
        {
            title: "Note Taker",
            description: "Web application that can be used to write and save notes.",

            thumbnail: notetaker,
            altTag: "",
            
            projectURL: "https://intense-beach-59321.herokuapp.com/",
            githubURL: "https://github.com/sam-pettyjohn/note-taker",
        },

        // team profile generator
        {
            title: "Team Profile Generator",
            description: "A Node.js command-line application that takes information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.",

            thumbnail: teamprofilegenerator,
            altTag: "",
            
            projectURL: "https://drive.google.com/file/d/1LAf2hnAb_RY4jH9JgINoUvmLSpP49qo_/view",
            githubURL: "https://github.com/sam-pettyjohn/team-profile-generator",
        },

        // read me generator
        {
            title: "README.md Generator",
            description: "A README generator to quickly create a professional README.md file for a new project.",

            thumbnail: readmegenerator,
            altTag: "",
            
            projectURL: "https://drive.google.com/file/d/1sulwouYGrnuaWbgzK6DsHvfaDoEZCRkF/view",
            githubURL: "https://github.com/sam-pettyjohn/read-me-generator",
        },

        // // healthy helper (GP1)
        // {
        //     title: "Healthy Helper",
        //     description: "Help inspire users to find health-conscious meal recipes based on the ingredients found in their kitchen. ",

        //     thumbnail: healthyhelper,
        //     altTag: "",
            
        //     projectURL: "sam-pettyjohn.github.io/healthy-helper/",
        //     githubURL: "https://github.com/sam-pettyjohn/healthy-helper",
        // },

        // weather dashboard
        {
            title: "Weather Dashboard",
            description: "Weather dashboard that will allow user to see the weather outlook for multiple cities.",

            thumbnail: weatherdashboard,
            altTag: "",
            
            projectURL: "https://sam-pettyjohn.github.io/weather-dashboard/",
            githubURL: "https://github.com/sam-pettyjohn/weather-dashboard",
        },

        // daily planner
        {
            title: "Daily Planner",
            description: "A simple calendar application that allows a user to save events for each hour of the day. ",

            thumbnail: dailyplanner,
            altTag: "",
            
            projectURL: "https://github.com/sam-pettyjohn/daily-planner",
            githubURL: "https://sam-pettyjohn.github.io/daily-planner/",
        },

        // code quiz
        {
            title: "Code Quiz",
            description: "A JavaScript coding assessment of multiple-choice questions.",

            thumbnail: codequiz,
            altTag: "",
            
            projectURL: "sam-pettyjohn.github.io/code-quiz/",
            githubURL: "https://github.com/sam-pettyjohn/code-quiz",
        },

        // password generator
        {
            title: "Random Password Generator",
            description: "Application that the user can use to generate a random password based on criteria they’ve selected. ",

            thumbnail: passwordgenerator,
            altTag: "",
            
            projectURL: "https://sam-pettyjohn.github.io/password-generator/",
            githubURL: "https://github.com/sam-pettyjohn/password-generator",
        },

        // // portfolio OG
        // {
        //     title: "Portfolio v1",
        //     description: "Personally crafted website to display my front-end skills [retired]",

        //     thumbnail: portfolioV1,
        //     altTag: "",
            
        //     projectURL: "https://sam-pettyjohn.github.io/portfolio/",
        //     githubURL: "https://github.com/sam-pettyjohn/portfolio",
        // },

        // // horiseon seo refactor
        // {
        //     title: "Horiseon Code Refactor",
        //     description: "Codebase refactor that follows accessibility standards for the site to be optimized for search engines.",

        //     thumbnail: horiseonrefactor,
        //     altTag: "",
            
        //     projectURL: "https://github.com/sam-pettyjohn/horiseon-seo",
        //     githubURL: "https://github.com/sam-pettyjohn/horiseon-seo",
        // }

    ];

    return (
        <main>
            <div className={color ? "about-bg" : "body"}>
            {/* <!-- SECTION: ABOUT ME --> */}
            <div id="about" className="about">

                <h2>About Me</h2>

                <div className="about-me">

                    <div className="bio-img">

                            <img src={headshot} alt="Sam Pettyjohn, happy to see you here"/>
                        
                    </div>

                    <div className="bio-p">
                        <p> 
                            As a Full Stack Developer with a background in 
                            Supply-Chain Operations, I enjoy analyzing problems, scaling 
                            solutions, and delivering results to the people who need them.
                            <br></br>
                            <br></br>
                            As someone who has always enjoyed technology, I am eager to 
                            learn and apply my skills where possible. Working in the healthcare supply 
                            chain during the pandemic proved incredibly challenging; 
                            however, solving the complex issues presented daily was rewarding and impactful. 
                            I believe that my experience in, and thorough understanding 
                            of, business operations allows for a holistic perspective on projects and organizational interests.
                            <br></br>
                            <br></br>
                            I am a graduate of Southern Methodist University in
                            Dallas, TX, where I developed a solid foundation in JavaScript, database theory, and MERN. 
                            Currently I am honing my skill in C++ and Java.
                            Outside of work you can find me traveling 
                            the country, cooking, coding, and 
                            walking my dog, Obi.
                        </p>
                    </div>
                    
                </div>
            </div>

            {/* <!-- SUB_SECT: EDUCATION --> */}
            <div class="education">

                <h2>Education</h2>

                <div class="school">

                    {/* <!-- Bachelors --> */}
                    <div class="curriculum">
                        <div class="uttyler">
                        <div class="container-header">
                        <h3>Business Administration & Management</h3>
                        <h5>Bachelor of Applied Art and Science, University of Texas at Tyler</h5>
                        </div>
                            <p>
                                Unique program that allowed for application of college-level 
                                learning acquired through work experience. Coursework focus: 
                                Operations Management, Supply Chain & Logistics, and 
                                Enterprise Resource Planning (ERP).
                            </p>
                        </div>
                    </div>

                    <br></br>

                    {/* <!-- Full Stack Web Dev Bootcamp --> */}
                    <div class="curriculum">
                        <div class="bootcamp">
                        <div class="container-header">
                        <h3>Full Stack Developer, Computer Software Engineering</h3>
                        <h5>Professional Education Certification, Southern Methodist University</h5>
                        </div>
                            <p>
                            Full Stack Development Bootcamp focusing on: HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, progressive web apps, agile methodology, computer science, database theory, MongoDB, MySQL, Git, and more.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
            {/* <!-- END SUB_SECT: EDUCATION --> */}
            {/* <!-- END SECTION: ABOUT ME  --> */}

            {/* <!-- SECTION: PROJECTS --> */}
            <div id="projects" className="projects">

                <h2>Projects</h2>

                <h6><i>
                    Hi friend - If you haven't heard, after a decade Heroku is removing their free hosting tier, which will affect many developers (including myself). 
                    While this change isn't scheduled to take effect until Nov. 28, 2022, I am evaluating other cost-effective hosting platforms and hoping to be ahead of the curve. 
                    Thank you for understanding!
                    </i></h6>
                    
                {/* <!-- ALL PROJECT OBJECTS --> */}
                
                <div class="container-fluid">
                    <div className="row justify-content-around">
                    {devObjects.map((card) => (
                        <>
                        
                            <div className="experience col-3">
                                <a href={card.projectURL}>
                                    <img 
                                        src={card.thumbnail}
                                        alt={card.altTag}
                                    />
                                </a>
                                <div className="container-header">
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        
                        </>
                    ))}
                    </div>   
                </div> 
            </div>

            {/* <!-- RESUME --> */}
            <div id= "resume" className="resume">
                    <a href={resume}>View my resume here!</a>
            </div>
            {/* <!-- END SECTION: PROJECTS --> */}
            </div>
        </main>
    )

}

export default Main;