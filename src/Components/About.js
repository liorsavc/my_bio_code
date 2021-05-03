import React from 'react'
import './About.css'
import ProfilePic from './profilePic.jpg'
function About()
{
    return(
        <div id="about" className="container scrollspy bg-light " >
            <h1 className="display-4 pt-5">WHO AM I ?</h1>
            <div className="container row pt-3 pb-5">
                <div className="col-sm-4">

                <div className="card bg-light border-dark shadow" >
                    <img className="card-img-top" src={ProfilePic} alt="Profile"/>
                    <div className="card-body">
                        <h4 className="card-title">Lior Savchenko</h4>
                        <p className="card-text">I am experienced <b>Practical Electronics Engineer</b>.<br/>
                            <b>Motivated team player!</b><br/>
                            I have built this page after self learning React , HTML , and CSS <b>ONLINE!</b><br/>
                            Using BootStrap 4 !</p>
                    </div>
                



                    
                  
                </div>
                </div>
                <div className="container col-sm-8 shadow-sm">
                            <p>
                                <b style={{fontSize:56, marginLeft:"7px"}}>L</b>ooking for my next opportunity to make a big step in the software world<br/>
                                <b style={{fontSize:56,marginLeft:"10px"}}>I</b>nformation Systems Engineering <b>STUDENT</b> on my 3rd year<br/>
                                <b style={{fontSize:56}}>O</b> pen minded for new challenges and opportunities<br/>
                                <b style={{fontSize:56, marginLeft:"2px"}}>R</b> eady to learn new technologies<br/>
                            </p>
                        <hr/>
                        <button id="cvBtn" className="mb-5 shadow" >DOWNLOAD MY RESUME</button>
                            
                        </div>
                </div>
                        
                        
                        
                                
        </div>

    )
}

export default About