import React, { useState, useEffect, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './SiteProgressDial.css';

const SiteProgressDial = () => {
    const [scrollPercent, setScrollPercent] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight;
            const winHeight = window.innerHeight;
            const scrollPercentage = (scrollTop / (docHeight - winHeight)) * 100;

            setScrollPercent(scrollPercentage);

            // Show or hide the dial based on scroll percentage
            setIsVisible(scrollPercentage > 5);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="site-progress-dial" style={{ opacity: isVisible ? 1 : 0 }}>
            <div className="dial-container">
                <svg className="dial" viewBox="0 0 36 36">
                    <path
                        className="dial-bg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                        className="dial-progress"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                        style={{ strokeDasharray: `${scrollPercent}, 100` }}
                    />
                </svg>
            </div>
            {scrollPercent > 5 && (
                <button className="btn-top" onClick={handleScrollToTop}>
                    &#x25B2;
                </button>
            )}
        </div>
    );
};

export default SiteProgressDial;

createRoot(document.getElementById('SiteProgressDial')).render(
    <StrictMode>
      <SiteProgressDial />
    </StrictMode>,
  )
  