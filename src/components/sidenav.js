import React from 'react';
import { Link } from 'gatsby';

/*
  The sidenav is not loaded by default on the main pages. To include this navigation you can
  add "sidenav: true" in the front-matter of your markdown pages
*/

const Sidenav = () => (
  <aside className="usa-layout-docs-sidenav desktop:grid-col-3 padding-bottom-4">
    <nav>
      <ul className="usa-sidenav">
        <li className="usa-sidenav__item">
          <Link to="/">Move.mil</Link>
        </li>
        <li className="usa-sidenav__item">
          <Link to="/" className="usa-current">
            USMC Specific Moving information
          </Link>
          <ul className="usa-sidenav__sublist">
            <li className="usa-sidenav__item">
              <Link to="/">Personal Property Moves</Link>
            </li>
            <ul className="usa-sidenav__sublist">
                <li className="usa-sidenav__item">
                  <Link to="/">Peak Moving Season preparations</Link>
                </li>
            <li className="usa-sidenav__item">
              <Link to="/" className="usa-current">
                Passenger Transporation
              </Link>
              <ul className="usa-sidenav__sublist">
                <li className="usa-sidenav__item">
                  <Link to="/">Non-uniformed personnel travel</Link>
                </li>
            </li>
          </ul>
        </li>
        <li className="usa-sidenav__item">
          <Link to="/">PCS related links</Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidenav;