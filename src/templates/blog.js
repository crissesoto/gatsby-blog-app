import React from "react";
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import "./blog.scss"
import Seo from "./../components/Seo"

export default function Blog({data}) {
  const { html, frontmatter: {title, subtitle, coverImage, author, slug}} = data.markdownRemark
  const seo = {
    title,
    subtitle,
    image: coverImage,
    url: `/blogs/${slug}`
  }

  return (
    <Layout seo={seo}>
      <Seo {...seo} />
      <h1 className="title is-4">{title}</h1>
      <div className="blog-content">
        <div dangerouslySetInnerHTML={{__html: html}}></div>
        <div className="mt-6">
          <h4 className="subtitle is-6">{`Author: ${author}`}</h4>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        subtitle
        coverImage
        author
      }
    }
  }
`