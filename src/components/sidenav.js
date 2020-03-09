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
          <Link to="/">Passenger Transportation/Link>
        </li>
        <li className="usa-sidenav__item">
          <Link to="/" className="usa-current">
            Peak Moving Season Information
          </Link>
          <ul className="usa-sidenav__sublist">
            <li className="usa-sidenav__item">
              <Link to="/">Delta Priority Boarding Info</Link>
            </li>
            <li className="usa-sidenav__item">
              <Link to="/" className="usa-current">
                PCSing Pets
              </Link>
              <ul className="usa-sidenav__sublist">
                <li className="usa-sidenav__item">
                  <Link to="/">Pet Research</Link>
                </li>
              </ul>
            </li>
    </nav>
  </aside>
);

export default Sidenav;
