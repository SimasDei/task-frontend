import React, { Component } from 'react';
import './Landing.scss';
import Navigation from '../components/Navigation/Navigation';
import Offers from '../components/Offers/Offers';

export class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <Navigation />
        <main>
          <Offers />
        </main>
      </div>
    );
  }
}

export default Landing;
