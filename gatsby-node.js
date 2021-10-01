
exports.createPages = async ({graphql, actions: {createPage}}) => {

    const result = await graphql(`
    query {
        allMarkdownRemark {
            nodes {
              excerpt
              frontmatter {
                subtitle
                title
                slug
              }
              id
            }
        }
    }
  `)
    const { nodes } = result.data.allMarkdownRemark

    // Markdown Content
    nodes.forEach(node => {
        return (
            createPage({
                path: `blogs/${node.frontmatter.slug}`,
                component: require.resolve("./src/templates/blog.js"),
                context: {
                    slug: node.frontmatter.slug
                }
            })
        )
    });
}
