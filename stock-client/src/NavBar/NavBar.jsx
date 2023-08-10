import React, { useState } from 'react';
import './NavBar.css';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';




const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const [age, setAge] = React.useState('');
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
    // You can perform filtering logic here based on the filterValue
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <nav className="navbar">
      <ul className="navbar-list">
      <li className="navbar-item-logo">
          <a href="/" className="navbar-link-logo">StockMart</a>
        </li>
        <li className="navbar-item">
          <a href="/" className="navbar-link">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/stock-news" className="navbar-link">Stock News</a>
        </li>
        <li className="navbar-item dropdown" onClick={toggleDropdown}>
        <FormControl sx={{ m: 1, minWidth: 120 ,backgroundColor:"#fff",border:"1px solid #fff"}} size="small">
      <InputLabel style={{ color: 'black' }} id="demo-select-small-label">Most Active</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
          {/* <a href="#" className="navbar-link">Dropdown</a> */}
          {/* {showDropdown && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">Option 1</li>
              <li className="dropdown-item">Option 2</li>
              <li className="dropdown-item">Option 3</li>
            </ul>
          )} */}
        </li>
        <li className="navbar-item">
          <input
            type="text"
            value={filterValue}
            onChange={handleFilterChange}
            className="filter-input"
            placeholder="Filter By Categoery"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
