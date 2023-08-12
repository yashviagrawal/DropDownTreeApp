import React, { Component, ComponentProps  } from 'react';
import './sidebar.css';

interface SidebarState {
    searchTerm: string;
  }

  class Sidebar extends Component<ComponentProps<any>, SidebarState> {
    constructor(props: ComponentProps<any>) {
      super(props);
      this.state = {
        searchTerm: "",
      };
    }
    
      handleSearch = () => {
        // Logic to filter main-items based on the search term
      };

  render() {
    return (
      <div className="sidebar">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={this.state.searchTerm}
            onChange={(e) => this.setState({ searchTerm: e.target.value })}
          />
          <button onClick={this.handleSearch}>Search</button>
        </div>
        <ul className="menu">
          {/* Main Items */}
          <li className="main-item dashboard">
            Dashboard
            <ul className="sub-list">
              <li>Realtime</li>
              <li>Widget</li>
              <li>Chart</li>
            </ul>
          </li>
          <li className="main-item">About Me</li>
          <li className="main-item">Contact Me</li>
          <li className="main-item services">
            Services
            <ul className="sub-list">
              <li className="sub-item web">
                Web
                <ul className="sub-list">
                  <li>Angular</li>
                  <li>ReactJS</li>
                </ul>
              </li>
              <li className="sub-item android">
                Android
                <ul className="sub-list">
                  <li>React Native</li>
                  <li>Flutter</li>
                </ul>
              </li>
              <li>DevOps</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
