import logo from "./img/logo1.png";
import MenuOpen from "./img/MenuOpen.png";
import MenuClose from "./img/MenuClose.png";
import { NavLink, Outlet } from "react-router-dom";
import Form from "./Form";

function Header(){ 

    // window.onload=function(){
    //     console.log(1);
    // }

    return(
        <>
        <div className="header">
                <div className="header__logo">
                <NavLink to="/">
                    <img src={logo} alt="" />
                </NavLink>
                </div>
                <div className="header__menu">
                    <ul>
                        <li><NavLink to="/">Главная</NavLink></li>
                        {/* <li><NavLink to="/services">Услуги</NavLink></li> */}
                        <li><NavLink to="/aboutUs">О нас</NavLink></li>
                        <li><NavLink to="/contacts">Контакты</NavLink></li>
                        <li><input type="button" className="btn-form" value={"Начнем!"}/></li>
                    </ul>
                    
                </div>
                <div className="hamburger-menu">
                    <span className="open"><img src={MenuOpen} alt="" /></span>
                    <span className="close"><img src={MenuClose} alt="" /></span>
                </div>
                <Form/>
                <Outlet />
            </div>
            <div className="hide-menu">
                        <ul>
                            <li><NavLink to="/" className="link">Главная</NavLink></li>
                            {/* <li><NavLink to="/services" className="link">Услуги</NavLink></li> */}
                            <li><NavLink to="/aboutUs" className="link">О нас</NavLink></li>
                            <li><NavLink to="/contacts" className="link">Контакты</NavLink></li>
                        </ul>
                    </div>
            </>
            
    )
}

export default Header;