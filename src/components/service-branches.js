import React from 'react';

import uscg from '../images/united-states-coast-guard-emblem.svg';
import usaf from '../images/united-states-department-of-the-air-force-emblem.svg';
import usn from '../images/united-states-department-of-the-navy-emblem.svg';
import usmc from '../images/united-states-marine-corps-emblem.svg';
import usa from '../images/united-states-department-of-the-army-emblem.svg';

const ServiceBranches = () => (
  <section className="usa-graphic-list usa-section usa-section--light homepage-service-section">
    <div className="grid-container">
      <h3 className="usa-graphic-list__heading">
        Service-Specific Guidance
      </h3>
      <p>Select your branch of service for additional move-related information and resources.</p>
      <div className="grid-row">
        <div className="tablet:grid-col service-emblem-list--item">
          <a href="/"><img className="service-emblem" src={usa} alt="Army"/><br />Army</a>
        </div>
        <div className="tablet:grid-col service-emblem-list--item">
          <a href="/"><img className="service-emblem" src={usmc} alt="Marine Corps"/><br />Marine Corps</a>
        </div>
        <div className="tablet:grid-col service-emblem-list--item">
          <a href="/"><img className="service-emblem" src={usn} alt="Navy"/><br />Navy</a>
        </div>
        <div className="tablet:grid-col service-emblem-list--item">
          <a href="/"><img className="service-emblem" src={usaf} alt="Air Force"/><br />Air Force</a>
        </div>
        <div className="tablet:grid-col service-emblem-list--item">
          <a href="/"><img className="service-emblem" src={uscg} alt="Coast Guard"/><br />Coast Guard</a>
        </div>
      </div>
    </div>
  </section>
);

export default ServiceBranches;
