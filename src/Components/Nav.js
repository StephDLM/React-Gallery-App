import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import PhotoList from './PhotoList';
import { withRouter, NavLink } from 'react-router-dom'; 



class Nav extends Component { 
    constructor(){
        super()
        this.state = {
            button: ''
        }}
        // }};
//create a handleclick
//onclick handler is getting text content and put it to lower case and set state the state of the property to teh value 
handleClick = (e) => {
    this.props.onClick(e.target.textContent.toLowerCase());
    this.setState({button: e.target.textContent.toLowerCase()}) 
};
    render(){
        return (
            <head>
            <nav className="main-nav">
            <ul>
              <li><NavLink to="/greatdanes" onClick = {this.handleClick}>Great Danes</NavLink></li>
              <li><NavLink to="/lakes" onClick = {this.handleClick}>Lakes</NavLink></li>
              <li><NavLink to="/trees" onClick = {this.handleClick}>Trees</NavLink></li>
            </ul>    
          </nav>
          </head>
)}
        }        
    // };
export default withRouter(Nav);
