import React from 'react';
import { Link } from 'gatsby';

/*
  The sidenav is not loaded by default on the main pages. To include this navigation you can
  add "sidenav: true" in the front-matter of your markdown pages
*/

const PREFIX = '/service-specific-information/marine-corps'

const Sidenav = () => (
  <aside className="usa-layout-docs-sidenav desktop:grid-col-3 padding-bottom-4">
    <nav>
      <ul className="usa-sidenav">
        <li className="usa-sidenav__item">
          <Link to="/">Not Move.mil</Link>
        </li>
        <li className="usa-sidenav__item">
          <Link to={`${PREFIX}/summary`} className="usa-current">
            Marine Corps</Link>
            <li className="usa-sidenav__item">
            <li className="usa-sidenav__item"><Link to={`${PREFIX}/personal-property-moves`}>Personal Property Moves</Link></li>
            <li className="usa-sidenav__item"><Link to={`${PREFIX}/personal-property-weight-estimation`}>Personal Property Weight Estimation</Link></li>
            <li className="usa-sidenav__item"><Link to={`${PREFIX}/personnally-procured-move`}>Conducting a Personally Procured Move</Link></li>
            <li className="usa-sidenav__item"><Link to={`${PREFIX}/passenger-transportation`}>Passenger Transporation</Link></li>
            </li>
            <li className="usa-sidenav__item">
            <li className="usa-sidenav__item"><Link to={`${PREFIX}/domestic-moving-checklist`}>Domestic Moving Checklist</Link></li>
            <li className="usa-sidenav__item"><Link to={`${PREFIX}/international-moving-checklist`}>International Moving Checklist</Link></li>
            <li className="usa-sidenav__item"><Link to={`${PREFIX}/navigating-the-pcs-maze`}>Navigating the PCS Maze</Link></li>
            </li>
          <ul className="usa-sidenav__sublist">
            <li className="usa-sidenav__item"><Link to={`${PREFIX}/loss-and-damage-claims`}>Loss & Damage Claims</Link></li>
            <li className="usa-sidenav__item"><Link to={`${PREFIX}/privately-owned-vehicle`}>Shipping or Storing Your Privately Owned Vehicle</Link></li>
            <li className="usa-sidenav__item"><Link to={`${PREFIX}/shipping-firearms-safely`}>Shipping Firearms Safely</Link></li>
            <li className="usa-sidenav__item"><Link to={`${PREFIX}/unaccompanied-baggage`}>Unaccompanied Baggage</Link></li>
            <li className="usa-sidenav__item"><Link to={`${PREFIX}/unauthorized-items`}>Unauthorized Items</Link></li>
            <li className="usa-sidenav__item"><Link to={`${PREFIX}/inconvenience-claims`}>Inconvenience Claims</Link></li>
            <li className="usa-sidenav__item"><Link to={`${PREFIX}/peak-moving-season-prep`}>Peak Moving Season preparations</Link></li>
          </ul>
        </li>
        <li className="usa-sidenav__item">
          <Link to={`${PREFIX}/links`}>Links</Link>
          <li className="usa-sidenav__item"><Link to={`${PREFIX}/rights-and-responsibilities`}>Rights and Responsibilities</Link></li>
          <li className="usa-sidenav__item"><Link to={`${PREFIX}/customer-satisfaction-survey`}>Customer Satisfaction Survey</Link></li>
          <li className="usa-sidenav__item"><Link to={`${PREFIX}/whom-to-call`}>Whom to Call</Link></li>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidenav;
