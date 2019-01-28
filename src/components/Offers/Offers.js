import React from 'react';
import Countdown from 'react-countdown-now';

const Offers = () => {
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <ul className="countdown__list">
        <li className="arrows">&#9654;</li>
        <li>
          00 <span>days</span>
        </li>
        <li>
          {hours} <span>hours</span>
        </li>
        <li>
          {minutes} <span>minutes</span>
        </li>
        <li>
          {seconds} <span>seconds</span>
        </li>
        <li className="arrows">&#9664;</li>
      </ul>
    );
  };

  return (
    <React.Fragment>
      <div className="countdown__container">
        <div className="countdown__header">
          <h2>New Year Offer</h2>
          <h2>
            <span style={{ color: '#cf4064' }}>82% OFF </span>
            Web Hosting
          </h2>
        </div>
        <div className="countdown__widget">
          <Countdown date={Date.now() + 58248000} renderer={renderer} />
        </div>

        <div className="countdown__actions">
          <button className="btn">Get Started Now</button>
        </div>
      </div>

      <div className="offers__container">
        <div className="offers__offer">
          <span className="offers__offer--aside1">$</span>
          <p className="offers__offer--number">
            <span>Save 82%</span>
            <span>&#9660;</span>1
          </p>
          <div className="offers__offer--aside2">
            <span>45</span>
            <span>/mo</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Offers;
