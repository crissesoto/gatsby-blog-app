require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const rss = require("./utils/rss-options")


module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "CODE-VAULT | Gatsby.js Personal blog app | Crisse Soto",
    description: "Blog app using Gatsby JS(Gatsby v3) framework, React/GraphQL and JAMStack architecture",
    siteUrl: process.env.BASE_URL,
    body: {
      content:""
    }
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-feed",
      options: rss.options
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              aliases: {
                es6: "js"
              }
            }
          }
        ]
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CODE-VAULT`,
        short_name: `CODE-VAULT`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "src/images/icon.png"
      },
    },
    "gatsby-plugin-offline"
  ],
  
};
