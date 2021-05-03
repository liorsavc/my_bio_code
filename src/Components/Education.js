import React from 'react'
import './Education.css'
function Education() {
    return (
        <div id="education" className="container pt-5 border  scrollspy">
            <section id="educationSection" className="container border"></section>
            <h1 className="display-4 pt-5 pb-3">EDUCATION</h1>
            <div className="slide-center shadow p-2" >
                <ul>
                    <li>
                        <h2>BSC Software & Information Systems Engineering</h2>
                        <h4>Ben-Gurion University <br />2018 - Ongoing</h4>
                        <p>Courses in: Data Structures, Algorithms, AI, Operating Systems, OOP & OOD, Web development and network sequrity.</p>
                    </li>
                    <hr />
                    <li>
                        <h2>Practical Electronics Engineer</h2>
                        <h4>"Ha-Amit" Technical College, Rishon Le Zion <br />2011-2013</h4>
                        <p>Specialization in communication systems</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Education