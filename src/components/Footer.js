import React, { useState } from 'react';


export default function Footer() {

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

  return (
    <div>
        
        {/* <!-- SECTION: CONTACT ME --> */}
        <div className={color ? "about-bg" : "body"}>
        <section id="contact" className="contact">
            {/* <h2>Contact Me</h2> */}

            {/* <!-- WIP: CONTACT FORM --> */}

            {/* <p>
                Thanks for stopping by. Want to connect? Reach me on the platforms below.
                <i className='fa fa-arrow-down'></i>
            </p > */}
            
        </section>
        
        
        <br></br>
        </div>
        {/* <!-- FOOTER --> */}
        <footer>

            <div clasNames="icons">
                {/* <!-- Slack Icon--> */}
                <a className="slack" href="https://acmeco.slack.com/team/U0329NR0S9M">
                <i class="fa-brands fa-slack fa-2x"></i>
                </a>
                {/* <!-- LinkedIn Icon --> */}
                <a className="linkedin" href="https://www.linkedin.com/in/samuel-pettyjohn-0730819a/">
                <i class="fa-brands fa-linkedin fa-2x"></i>
                </a>
                {/* <!-- GitHub Icon --> */}
                <a className="github" href="https://github.com/sam-pettyjohn">
                <i class="fa-brands fa-github fa-2x"></i>
                </a>
            </div>

        </footer>
    
    {/* <!-- Designed and Developed by Sam Pettyjohn --> */}
   
   </div>
  )
}
