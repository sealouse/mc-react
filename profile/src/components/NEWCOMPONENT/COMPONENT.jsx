import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import './PLACEHOLDER.css';

const PLACEHOLDER = ({ items }) => {
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

export default PLACEHOLDER;

createRoot(document.getElementById('PLACEHOLDER')).render(
  <StrictMode>
    <PLACEHOLDER />
  </StrictMode>,
)

// for components outside the main app