import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function Seo({title, description}) {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const defaultTitle = title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata?.title;
  const defaultDescription = description || site.siteMetadata?.description;

  return (
    <Helmet
      htmlAttributes={{
        lang: "en"
      }}
      title={defaultTitle}
      meta={[
        {
          name: "description",
          content: defaultDescription
        },
        {
          name: "og:title",
          content: defaultTitle
        },
        {
          name: "og:description",
          content: defaultDescription
        },
        {
          name: "og:type",
          content: "website"
        },
        {
          name: "og:image",
          content: "https://raw.githubusercontent.com/crissesoto/gatsby-blog-app/master/client/public/og.png"
        },
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          name: "twitter:creator",
          content: "Crisse Soto"
        },
        {
          name: "twitter:title",
          content: defaultTitle
        },
        {
          name: "twitter:description",
          content: defaultDescription
        },
        {
          name: "twitter:image",
          content: "https://raw.githubusercontent.com/crissesoto/gatsby-blog-app/master/client/public/og.png"
        },
      ]}
    />
  )
}