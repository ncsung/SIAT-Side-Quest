import "./style.css";
import logo from "/SSQ_Icon.svg"

export const Header = () => {
  return (
    <div className="header-frame">
        <div className="header-icon">
          <img src={logo} alt="A Siat Side Quest letter S Logo"></img>
        </div>
        <div className="header-links">
        <a href="#" className="red-text"> Career Pathways</a>
        <a href="#" className="red-text"> Alumni</a>
        <a href="#" className="red-text"> Resources</a>
        </div>
    </div>
  );
};

export default Header