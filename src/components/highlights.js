import React from 'react';
import plan from '../images/planyourmove.png';
import schedule from '../images/scheduleyourmove.png';
import ready from '../images/getready.png';
import settling from '../images/settlingin.png';

/*
  Use this section to highlight key elements of your site. Some sites will only have two while others may have six to eight. 
*/

const Highlights = () => (
  <section className="usa-graphic-list usa-section usa-section--light">
    <div className="grid-container">
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={plan} alt="Alt text" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Plan Your Move
            </h3>
            <p>
              Graphic headings can be used a few different ways, depending on
              what your landing page is for. Highlight your values, specific
              program areas, or results.
            </p>
          </div>
        </div>
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={schedule} alt="Alt text" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Schedule Your Move
            </h3>
            <p>
              Keep body text to about 30 words. They can be shorter, but try to
              be somewhat balanced across all four. It creates a clean
              appearance with good spacing.
            </p>
          </div>
        </div>
      </div>
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={ready} alt="Alt text" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Get Ready for Moving Day
            </h3>
            <p>
              For anything you want to highlight here, understand what your
              users know now, and what activity or impression you want from them
              after they see it.
            </p>
          </div>
        </div>
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={settling} alt="Alt text" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Settling In
            </h3>
            <p>
              In addition to your goal, find out your users’ goals. What do they
              want to know or do that supports your mission? Use these headings
              to show those.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Highlights;
