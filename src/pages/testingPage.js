import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout"

const TestingPage = ({data: {allPost}})  => {
    console.log(allPost)

    return (
        <Layout>
        {
            allPost.nodes.map((post) => {
                const {id, title, body} = post;
                return (
                    <div key={id} style={{border: "1px solid black", margin: "5px 0"}}>
                        <p>ID: {id}</p>
                        <p>Title: {title}</p>
                        <p>Content: {body}</p> 
                    </div>
                )
            })
        }
        </Layout>
    )
}

export default TestingPage;

export const query = graphql`
    query {
        allPost {
            nodes {
              title
              body
              id
            }
        }
    }
`;