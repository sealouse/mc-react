import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import './CustomMenu.css';

const CustomMenu = ({ items }) => {
  items = ['Home', 'About', 'Services', 'Contact'];
  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="menu-item">
          {item}
        </div>
      ))}
    </>
  );
};

export default CustomMenu;

createRoot(document.getElementById('CustomMenu')).render(
  <StrictMode>
    <CustomMenu />
  </StrictMode>,
)