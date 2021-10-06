
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
    // Pagination
    const itemsPerPage = 3;
    const numberOfPages = Math.ceil(nodes.length / itemsPerPage);

    Array.from({length: numberOfPages}).forEach((_, i) => {
        const pageNumber = i + 1;
    
        createPage({
          path: pageNumber === 1 ? `/blogs` : `/blogs/${pageNumber}`,
          component: require.resolve("./src/templates/blogsPaginated"),
          context: {
            limit: itemsPerPage,
            currentPage: pageNumber,
            skipNumber: i * itemsPerPage,
            numberOfPages
          }
        })
      })

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
