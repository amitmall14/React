import "./Header.css";
import logo from "./../../img/logo.png";
import menu_img from "./../../img/menu.png";

 
const Header = () => {
  const menuClick = event => {
    

    console.log('Image clicked');
    document.getElementById('headerlinks').classList.toggle("show");
    

  };
  

  return (
    <div className="header-container">
    <div className="header-img">
    <img src={logo}/>
    </div>
    <div className="header-menu">
    <img src={menu_img} id="menu-img" onClick= {menuClick}/>
    </div>
   
    <div>
   <ul id="headerlinks">
    <li><a href="">HOME</a></li>
    <li><a href="">SHOP</a></li>
    <li><a href="">ELEMENTS</a></li>
    <li><a href="">BLOG</a></li>
    <li><a href="">PAGES</a></li>
    </ul>
    </div>

    
    </div>

  );
}

export default Header;
