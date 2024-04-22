import Card from './components/card/Card.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Header from './components/header/header.jsx'
import prototypingIcon from "/prototyping-icon.svg"
import communicationIcon from "/communication-icon.svg"
import UXIcon from "/ux_icon.svg"
import SiatLogo from "/sidequestlogo_text.svg"
import researchIcon from "/research-icon.svg"
import DownIcon from "/downIcon.svg"
import visualDesignIcon from "/visualdesign-icon.svg"
import "./fonts/ABCMonumentGrotesk-Regular-Trial.woff"
import "./fonts/ABCMonumentGrotesk-Medium-Trial.woff"
import "./fonts/ABCMonumentGrotesk-Bold-Trial.woff"
import "./fonts/ESRebondGrotesqueTRIAL-Medium.otf"
import "./fonts/ESRebondGrotesqueTRIAL-Semibold.otf"
import "./fonts/ESRebondGrotesqueTRIAL-Bold.otf"
import alumniData from "./assets/alumni/alumni.json"
import ResourceFrame from "./components/resourceFrame/ResourceFrame.jsx"
import Footer from "./components/footer/Footer.jsx"
import { useState, useEffect } from "react";

function App() {
  const [alumniDataState, setAlumniData] = useState([]);
  
  useEffect(() => {
    // Simulating fetching data from an API endpoint
    // Replace this with actual data fetching logic
    const fetchData = async () => {
      try {        
        
        // Update state with fetched data
        setAlumniData(alumniData);
      } catch (error) {
        console.error('Error fetching alumni data:', error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <Header/>
    <div className="site-wrapper">
    
    <Navbar/>
      <div className="banner-wrapper">
          <div className="subject-bar">
            <div className="subject-bar-item"></div>
            <div className="subject-bar-item"><img src={UXIcon} alt="UX in siat sidequest font" ></img></div>
            <div className="subject-bar-item subject-item-long"></div>
          </div>
          <div className="banner">
            <div className="banner-section1">
              <h1 className="content"> Product Design </h1> 
              <p className="content content-body large red-text"> Also commonly referred to as UX/UI design, a career in this field usually starts with user-related 
                research and transitions into the development of digital or physical products targeting a problem or 
                opportunity for a specific group of users.  </p>
              <p className="content similiar-career-link">Similar careers: <a href="#">Brand Design</a>, <a href='#'> UX Researcher</a> </p>
            </div>

            <div className="banner-section2">
              <div className="section2-panel">
                <h2 className="content">Is this career for me?</h2>
                <p className="content content-body">If you enjoy the process of identifying areas of opportunity, empathizing with diverse perspectives, 
                  and refining your solution through a constant feedback process, this might just be the career for you! </p>
              </div>
              <div className="section2-panel right-panel">
                <h2 className="content">Example Skillsets</h2>
                <ul className="content content-body">
                  <li> <img src={prototypingIcon} alt="asdf" className="list-icon"></img> Prototyping</li>
                  <li> <img src= {researchIcon} alt="asdf" className="list-icon"></img> User Research</li>
                  <li> <img src= {visualDesignIcon} alt="asdf" className="list-icon"></img>Visual Design</li>
                  <li> <img src= {communicationIcon} alt="asdf" className="list-icon"></img> Communication</li>
                </ul>
              </div>
            </div>

            <div className="scroll-section">
              <div className="scroll-msg">
                <p>Scroll to explore IAT Alumni and Senior Students in this field</p>
                <img src={DownIcon} alt="Arrow pointing down icon"> </img>
              </div>
            </div>
          </div>

          <div className="resource cards-intro">
              <div className="resource-disc">
                <p className = "resource-category-title red-text">Featured Alumni & Students</p>
                <p className= "large red-text"> Explore featured alumni and senior students to discover their IAT-paths.</p >
              </div>
 
            
          </div>
        <div className="cards-section">
          <div className="white-space">
            
          </div>
          <div className="cards">
              {
                alumniDataState.map( alum => {
                  return(
                    <div className="card" key={alum.id}>
                    <Card name={alum.name} imgSrc={alum.imgSrc} imgAlt={alum.imgAlt}
                          role={alum.role} workHistory={alum.workHistory} skills= {alum.skills} />
                    </div> 
                  )
                })
              }
          </div>
        </div>
        

          <ResourceFrame title="Inspiration" 
          description="These resources provides different perspectives on ways to approach your craft."/>
          <ResourceFrame title="Tutorials" 
          description="These resources are a self-paced alternative to learn outside of the usual class format."/>
          <ResourceFrame title="Readings" 
          description="These resources provide depth in broad or more specific areas of knowledge."/>
          <ResourceFrame title="Software" 
          description="Software and plugins are a tool and means to achieve your craft and bring it to reality."/>
    



      </div>
      
    </div>
    <div className="three-coll">
            <div className="footer-logo-div">
              <img src={SiatLogo} alt="test"></img>
            </div>
            <Footer logoPath={SiatLogo}/>
          </div>
    </>
  )
}

export default App
