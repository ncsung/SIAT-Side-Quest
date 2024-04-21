import Card from './components/card/Card.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Header from './components/header/header.jsx'
import Resource from './components/resources/Resource.jsx'
import prototypingIcon from "/prototyping-icon.svg"
import communicationIcon from "/communication-icon.svg"
import researchIcon from "/research-icon.svg"
import visualDesignIcon from "/visualdesign-icon.svg"
import "./fonts/ABCMonumentGrotesk-Regular-Trial.woff"
import "./fonts/ABCMonumentGrotesk-Medium-Trial.woff"
import "./fonts/ESRebondGrotesqueTRIAL-Medium.otf"
import alumniData from "./assets/alumni/alumni.json"
import Resources from "./assets/alumni/resources.json"
import { useState, useEffect } from "react";

function App() {
  const [alumniDataState, setAlumniData] = useState([]);
  const [resourceDataState, setResourceData] = useState([]);

  useEffect(() => {
    // Simulating fetching data from an API endpoint
    // Replace this with actual data fetching logic
    const fetchData = async () => {
      try {        
        
        // Update state with fetched data
        setAlumniData(alumniData);
        setResourceData(Resources);
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
            <div className="subject-bar-item"></div>
            <div className="subject-bar-item subject-item-long"></div>
          </div>
          <div className="banner">
            <div className="banner-section1">
              <h1 className="content"> Product Design </h1> 
              <p className="content content-body strong red-text"> Also commonly referred to as UX/UI design, a career in this field usually starts with user-related 
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
                <p>Scroll to explore IAT Alumni and Senior Students in this field (ADD ICON)</p>
              </div>
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
        
        <section>
          <div className="resource">
              <div className="resource-disc">
                <p>Inspiration</p>
                <p className= "strong "> These resources provides different perspectives on ways to approach your craft.</p >
              </div>
 
  
          <div className="resource-three-col col-header">
              <p className="three-col-child resources-tag">Resources</p>
              <p className="three-col-child ">Category</p>
              <p className="three-col-child right-aligned">Alumni Endorsement</p>
            </div>
                {resourceDataState.map(resource => {
                  return(
                    <div className="resource-three-col resource-card" key = {resource.id}>
                      <Resource imgSrc={resource.imgSrc}
                                imgAlt={resource.imgAlt}
                                resourceName={resource.resourceName}
                                description={resource.description}
                                categories={resource.categories}
                                />
                    </div>
                  )
                })}
                <div className="three-coll-small">
                  <div className="extra-resource-links">
                    <p className="red-text">Inspiration</p>
                    <ul>
                      <li><a href="#"> extra resource link</a></li>
                      <li><a href="#"> extra resource link</a></li>
                      <li><a href="#"> extra resource link</a></li>
                      </ul>
                  </div>
                  <div className="extra-resource-links">
                    <p className="red-text">Inspiration</p>
                    <ul>
                      <li><a href="#"> extra resource link</a></li>
                      <li><a href="#"> extra resource link</a></li>
                      <li><a href="#"> extra resource link</a></li>
                      </ul>
                  </div>
                  <div className="extra-resource-links">
                    <p className="red-text">Inspiration</p>
                    <ul>
                      <li><a href="#"> extra resource link</a></li>
                      <li><a href="#"> extra resource link</a></li>
                      <li><a href="#"> extra resource link</a></li>
                      </ul>
                  </div>
                </div>
          </div>
        </section>

      </div>
    </div>
    </>
  )
}

export default App
