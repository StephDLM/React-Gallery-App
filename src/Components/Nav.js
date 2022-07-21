import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component { 
    constructor(){
        super()
        this.state = {
            onClick: ''
        }};
    render(){
        return (
            <nav>
            <ul className="main-nav">
              <li><NavLink to="/greatdanes">Great Danes</NavLink></li>
              <li><NavLink to="/lakes">Lakes</NavLink></li>
              <li><NavLink to="/trees">Trees</NavLink></li>
            </ul>    
          </nav>
        )
    }   
};
export default Nav;
