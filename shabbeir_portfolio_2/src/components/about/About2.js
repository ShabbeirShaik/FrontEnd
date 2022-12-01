import React from 'react'
import shabbeir2 from '../../Assets/shabbeir_shaik.png'
import CV from '../../Assets/cv.pdf'
import './about2.css'

function About2() {
  return (
   <section className="about">
    <div className="content">
        <img className="image" src={shabbeir2} alt="not available"/>
        <div className="text">
            <h1>About Me</h1>
            <h5>Developer & Designer</h5>
            <p>
            I'm a passionate developer. I can provide clean and efficient code based on specifications.
            my passion is towards the complex problems which need a smartest solution. 
           Learning new technologies is my favourite hobby which drove me towards the IT sector.
           </p>
           <button type="button"><a href= {CV} download >Get resume</a></button>

           
        </div>
    </div>    
   </section>
  )
}

export default About2