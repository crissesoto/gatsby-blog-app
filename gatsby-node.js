const axios = require("axios");

exports.createPages = async ({actions}) => {
    console.log(actions)

    const res = await axios.get("https://jsonplaceholder.typicode.com/users/1/posts");
    const posts = res.data

    actions.createPage({
        path: "/posts",
        component: require.resolve("./src/templates/posts.js"),
        context: {posts}
    });

    posts.forEach(post => {
        return (
            actions.createPage({
                path: `/posts/post/${post.id}`,
                component: require.resolve("./src/templates/post.js"),
                context: {post}
            })
        )
    });
}

exports.sourceNodes = async ({actions, createNodeId, createContentDigest}) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    const posts = res.data
  
    posts.forEach(post => {
      const node = {
        title: post.title,
        body: post.body,
        // The node ID must be globally unique
        id: createNodeId(`Post-${post.id}`),
        // id: `Post-${post.id}`,
        // ID to the parent Node
        parent: null,
        // ID to the children Nodes
        children: [],
        // internal fields are not usualy interesting for consumers
        // but are very important for Gatsby Core
        internal: {
          // globbaly unique node type
          type: "Post",
          // "Hash" or short digital summary of this node
          contentDigest: createContentDigest(post),
          // content exposing raw content of this node
          content: JSON.stringify(post)
        }
      }
  
      actions.createNode(node)
    })
  }