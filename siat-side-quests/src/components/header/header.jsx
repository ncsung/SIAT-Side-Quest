import "./style.css";
import logo from "/SSQ_Icon.svg"

export const Header = () => {
  return (
    <div className="header-frame">
        <img src={logo} alt="A Siat Side Quest letter S Logo"></img>
        <a href="#"> Career Pathways</a>
        <a href="#"> Alumni</a>
        <a href="#"> Resources</a>
    </div>
  );
};

export default Header