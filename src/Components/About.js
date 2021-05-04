import React from 'react'
import './About.css'
import ProfilePic from './profilePic.jpg'
function About() {
    return (
        <div id="about" className="container scrollspy bg-light " >
            <h1 className="display-4 pt-5">WHO AM I ?</h1>
            <div className="container row pt-3 pb-5">
                <div className="col-sm-4">

                    <div className="card bg-light border-dark shadow" >
                        <img className="card-img-top" src={ProfilePic} alt="Profile" />
                        <div className="card-body">
                            <h4 className="card-title">Lior Savchenko</h4>
                            <p className="card-text">I am experienced <b>Practical Electronics Engineer</b>.<br />
                                <b>Motivated team player!</b><br />
                            I have built this page after self learning React , HTML , and CSS <b>ONLINE!</b><br />
                            Using BootStrap 4 !</p>
                        </div>

                    </div>
                </div>
                <div className="container col-sm-8 shadow-sm" style={{ marginTop: "50px" }}>
                    <p>
                        <b>Software & Information Systems Engineering student with 2 semesters until graduation.
                         Experienced Practical Electronics Engineer.<br />
                                I'm a self-learner but also team player that loves working in a team<br />
                                Looking for part time Full-Stack/Back-End development position.
</b>
                    </p>
                    <hr />
                    <div style={{ textAlign: "center" }}>
                        <button id="cvBtn" className="mb-5 shadow" ><a href="https://drive.google.com/file/d/17PqmSlsGEu3P_d8qnzxelRMXUTrQLEk-/view?usp=sharing">DOWNLOAD MY RESUME</a></button>
                    </div>
                </div>
            </div>




        </div >

    )
}

export default About