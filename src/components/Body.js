import React from 'react'
import headshot from "../assets/img/headshot.jpg";
import healthyhelper from "../assets/img/healthyhelper.png";
import fastfingers from "../assets/img/fast-fingers.png";
import horiseon from "../assets/img/horiseon.jpg";
import staytuned from "../assets/img/Stay-tuned.png";
import resume from "../assets/resume/SMP Resume.pdf";

export default function Body() {
  return (

    <div>

        {/* <!-- SECTION: ABOUT ME --> */}
        <div id="about" className="about">

            <h2>About Me</h2>

            <div className="about-me">

                <div className="">
                <img src={headshot} alt="Sam Pettyjohn, happy to see you here"/>
                </div>

                <div className="bio-p">
                <p> 
                As an aspiring Full-Stack Web Developer with a background in Supply-Chain Operations, I enjoy analyzing problems, scaling solutions, and delivering results to the people who need them.
                <br></br>
                As someone who has always enjoyed technology, I am eager to learn and apply my skills where possible. Working in supply chain during the pandemic proved incredibly challenging, however I enjoyed solving the complex issues presented daily. I believe that both my experience in, and thorough understanding of, business operations will make me an asset to your team.
                <br></br>
                I am currently enrolled at Southern Methodist University in Dallas, TX, where I am fully dedicating my time to build a solid foundation in full-stack development by attending their coding bootcamp. Outside of class you can find me traveling the country with my wife (a nurse), cooking, gaming, and walking my dog, Obi.
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
                    <h3>Business Occupations</h3>
                    <h4>Bachelor of Applied Art and Science, UT Tyler</h4>
                    </div>
                    <p>
                        Unique program that allowed for application of college-level learning acquired through work experience. Coursework focus: Operations Management, Supply Chain & Logistics, and Enterprise Resource Planning (ERP).
                    </p>
                    </div>
                </div>

                <br></br>

                {/* <!-- Full Stack Web Dev Bootcamp --> */}
                <div class="curriculum">
                    <div class="bootcamp">
                    <div class="container-header">
                    <h3>Coding Bootcamp</h3>
                    <h4>Certificate Program, SMU</h4>
                    </div>
                    <p>
                    Rigorous curriculum that covers a Full Stack: HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, progressive web apps, agile methodology, computer science, database theory, MongoDB, MySQL, Git, Python, C#, and AWS.
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

            <div className="work">
                {/* <!-- Healthy Helper --> */}
                <div className="experience">
                    <a href="https://sam-pettyjohn.github.io/healthy-helper/"><img src={healthyhelper} alt="snapshot of the landing for healthy helper"/></a>
                    <div className="container-header">
                    <h3>Healthy Helper</h3>
                    </div>
                    <p>Website to inspire users to find health-conscious meal recipes based on the ingredients found in their kitchen. </p>
                </div>

                {/*<!-- Run Buddy --> */}
                <div className="experience">
                    <a href="https://fast-fingers-gp2.herokuapp.com/"><img src={fastfingers} alt="snapshot of the landing page for fast-fingers"/></a>
                    <div className="container-header">
                    <h3>Fast Fingers!</h3>
                    </div>
                    <p>80's inspired typing game that aims to enhance typing skill and speed.</p>
                </div>

                <br></br>

                {/* <!-- Horiseon Refactor --> */}
                <div className="experience">
                    <a href="https://sam-pettyjohn.github.io/horiseon-seo/"><img src={horiseon} alt="snapshot of the landing page for horiseon" /></a>
                    <div className="container-header">
                    <h3>Horiseon</h3>
                    </div>
                    <p>Refactored code to follow accessibility standards as well as optimization for search engines.</p>
                </div>

                <br></br>

                {/* <!-- More to Come! --> */}
                <div className="experience">
                    <a href="https://github.com/sam-pettyjohn"><img src={staytuned} alt="stylized text that says 'stay tuned'"/></a>
                    <div className="container-header">
                    <h3>... and more to come</h3>
                    </div>
                    <p>I will be adding projects, both personal and professional, over the coming months. Stay tuned! </p>
                </div>
            
                {/* <!-- Resume --> */}
                <div className="resume">
                    <h4>Want to see a resume?</h4>
                    <a href={resume}>Take a Look</a>
                </div>
            </div>
        </div>
        {/* <!-- END SECTION: PROJECTS --> */}

    </div>
  )
}