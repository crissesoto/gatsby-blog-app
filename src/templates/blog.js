import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout"

const Blog = ({data: {markdownRemark}, pageContext: {slug}}) => {

    return (
        <Layout>
            <h1>{markdownRemark.frontmatter.title}</h1>
            <p>{slug}</p>
            <div dangerouslySetInnerHTML={{__html: markdownRemark.html}} />
        </Layout>
    )
}



export default Blog;

export const query = graphql`
    query($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                title
                slug
              }
        }
    }
`;