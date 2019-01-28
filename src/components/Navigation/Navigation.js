import './Navigation';
import React from 'react';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__logo">
          <img src={require('../../assets/logo.svg')} alt="logo" />
        </li>
        <li className="navigation__item">
          <a href="#!" className="navigation__link">
            Web hosting
          </a>
        </li>
        <li className="navigation__item">
          <span className="navigation__link--sale">on sale</span>
          <a href="#!" className="navigation__link">
            Cloud hosting
          </a>
        </li>
        <li className="navigation__item">
          <a href="#!" className="navigation__link">
            VPS hosting
          </a>
        </li>
        <li className="navigation__item">
          <a href="#!" className="navigation__link">
            Domain Checker
          </a>
        </li>
        <li className="navigation__item">
          <a href="#!" className="navigation__link">
            Website Builder
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
