import React from 'react'
import './Projects.css'
function Projects() {
  return (
    <div id="projects" className="container pt-5 border bg-light scrollspy">
      <section id="projectsSection" className="container border"></section>
      <h1 className="display-4 pt-5 pb-3">MY PROJECTS</h1>
      <div id="accordion" className="shadow p-2">

        <div className="card">
          <div className="card-header">
            <a className="card-link" data-toggle="collapse" href="#collapseFive">
              FULLSTACK – SEARCH ENGINE
      </a>
          </div>
          <div id="collapseFive" className="collapse show" data-parent="#accordion">
            <div className="card-body">
              <a className="gitLink" href="https://github.com/DorShireto/Search-Engine-PartC">click here to see this project on GITHUB</a><br />
              <a className="gitLink" href="http://client-search-engine.s3-website.us-east-2.amazonaws.com/">click here to use the website!</a>

              <h4>(12/2020-02/2021)</h4>
              <p>This project was created as a final project for the Information Retrieval course and focused on retrieving covid related tweets.</p>
              <p>You can find more technincal info & pictures inside the Git link above.</p>


              <ul>
                <li>BackEnd programing with Python - using Flask and NLTK.</li>
                <li>FrontEnd written in ReactJS.</li>
                <li>Hosted on AWS.</li>
                <li>Data set Size: approximately 10 Million Tweets</li>
                <li>You can enter a query and see related tweed ID's.</li>
                <li>By clicking these ID's you will be referenced to the tweet in Twitter.</li>




              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <a className="card-link" data-toggle="collapse" href="#collapseFour">
              FRONTEND – PACMAN GAME
      </a>
          </div>
          <div id="collapseFour" className="collapse" data-parent="#accordion">
            <div className="card-body">
              <a className="gitLink" href="https://github.com/Web-Development-Environments-2021/Assignment2_312204811_311327084">click here to see this project on GITHUB</a><br />
              <a className="gitLink" href="https://web-development-environments-2021.github.io/Assignment2_312204811_311327084/">click here to play!</a>

              <h4>(05/2021)</h4>
              <p>Programmed in JavaScript.<br /></p>
              <ul>
                <li>Part of web development course in Ben-Gurion University</li>
                <li>Written in Vanila JS and a little bit of JQUERY to learn the fundamentals of client side programing</li>

              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <a className="card-link" data-toggle="collapse" href="#collapseOne">
              JAVA – MAZE GAME
      </a>
          </div>
          <div id="collapseOne" className="collapse" data-parent="#accordion">
            <div className="card-body">
              <a className="gitLink" href="https://github.com/liorsavc/Maze_V_1.0">click here to see this project on GITHUB</a>
              <h4>(03/2020 – 07/2020)</h4>
              <p>Programmed in Java.<br /> The project includes various design patterns</p>
              <ul>
                <li>Algorithm implementations:
                                        <ul>
                    <li>Random maze generating using Prim's algorithm</li>
                    <li>Maze solver- using BFS/DFS/BestFS algorithms</li>
                  </ul>
                </li>
                <li>Client-Server communication: Multi-Threaded programing</li>
                <li>Desktop GUI using JavaFX</li>

              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
              FRONTEND - THIS WEB PAGE
      </a>
          </div>
          <div id="collapseTwo" className="collapse" data-parent="#accordion">
            <div className="card-body">
              <a className="gitLink" href="https://github.com/liorsavc/my_bio_code">click here to see this project on GITHUB</a>
              <p>As you can see :) <br />
                                using JavaScript , HTML , JSX , React , CSS & BOOTSTRAP4<br />
                                I'm doing my best to create clean and good user experience,<br />
                                so you coul'd easily see all of my programing skills.<br />
                                For this project , I have learned everything from scratch using blogs, youtube and online courses
                                </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <a className="collapsed card-link" data-toggle="collapse" href="#collapseThree">
              HARDWARE - PHASE SHIFTER
      </a>
          </div>
          <div id="collapseThree" className="collapse" data-parent="#accordion">
            <div className="card-body">
              <h4>(2016 – 2017)</h4>
              <p>Hardware electronic 10 channels phase-shifting board</p>
              <ul>
                <li>SMT design with the option to shift signal's phase in each channel manually and independently to other channels</li>
                <li>The board integrates with existing RF system</li>
                <li>The project included board design, RF chain calculation and mechanical solutions to fit existing platform</li>
                <li>Assembling the board and testing all its features in the lab</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}


export default Projects