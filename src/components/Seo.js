import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function Seo({title, description, image}) {

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
  const defaultImage = image || "https://raw.githubusercontent.com/crissesoto/gatsby-blog-app/master/src/images/og.png"

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
          content: defaultImage
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
          content: defaultImage
        },
      ]}
    />
  )
}