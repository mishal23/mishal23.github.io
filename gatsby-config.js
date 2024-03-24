module.exports = {
  siteMetadata: {
    title: `Mishal Shah`,
    description: `Mishal Shah - Software Engineer with interests in Networks, Databases, Web Security. He's currently working at Google and in the past have worked with Cisco. He did his bachelors in Computer Science from NITK. He's also been a GSoC '19 Student, GCI '19, GSoC '20 Mentor with the ns-3 organization`,
    author: `@mishal23`,
    siteUrl: `https://mishal.dev`,
    keywords: [
      "mishal23",
      "Mishal Shah",
      "Cisco",
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
      "HackVerse",
    ],
    social: {
      twitter: `@1998Mishal`,
      facebook: ``,
      github: `mishal23`,
      email: `shahmishal1998@gmail.com`,
      linkedin: ``,
    },
    image: "/mishal.jpeg",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mishal Shah`,
        short_name: `mishal23`,
        start_url: `/`,
        background_color: `#2d2a2a`,
        theme_color: `#2d2a2a`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `favicon/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `favicon/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
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
            resolve: `gatsby-remark-highlight-code`,
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-110715968-2"],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `mishal23`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
  ],
}
