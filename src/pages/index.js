import React from "react"
import Layout from "../components/Layout"
import {graphql, Link} from "gatsby"

import FeaturedBlog from "./../components/FeaturedBlog"
import BlogListing from "../components/BlogListing"
import SearchContainer from "../components/SearchContainer"
import Seo from "./../components/Seo"

export default function IndexPage({data, pageContext}) {

  const { nodes } = data.allMarkdownRemark
  return (
    <Layout>
      <Seo 
        title="Home"
        description="CODE VAULT | Welcome to my Gatsby.js Personal Project"
      />
      <div className="columns">
        { nodes.slice(0, 2).map(node =>
          <div key={node.id} className="column">
            <FeaturedBlog blog={node} />
          </div>
          )
        }
      </div>
      <div className="p-4">
        <BlogListing blogs={nodes} search={() => <SearchContainer searchIndex={pageContext.searchIndex} />} />
        <Link to="/blogs" className="button is-small is-primary is-outlined">Read more blogs</Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(limit: 3, sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        id
        frontmatter {
          slug
          subtitle
          title
          author
          date(formatString: "DD MMMM, YYYY")
        }
      }
    }
  }
`