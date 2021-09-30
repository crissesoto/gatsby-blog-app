import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout"

const Posts = ({pageContext: {posts}}) => {

    return (
        <Layout>
            <h1>Posts page</h1>
                <ul>
                {
                    posts.map(post => {
                    const {id, title} = post;
                    return (
                            <li key={id}>
                                <Link to={`/posts/post/${id}`}>{title}</Link>
                            </li>
                    )
                    })
                }
                </ul>
        </Layout>
    )
}

export default Posts;