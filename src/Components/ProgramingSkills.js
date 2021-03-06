import React from 'react'
import './ProgramingSkills.css'
function ProgramingSkills() {
    return (
        <div id="programingSkills" className="container pt-5 pb-5 border  scrollspy">
            <section id="programingSkillsSection" className="container border"></section>
            <h1 className="display-4 pt-5 pb-3">Programing Skills</h1>
            <div className="slide-center shadow p-2" style={{ display: "flex" }} >
                <ul>
                    <li>Java</li>
                    <li>C#</li>
                    <li>Python</li>
                    <li>Bash</li>
                    <li>SQLite</li>
                    <li>C , C++</li>
                    <li>JavaScript + React</li>
                    <li>HTML + CSS + JSX</li>
                </ul>
                <ul style={{ marginLeft: "20px" }}>
                    <li>Node.JS</li>
                    <li>Mongo DB</li>
                    <li>Postgres</li>
                    <li>NPM</li>
                    <li>GIT</li>

                </ul>
            </div>
        </div>
    )
}

export default ProgramingSkills