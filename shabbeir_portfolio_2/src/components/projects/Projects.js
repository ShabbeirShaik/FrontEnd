import React from 'react'
import './projects.css'
import Artificial_intelligence from '../../Assets/Artificial_intelligence.jpg'
import Data_science from '../../Assets/Data_science.jpg'
import Full_stack from '../../Assets/Full_stack.jpg'

function Projects() {
  return (
    <div className="projects">
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <h1 className="project_names">Projects</h1>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={Artificial_intelligence}/>
        </div>
        <h2 class="text-xl font-medium title-font text-white-900 mt-5">Artificial intelligence</h2>
        <p class="text-base leading-relaxed mt-2">Artificial intelligence has became one of the most important component in the IT world. it has grown its roots from smart assistant to humanoid robots what not ..?</p>
        <a class="text-indigo-500 inline-flex items-center mt-3" href="https://github.com/ShabbeirShaik/artificial-intelligence">GitHub
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={Data_science}/>
        </div>
        <h2 class="text-xl font-medium title-font text-white-900 mt-5">Data science</h2>
        <p class="text-base leading-relaxed mt-2">In this fast growing world data became the most essential part to handle and it is processed using this data science concepts and theories.</p>
        <a class="text-indigo-500 inline-flex items-center mt-3" href="https://github.com/ShabbeirShaik/DataScience">GitHub
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={Full_stack}/>
        </div>
        <h2 class="text-xl font-medium title-font text-white-900 mt-5">Full stack development</h2>
        <p class="text-base leading-relaxed mt-2">Each and every business wants a website and it should be well designed to attract the clients and customers and this job is done by web development frameworks and languages</p>
        <a class="text-indigo-500 inline-flex items-center mt-3" href="https://github.com/ShabbeirShaik/FrontEnd">GitHub
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Projects