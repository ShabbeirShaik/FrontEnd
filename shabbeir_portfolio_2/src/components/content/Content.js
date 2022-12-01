import React from 'react'
import Typical from 'react-typical'
import './content.css'

function Content() {
  return (
    <div className='content'>
      <main>
        <div>
          <h1>Hi </h1>
          <h1>I'm Shabbeir shaik</h1>
          <h1><Typical classname="typical" loop={Infinity}
                        steps={[
                            "Full stack developer ",
                            1000,
                            "Machine Learning enthusiastic",
                            1000,
                            "Enthusiastic Developer",
                            1000,
                            "MERN stack Developer",
                            1000,
                        ]}/></h1>
          <p>I design and developer experiences that make people's lives simpler through Web and Mobile Apps. i work with various types of technologies in multiple types of domains.</p>
        </div>
        <br/>
        <br/>
      </main>
      
    </div>
    
  )
}

export default Content