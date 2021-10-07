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
    "gatsby-plugin-react-helmet"
  ],
  
};
