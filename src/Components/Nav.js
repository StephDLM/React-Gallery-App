import React from 'react';
import PhotoList from './PhotoList';
import { NavLink } from 'react-router-dom'; 

const Nav = (props) => {

// class Nav extends Component { 
    // constructor(){
    //     super()
        // th = {
        //     button: ''
        // }
        // }};
//create a handleclick
//onclick handler is getting text content and put it to lower case and set state the state of the property to teh value 
// handleClick = (e) => {
//     this.prop.onClick(e.target.textContent.toLowerCase());
//     this.setState({button: e.target.textContent.toLowerCase()}) 
// };
  
    return (
            <nav className="main-nav">
            <ul>
              <li><NavLink to="/greatdane" >Great Danes</NavLink></li>
              <li><NavLink to="/lakes" >Lakes</NavLink></li>
              <li><NavLink to="/trees" >Trees</NavLink></li>
            </ul>    
          </nav>
)};
               
    // };
export default Nav;

//onClick = {this.handleClick}