import React from 'react'
import './Experience.css'

function Experience(){
    return(
        <div id="experience" className="container  mt-4 border scrollspy">
            <section  id="experienceSection" className="container border"></section>
                    <h1 className="title display-4 pt-5 pb-3">EXPERIENCE</h1>
                <div className="slide-center  shadow " >
                    <ul style={{fontWeight : "bold"}}>
                        <li>
                            <h2>RF System Engineer (2013 – 2017)</h2>
                            <h4>IDF – unit 8200 <small>over duty service</small></h4>
                            <ul style={{fontWeight : "normal"}}>
                                    <li>Working on multidisciplinary RF systems (Unix & Windows OS)</li>
                                    <li>Part of development team of multi-sensor back end system</li>
                                    <li>Writing automation scripts in Bash</li>
                                    <li>Development of helper tools in C#</li>
                                    <li>Development of RF-SMT Hardware board</li>
                                    <li>Working closely with R&D teams</li>
                                    <li>Hardware QA & tests</li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        
    )
}


export default Experience 