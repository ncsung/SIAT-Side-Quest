import "./style.css"
import Tag from "../Tag.jsx"

export const Resource = ({imgSrc, imgAlt, resourceName,
                    description, categories}) =>
{
    return(
        <>  
        <div className="resource-content-wrapper">
        <img src={imgSrc} alt={imgAlt}></img>
            <div className="row-col-flex">
                <div className="resource-content">
                    <h3 className="red-text resource-title"> {resourceName}</h3>
                    <p className="lightgray-text">{description}</p>
                </div>

                <div className="categories-col">
                {
                    categories.map((category, i) =>{
                        return(
                        <Tag key = {i} category={category} isRed={true}/>
                        )   
                    })
                }
                </div>
            </div> 
        </div>
        <div className="alum-endorses">
            
        </div>
       
        </>
    );
}

export default Resource