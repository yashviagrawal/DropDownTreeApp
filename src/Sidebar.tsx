import React, { Component } from 'react';
import './sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <aside className="sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left" id="show-side-navigation1">
        {/* { */}
            <div className="search position-relative text-center px-4 py-3 mt-2">
            {/* <input id="searchbar" name="search" type="text" className="form-control w-100 border-0 bg-transparent" placeholder="Search here" onkeyup="search_animal()"> */}
          </div>
        
          <ul className="categories list-unstyled">
        
        
            <li className="has-dropdown animals">
              <a href="#"> Dashboard</a>
              <ul className="sidebar-dropdown list-unstyled">
                <li><a href="#">Widget Dashboard</a></li>
                <li><a href="#">Chart Dashboard</a></li>
                <li><a href="#">Real-Time Dashboard</a></li>
              </ul>
            </li>
        
        
            <li className="animals">
              <a href="#"> About Us</a>
            </li>
        
        
            <li className="animals">
                <a href="#"> Contact Us</a>
              </li>
        
        
            <li className="has-dropdown animals">
              <a href="#"> Services</a>
              <ul className="sidebar-dropdown list-unstyled">
                <li className="has-dropdown animals"><a href="#">Web Development</a>
                    <ul className="sidebar-dropdown list-unstyled">
                        <li><a href="#">React JS</a></li>
                        <li><a href="#">Angular JS</a></li>
                      </ul>
                </li>
                <li className="has-dropdown animals"><a href="#">Android Development</a>
                    <ul className="sidebar-dropdown list-unstyled">
                        <li><a href="#">React Native</a></li>
                        <li><a href="#">Flutter</a></li>
                      </ul>
                </li>
                <li className="animals"><a href="#">DevOps</a></li>
        
        
              </ul>
            </li>
          </ul>
        
        {/* } */}
      </aside>
    );
  }
}

export default Sidebar;
