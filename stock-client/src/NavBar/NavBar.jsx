import React, { useState } from 'react';
import './NavBar.css';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Navbar = () => {
  const [age, setAge] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // New state for search query

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update search query
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
        <li className="navbar-item dropdown">
          <FormControl sx={{ m: 1, minWidth: 120, backgroundColor: "#fff", border: "1px solid #fff" }} size="small">
            <InputLabel style={{ color: 'black', paddingBottom: "1rem" }} id="demo-select-small-label">Most Active</InputLabel>
            <Select style={{ padding: "0px 60px 0px 80px" }}
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
        </li>
        <li className="navbar-item">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange} // Use the search input handler
            className="filter-input"
            placeholder="Search..."
          />
        </li>
        <li>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
