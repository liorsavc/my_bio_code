import React from 'react'
import './App.css'
import MyNavbar from './Components/MyNavbar'
import About from './Components/About'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Education from './Components/Education'
import ProgramingSkills from './Components/ProgramingSkills'




function App() {
  return (
      <div className="container-fluid pt-5 bg-light">
        <MyNavbar></MyNavbar>
        
        <About></About>
        <Experience/> 
        <Projects/>
        <Education/>
        <ProgramingSkills/>
        
                    
                                
      </div>
  );
}

export default App;
