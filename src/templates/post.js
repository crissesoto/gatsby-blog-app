import React from "react";
import Layout from "../components/Layout"

const Post = ({pageContext: {post}}) => {
    const {id, title, body} = post;

    return (
        <Layout>
            <h1>Post page</h1>
            <p>ID: {id}</p>
            <p>Title: {title}</p>
            <p>Content: {body}</p> 
        </Layout>
    )
}

export default Post;