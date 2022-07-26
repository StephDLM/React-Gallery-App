import React from 'react';
import { NavLink } from 'react-router-dom'; 


const Nav = (props) => {//using prop to access url
    return (
            <nav className="main-nav">
            <ul>
              <li><NavLink to="/greatdane" >Great Danes</NavLink></li>
              <li><NavLink to="/lakes" >Lakes</NavLink></li>
              <li><NavLink to="/trees" >Trees</NavLink></li>
            </ul>    
          </nav>
)};
               
export default Nav;

