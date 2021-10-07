import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Seo from './../components/Seo'

export default function About({data}) {
  return (
    <Layout>
      <Seo 
        title="About"
        description="Learn more about CODE-VAULT personal Blog app project made with JAMStack architecture"
      />
      <h1>{data.site.siteMetadata.title}</h1>
      <p>{process.env.BASE_URL}</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`