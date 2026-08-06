module.exports = {
  //pathPrefix: "/grasehotspot.org",
  trailingSlash: `never`,
  siteMetadata: {
    siteTitle: `Grase Hotspot`,
    defaultTitle: `Grase Hotspot`,
    siteTitleShort: `Grase Hotspot`,
    siteDescription: `Grase Hotspot - Simple Hotspot Solution`,
    siteUrl: `https://grasehotspot.org`,
    siteAuthor: `@timwhite88`,
    siteImage: `/grase_512.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
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
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `content`,
        homePath: `src/home`,
        repositoryUrl: `https://github.com/GraseHotspot/grasehotspot.org`,
        baseDir: ``,
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-relative-links`,
            options: {
              domainRegex: /http[s]*:\/\/[www.]*grasehotspot\.org[/]?/,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://grasehotspot.org`,
      },
    },
    `gatsby-plugin-offline`
  ],
};
