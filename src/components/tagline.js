import React from 'react';

/*
  This tagline will appear in your homepage
*/

const Tagline = () => (
  <section className="grid-container usa-section usa-prose">
    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
          Start planning your move
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
        <p>
         This site will demystify the PCS process through access to information relevant to your specific move. Use the navigation menus atop the page to find the most relevant content for you.
        </p>

      </div>
    </div>
  </section>
);

export default Tagline;
