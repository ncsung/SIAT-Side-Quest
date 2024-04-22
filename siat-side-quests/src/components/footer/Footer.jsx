import "./style.css"

export const Footer= () =>{
    return(
        <>
            <div className="six-coll">
                <h4 className="red-text footer-heading"> A guide through what could be and how to get there.</h4>
                <div className="footer-links-div">
                    <div className="footer-links six-coll-item">
                        <p className="red-text nav-heading">Creative Media</p>
                        <ul>
                            <li><a href="#">Film</a></li>
                            <li><a href="#">Animation</a></li>
                            <li><a href="#">Photography</a></li>
                        </ul>
                    </div>
                    <div className="footer-links footer-links six-coll-item">
                        <p className="red-text nav-heading">Designing Interactions</p>
                        <ul>
                            <li className="red-text"><a href="#">UX</a></li>
                            <li><a href="#">Interaction</a></li>
                            <li><a href="#">Graphic</a></li>
                            <li><a href="#">3D</a></li>
                        </ul>
                    </div>
                    <div className="footer-links six-coll-item">
                        <p className="red-text nav-heading">Extended Reality & Game Design </p>
                        <ul>
                            <li><a href="#"> Creative Coding</a></li>
                            <li><a href="#"> Front-end</a></li>
                        </ul>
                    </div>
                    <div className="footer-links six-coll-item">
                        <p className="red-text nav-heading">AI & Data Science for Human-centered Systems</p>
                        <ul>
                            <li><a href="#"> Creative Coding</a></li>
                            <li><a href="#"> Front-end</a></li>
                        </ul>
                    </div>

                    <div className="footer-links six-coll-item">
                        <p className="red-text nav-heading">Design and Development for Web & Mobile</p>
                        <ul>
                            <li><a href="#"> Creative Coding</a></li>
                            <li><a href="#"> Front-end</a></li>
                        </ul>
                    </div>   
                </div>  
        </div>
        <div className="footer-copyright-div">
            <p className="red-text">Copyright @ Side Quest Team </p>
        </div>
        </>
    )
}
export default Footer