import React, { Component } from 'react'
import './MyNavbar.css'

class MyNavbar extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light  fixed-top" style={{ backgroundColor: "#e6f4ff" }}>
        <a className="navbar-brand h1 m-3" href="#">Lior Savchenko V1.2</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapseNavbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item m-2">
              <a className="nav-link" href="#about" data-toggle="collapse" data-target=".navbar-collapse.show">About </a>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link" href="#experience" data-toggle="collapse" data-target=".navbar-collapse.show">Experience</a>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link" href="#projects" data-toggle="collapse" data-target=".navbar-collapse.show">Projects</a>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link" href="#education" data-toggle="collapse" data-target=".navbar-collapse.show">Education</a>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link" href="#programingSkills" data-toggle="collapse" data-target=".navbar-collapse.show">Programing Skills</a>
            </li>


          </ul>

          <div className="iconsBar pr-5">
            {/* LINKEDIN */}

            <button className="navbarBtn"><a className="text-body" href="https://www.linkedin.com/in/lior-savchenko-6692101a8/" data-toggle="tooltip" title="LinkedIn Link"><i className="fa fa-linkedin"></i></a></button>
            {/* PHONE */}
            <button className="navbarBtn" data-toggle="popover" title="Cellphone Number" data-content="0526-******" data-placement="bottom" ><i className="fa fa-phone"></i></button>
            {/* EMAIL */}
            <button className="navbarBtn" data-toggle="popover" title="Email" data-content="liorsavc@gmail.com" data-placement="bottom"><i className="fa fa-envelope"></i></button>
            {/* address */}
            <button className="navbarBtn" data-toggle="popover" title="Address" data-content="Beer Sheva, Israel" data-placement="bottom"><i className="fa fa-map-pin"></i></button>


          </div>
        </div>
      </nav>
    )
  }
}



export default MyNavbar