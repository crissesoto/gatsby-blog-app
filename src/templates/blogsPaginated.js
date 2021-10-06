import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "./../components/Layout"
import BlogListing from "./../components/BlogListing"

export default function BlogsPaginated({data, pageContext}) {
  const { currentPage, numberOfPages } = pageContext;
  const {nodes} = data.allMarkdownRemark;

  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === numberOfPages;

  return (
    <Layout>
        <BlogListing blogs={nodes} />
         <Link to={`/blogs/${prevPage}`} rel="prev" disabled={isFirstPage} aria-disabled={isFirstPage} className="button is-small">Previous</Link>
        {' '}
        <Link to={`/blogs/${nextPage}`} rel="next" disabled={isLastPage} aria-disabled={isLastPage} className="button is-small">Next</Link>
    </Layout>
  )
}

export const query  = graphql`
    query BlogListingQuery ($skipNumber: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: {order: DESC, fields: frontmatter___date},
            limit: $limit, 
            skip: $skipNumber
            ) {
            nodes {
                frontmatter {
                slug
                subtitle
                title
                date(formatString: "DD MMMM, YYYY")
                author
                }
            id
        }
    }
  }
`