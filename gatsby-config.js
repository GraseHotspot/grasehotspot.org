module.exports = {
  pathPrefix: "/grasehotspot.org",
  siteMetadata: {
    siteTitle: `Grase Hotspot`,
    defaultTitle: `Grase Hotspot`,
    siteTitleShort: `Grase Hotspot`,
    siteDescription: `Out of the box Gatsby Theme for creating documentation websites easily and quickly`,
    siteUrl: `https://grasehotspot.org`,
    siteAuthor: `@rocketseat`,
    siteImage: `/grase_512.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '9',
        matomoUrl: 'https://piwik.whiteitsolutions.com.au',
        siteUrl: 'https://grasehotspot.org'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-check-links',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              withWebp: true,
            },
          },
          {
          resolve: "gatsby-remark-relative-links",
          options: {
            domainRegex: /http[s]*:\/\/[www.]*grasehotspot\.org[/]?/,
          }
        },

        ]
      }
    },
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/GraseHotspot/grasehotspot.org`,
        baseDir: ``,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        
        siteUrl: `https://grasehotspot.org`,
      },
    },
    `gatsby-plugin-offline`
  ],
};
