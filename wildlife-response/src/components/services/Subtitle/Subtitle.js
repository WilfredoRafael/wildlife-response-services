import React from "react";
import logo from "../../../images/logo-dark-wildlife.png";
import Sidebar from "../../sidebar/sidebar";
import classes from "./Subtitle.module.css";
import {Link} from "gatsby";

const Subtitle =()=>{
    const NavLink=(Link);
    return(
        <>
            <ul className={classes.subtitle}>
                <li> <Sidebar classname={classes.unique}/> </li>
                <div>
                    <li>  <h2>SERVICES</h2> </li>
                    <span></span>
                </div>

                <li> <NavLink to="/"><img src={logo} alt="Wildlife response logo" className={classes.image}/></NavLink></li>
            </ul>

            </>
    )
};

export default Subtitle;