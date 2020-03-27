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
            <li className="usa-sidenav__item"><Link to={`${PREFIX}/domestic-moving-checklist`}>CONUS Moving Checklist</Link></li>
            <li className="usa-sidenav__item"><Link to={`${PREFIX}/international-moving-checklist`}>OCONUS Moving Checklist</Link></li>
            <li className="usa-sidenav__item"><Link to={`${PREFIX}/whom-to-call`}>Additional Resources</Link></li>
            </li>
          <ul className="usa-sidenav__sublist">
            <li className="usa-sidenav__item"><Link to={`${PREFIX}/loss-and-damage-claims`}>Loss & Damage Claims</Link></li>
            <li className="usa-sidenav__item"><Link to={`${PREFIX}/privately-owned-vehicle`}>Vehicle Shipments</Link></li>
          </ul>
        </li>
        <ul className="usa-sidenav__sublist">
          <li className="usa-sidenav__item"><Link to={`https://www.defensetravel.dod.mil/site/travelreg.cfm`}>Joint Travel Regulations(JTR)</Link></li>
          <li className="usa-sidenav__item"><Link to={`${PREFIX}/rights-and-responsibilities`}>Rights and Responsibilities</Link></li>
          <li className="usa-sidenav__item"><Link to={`${PREFIX}/customer-satisfaction-survey`}>Customer Satisfaction Survey</Link></li>
          <li className="usa-sidenav__item"><Link to={`${PREFIX}/whom-to-call`}>Whom to Call</Link></li>
          <li className="usa-sidenav__item"><Link to={`https://www.marines.mil/News/Messages/MARADMINS/`}>MARADMINS</Link></li>
        </ul>
      </ul>
    </nav>
  </aside>
);

export default Sidenav;
