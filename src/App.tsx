import React, { useState } from "react";
import { DownOutlined, SearchOutlined  } from "@ant-design/icons";
import "./App.css"; // Import your custom CSS stylesheet

const Sidebar: React.FC = () => {

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const filteredItems = ["dashboard", "contact Me", "about Me"].filter(item =>
    item.includes(searchValue.toLowerCase())
  );

  return (
    <div className="sidebar">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearch}
        />
        <button>
          <SearchOutlined />
        </button>
      </div>
      {filteredItems.map(item => (
        <a key={item} href={`#${item}`}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </a>
      ))}

      <div className="dropdown">
        <button className="dropbtn">
          Dropdown <DownOutlined />
        </button>
        <div className="dropdown-content">
          <div className="sub-dropdown">
            <button className="dropbtn">
              Module 1 <DownOutlined />
            </button>
            <div className="sub-dropdown-content">
            <div className="sub1-dropdown">
            <button className="dropbtn">
              Sub-Module 1 <DownOutlined />
            </button>
            <div className="sub2-dropdown-content">
            <div className="sub2-dropdown">
            <button className="dropbtn">
              Form-Group 1 <DownOutlined />
            </button>
            <div className="sub3-dropdown-content">
            <a href="#form1">Form 1</a>
            <a href="#form2">Form 2</a>
            <a href="#form3">Form 3</a>
            <a href="#form4">Form 4</a>
            <a href="#form5">Form 5</a>
            </div>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      {/* Main content */}
    </div>
  );
};

export default App;
