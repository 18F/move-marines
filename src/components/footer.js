import React from 'react';
import logo from '../images/United_States_Department_of_Defense_Seal.svg';

const Footer = () => (
  <footer className="usa-footer site-footer" role="contentinfo">
    <div className="footer-section-bottom bg-base-lighter">
      <div className="grid-container">
        <div className="grid-row padding-3">
          <div className="tablet:grid-col">
            <div className="logo-links">
              <a className="footer-logo media_link" href="https://www.ustranscom.mil/">
                <img src={logo} width="100" alt="Agency logo" />
              </a>
            </div>
            <div>
                Not maintained by USTRANSCOM
            </div> 
          </div>
          <div className="tablet:grid-col"></div>
          <div className="tablet:grid-col"></div>
          <div className="tablet:grid-col">
            <ul className="add-list-reset">
              <li><b>Technical Help Desk</b></li>
              <li>For help using Move.mil or Electronic Transportation Acquisition.</li>
              <li><b>Phone</b></li>
              <li>Toll-Free: (555) 555-5555</li>
              <li>Commercial: (555) 555-5555</li>
              <li><b>Email</b></li>
              <li>example@example.com</li>
              <li><b>Submit a ticket online</b></li>
              <li>https://example.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
