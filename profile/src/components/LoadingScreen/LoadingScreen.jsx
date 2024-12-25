import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
    useEffect(() => {
        const target = document.getElementById('lettering');
        function letter(t) {
          t.innerText = t.innerText;
          t.innerHTML = t.innerText.replace(/(.)/g, (s, b) => '<span class="char" data-char="' + b + '">' + b + '</span>');
        }
        letter(target);
      }, []);
    return (
        <>
          <svg width="0" height="0">
            <defs>
              <clipPath id="d" clipPathUnits="objectBoundingBox">
                <path d="M0.5,0.5m-0.5,0a0.5,0.5,0,0,1,1,0,0.5,0.5,0,0,1-1,0zM0.5,0.5m-0.375,0a0.375,0.375,0,0,0,0.75,0,0.375,0.375,0,0,0-0.75,0z" />
              </clipPath>
            </defs>
          </svg>
          <h1 id="lettering">Loading</h1>
        </>
      );
};

export default LoadingScreen;

// createRoot(document.getElementById('LoadingScreen')).render(
//     <StrictMode>
//         <LoadingScreen />
//     </StrictMode>,
// )