import Resource from "../resource/Resource.jsx"
import Resources from "../../assets/alumni/resources.json"
import { useState, useEffect } from "react";
import "./style.css"

export const ResourceFrame = ({title, description}) =>
{
    const [resourceDataState, setResourceData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {        
            setResourceData(Resources);
          } catch (error) {
            console.error('Error fetching alumni data:', error);
            setIsLoading(false);
          }
        };
        fetchData();
      }, []);
    return(
        <>
        <div className="resource">
              <div className="resource-disc">
                <p className = "resource-category-title red-text">{title}</p>
                <p className= "large red-text"> {description}</p >
              </div>
 
  
            <div className="resource-three-col col-header">
                <p className="three-col-child resources-tag">Resources</p>
                <p className="three-col-child category-tag">Category</p>
                <p className="three-col-child right-aligned endorsement-tag">Alumni Endorsement</p>
            </div>
            <div className="cards-resources-div">
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
            </div>
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
          </>
    )
}

export default ResourceFrame