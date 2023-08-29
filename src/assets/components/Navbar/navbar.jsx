import React, { useState, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  const [showMenuButton, setShowMenuButton] = useState(true);
  const [showMenuItems, setShowMenuItems] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1020) {
        setShowMenuButton(false);
        setShowMenuItems(true);
      } else {
        setShowMenuButton(true);
        setShowMenuItems(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenuItems(!showMenuItems);
  };

  return (
    <>
      <nav>
        <svg viewBox="0 0 45 21">
          <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
        </svg>

        {showMenuButton && (
          <button className="menu-button" onClick={toggleMenu}>
            Menu
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANJJREFUSEvtlMEVwjAMQ9VNYBPYBCYBJoFNYBMYhadD8kya2krS3vCtr7aVfNmZsHFMG/fHXyAkbBHdAZzCCi3hAeDMVCvwBrDT6sOsD4B9KcDmz5VEjgBepQC/LwCu4fn8BNbfUkptTEdQZTSewAgqcqdIjqVF60H1g8a7QfpHww+iHzSUxs7CeypUVDPuCqKUo6DKI9l6A0Ukb+wSSvU1rY2ui0Yx2R6KZtN0Gy6aVoFyy6sj2euBrSMqoqmO5BoC4lrEm9zcaHSKugXVMe0W+ALYph4ZuzqNrAAAAABJRU5ErkJggg==" />
          </button>
        )}

        {showMenuItems && (
          <ul>
            <div className="left-items">
              <li>
                <a href="">Live</a>
              </li>
              <li>
                <a href="">Push</a>
              </li>
              <li>
                <a href="">Note</a>
              </li>
              <li>
                <a href="">Link</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
              <li>
                <a href="">Packs</a>
              </li>
              <li>
                <a href="">Help</a>
              </li>
              <li>
                <a className="more-button" href="">
                  More +
                </a>
              </li>
            </div>

            <div className="right-items">
              <li>
                <a className="try-button" href="">
                  Try Live for free
                </a>
              </li>
              <li>
                <a className="auth-button" href="">
                  Log in or register
                </a>
              </li>
            </div>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
