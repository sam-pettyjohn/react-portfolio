import React from 'react'


export default function Footer() {
  return (
    <div>
        
        {/* <!-- Section: Contact Me --> */}

        <section id="contact" className="contact">
            <h2>Contact Me</h2>

            <p>
                Thanks for stopping by. Want to connect? Reach me on the platforms below.
                <i className='fa fa-arrow-down'></i>
            </p >
            
        </section>
        
        <br></br>
    
        {/* <!-- Footer --> */}
        <footer>

            <div clasNames="icons">
                {/* <!-- Slack Icon--> */}
                <a className="slack" href="https://acmeco.slack.com/team/U0329NR0S9M">
                <i class="fa-brands fa-slack"></i>
                </a>
                {/* <!-- LinkedIn Icon --> */}
                <a className="linkedin" href="https://www.linkedin.com/in/samuel-pettyjohn-0730819a/">
                <i class="fa-brands fa-linkedin"></i>
                </a>
                {/* <!-- GitHub Icon --> */}
                <a className="github" href="https://github.com/sam-pettyjohn">
                <i class="fa-brands fa-github"></i>
                </a>
            </div>

        </footer>
    
    {/* <!-- Designed and Developed by Sam Pettyjohn --> */}
   
   </div>
  )
}
