import Card from './components/card/Card.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Header from './components/header/header.jsx'
import prototypingIcon from "/prototyping-icon.svg"
import communicationIcon from "/communication-icon.svg"
import UXIcon from "/ux_icon.svg"
import SiatLogo from "/sidequestlogo_text.svg"
import researchIcon from "/research-icon.svg"
import visualDesignIcon from "/visualdesign-icon.svg"
import "./fonts/ABCMonumentGrotesk-Light-Trial.woff"
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
import { BsArrowDownCircle } from "react-icons/bs";
import { motion } from "framer-motion"

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
    <section>
      <Header/>
    </section>
    <div className="site-wrapper">
    
    <Navbar className="nav-item"/>
     
    <div className="content-wrapper">
      <section id="introduction"> 
          <div className="subject-bar">
            <div className="subject-bar-item sb-left"></div>
            <div className="subject-bar-item sb-md"><img src={UXIcon} alt="UX in siat sidequest font" ></img></div>
            <div className="subject-bar-item sb-long"></div>
          </div>

          <div className="banner-wrapper">
            <div className="banner-section1">
              <motion.div
                className= "banner-section1-content"
                initial={{ y: "40px", opacity: 0 }}
                animate={{ y: "0", opacity: 1 }}
                transition={{type: "spring", duration: 0.9, delay: 0}}
              >
              <h1 className="banner-heading"> Product Design </h1> 
              <p className="content content-body large red-text"> Also commonly referred to as UX/UI design — 
              is a field that revolves around the identification of user problems and the development of 
              digital or physical solutions. </p>
              <p className="content similiar-career-link">Similar careers: <a href="#">Brand Design</a>, <a href='#'> UX Researcher</a> </p>
              </motion.div>
            </div>

            <div className="banner-section2">
              <div className="section2-panel left-panel">
              <motion.div
                className= "banner-section2-content-left"
                initial={{ y: "40px", opacity: 0 }}
                animate={{ y: "0", opacity: 1 }}
                transition={{type: "spring", duration: 0.9, delay: 0.12}}
                >
                  <h2 className="section2-content">Would you be suited for this career?</h2>
                  <p className="section2-content darkgray-text">A Product Designer, at their core, is a problem solver. If you enjoy the process of identifying areas of opportunity, 
                  empathizing with diverse perspectives, and testing your ideas, 
                  this might be the career for you!</p>
                </motion.div>
              </div>

              <div className="section2-panel right-panel">
              <motion.div
                className="section2-content"
                initial={{ y: "40px", opacity: 0 }}
                animate={{ y: "0", opacity: 1 }}
                transition={{type: "spring", duration: 0.9, delay: 0.22}}
                >
                  <h2>Common skills of successful Product Designers</h2>
                  <ul className="skillset-list">
                    <div className="skillset-row1">
                      <li className= "skillset red-text"> <img src={prototypingIcon} alt="asdf" className="list-icon"></img> Prototyping</li>
                    
                      <li className= "skillset red-text"> <img src= {researchIcon} alt="asdf" className="list-icon"></img> User Research</li>
                    </div>

                    <div className="skillset-row2">
                      <li className= "skillset red-text"> <img src= {visualDesignIcon} alt="asdf" className="list-icon"></img>Visual Design</li>
                      <li className= "skillset red-text"> <img src= {communicationIcon} alt="asdf" className="list-icon"></img> Communication</li>
                    </div>
                  </ul>
                </motion.div>
              </div>
            </div>

            <div className="scroll-section">
              <div className="scroll-msg">
              <motion.div
                initial={{ y: "40px", opacity: 0 }}
                animate={{ y: "0", opacity: 1 }}
                transition={{type: "spring", duration: 1, delay: 0.32}}
                >
                  <p>Scroll to explore IAT Alumni and Senior Students in this field</p>
                </motion.div>
                <BsArrowDownCircle style= {{color: "#3A3A3A"}}/>
              </div>
            </div>
          </div>
          </section>
          <section id="alums">
          <div className="resource cards-intro">
              <div className="resource-disc">
                <p className = "resource-category-title red-text">Featured Alumni & Students</p>
                <p className= "large red-text"> Explore the paths and resources of featured alumni and senior students in this career.</p >
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
        </section>
        <section id="inspiration">
          <ResourceFrame title="Project Inspiration" 
          description="Looking to buff the content in your portfolio? Here are some resources to kickstart your creativity."/>
        </section>
        <section id= "tutorials">
          <ResourceFrame title="Skill-Development" 
          description="Looking to develop your own skills outside of courses? Check out these self-paced resources."/>
        </section>
        <section id= "readings">
          <ResourceFrame title="Recommended Readings" 
          description="Beyond concepts and methods, these literary resources provide diverse perspectives to aid your process."/>
        </section>
        <section id= "software">
          <ResourceFrame title="Recommended Software" 
          description="Technical requirements are always changing, but here are some plugins and tools that we currently suggest."/>
        </section>

      </div>
      
    </div>


    <section>
    <div className="three-coll">
            <div className="footer-logo-div">
              <img src={SiatLogo} alt="test"></img>
            </div>
            <Footer logoPath={SiatLogo}/>
          </div>
    </section>
    </>
  )
}

export default App
