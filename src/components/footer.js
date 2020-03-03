import React from 'react';
import logo from '../../node_modules/uswds/dist/img/logo-img.png';

const Footer = () => (
  <footer className="usa-footer site-footer" role="contentinfo">
    <div className="footer-section-bottom bg-base-lighter">
      <div className="grid-container">
        <div className="grid-row padding-3">
          <div className="tablet:grid-col">
            <div className="logo-links">
              <a className="footer-logo media_link" href="https://18f.gsa.gov">
                <img src={logo} width="50" alt="Agency logo" />
              </a>
            </div>
          </div>
          <div className="tablet:grid-col"></div>
          <div className="tablet:grid-col">
            <ul className="add-list-reset">
              <li>Move.mil - DOD Official moving portal</li>
              <li>Navy Household Goods & Personal Property</li>
              <li>Marine Corps Community Support - Okinawa, Japan</li>
            </ul>
          </div>
          <div className="tablet:grid-col">
            <ul className="add-list-reset">
            <li>U.S. Marine Corps Personal Property Transportation and Storage</li>
<li>U.S. Marine Corps Passenger Transportation</li>
<li>Department of the Navy Household Goods</li>
<li>United States Transportation Command</li>
Air Mobility Command
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
