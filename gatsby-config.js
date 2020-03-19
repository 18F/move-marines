module.exports = {
  siteMetadata: {
    author: '18F',
    title: `Not Move.mil`,
    description: `Prototype site for Marine Corps-specific enhancements to move.mil`,
    navigation: [
      {
        items: [{ text: 'Home', link: '/' }],
      },
      {
        title: 'Moving Guide',
        items: [
          { text: 'Moving with the Military Overview', link: '#' },
          { text: 'Entitlements/Guidelines', link: '#'},
          { text: 'What to Expect?', link: '#'},
          { text: 'Reimbursements', link: '#'},
          { text: 'Loss & Damage Claims', link: '#'},
          { text: 'Moving Tips', link: '#'},
          { text: 'Moving Stories', link: '#'},
          { text: 'Overseas Moves (OCONUS)', link: '#'},
          { text: 'TDY Moves', link: '#'},
          { text: 'Retiring/Separating Members', link: '#'},
          { text: 'Civilian Employees', link: '#'},
          { text: 'Service-Specific Information', link: '#'},
          { text: 'Pet Information', link: '#'},
          { text: 'Privately Owned Vehicles (POVs)', link: '#'},
        ],
      },
      {
        items: [{ text: 'Tutorials', link: '#' }],
      },
      {
        items: [{ text: 'FAQ', link: '#' }],
      },
      {
        items: [{ text: 'Customer Service', link: '#' }],
      },
      {
        title: 'Tools & Resources',
        items: [
          { text: 'Customer Brochures', link: '#' },
          { text: 'Helpful Links', link: '#' },
          { text: 'Privately Owned Vehicles (POVs)', link: '#' },
          { text: 'PPM Estimator', link: '#' },
          { text: 'Weight Estimator', link: '#' },
          { text: 'Find Nearby Locations', link: '#' },
          { text: 'Protect Your Move', link: '#' },
        ],
      },
    ],
    secondaryLinks: [
      { text: 'Secondary link', link: '/' },
      { text: 'Another secondary link', link: '/' },
    ],

    // Search.gov configuration
    //
    // 1. Create an account with Search.gov https://search.usa.gov/signup
    // 2. Add a new site.
    // 3. Add your site/affiliate name here.
    searchgov: {
      endpoint: 'https://search.usa.gov', // You should not change this.
      affiliate: 'federalist-uswds-example', // replace this with your search.gov account
      access_key: 'xX1gtb2RcnLbIYkHAcB6IaTRr4ZfN-p16ofcyUebeko=', // This is placeholder. Not private.
      inline: true, // this renders the results on the same domain. Otherwise, it will render the results in the search.gov domain
    },
    dapAgency: 'GSA',
  },
  pathPrefix: process.env.BASEURL || '/',
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/blog-posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documentation-pages`,
        path: `${__dirname}/src/documentation-pages`,
      },
    },
    { 
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 650,
            },
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/federalist-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify-cms`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
