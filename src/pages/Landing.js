import React, { Component } from 'react';
import './Landing.scss';
import Navigation from '../components/Navigation/Navigation';

export class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <Navigation />
      </div>
    );
  }
}

export default Landing;
