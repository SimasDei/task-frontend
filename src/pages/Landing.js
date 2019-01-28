import React, { Component } from 'react';
import './Landing.scss';
import Navigation from '../components/Navigation/Navigation';
import Offers from '../components/Offers/Offers';
import Guarantee from '../components/Guarantee/Guarantee';

export class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <Navigation />
        <main>
          <Offers />
        </main>
        <Guarantee />
      </div>
    );
  }
}

export default Landing;
