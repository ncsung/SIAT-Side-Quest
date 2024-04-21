import "./style.css"
import SampleImg from "/resource-sample.png"
import Tag from "../Tag.jsx"

function Resource(){
    return(
        <>
        <div className="resource-div resource-header">
            <p className= "strong "> Inspiration provides different perspectives on ways to approach your craft.</p >
        </div>
        <div className="resource-div">
            <img src={SampleImg} alt="sample img"></img>
            <div className="resource-content">
                <h3> Weekly Links and Websites</h3>
                <p>A weekly-updated inspiration board of web 
                    interactions.</p>
            </div>
            <Tag category={"Visual Design"}/>
        </div>   
        </>
    );
}

export default Resource