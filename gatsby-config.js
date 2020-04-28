module.exports = {
  siteMetadata: {
    title: `Mishal Shah`,
    description: `Mishal Shah - B.Tech in Computer Science, NITK. GSoC '19 Student, GCI '19 Mentor at ns-3, Full Stack Developer with interests in Networks, Databases, Web Security`,
    author: `@mishal23`,
    siteUrl: `https://mishal23.github.io`,
    keywords: [
      "mishal23",
      "Mishal Shah",
      "GSoC",
      "Google Summer of Code", 
      "ns-3", 
      "ns-3-AppStore", 
      "Chaos Engineering", 
      "Backend Developer",
      "Full Stack Developer",
      "Alexa", 
      "IRIS NITK", 
      "IE NITK", 
      "HackVerse"
    ],
    social: {
      twitter: `@1998Mishal`,
      facebook: ``,
      github: `mishal23`,
      email: `shahmishal1998@gmail.com`,
      linkedin: ``,
    }
  },
  // pathPrefix: "/gatsby-migration",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mishal Shah`,
        short_name: `mishal23`,
        start_url: `/`,
        background_color: `#2d2a2a`,
        theme_color: `#2d2a2a`,
        display: `minimal-ui`,
        icon: `src/images/favicon-16x16.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-images`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: null,
              showLineNumbers: false,
              aliases: {
                ".json": "json",
              }
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-110715968-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `mishal23`
      }
    },
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
