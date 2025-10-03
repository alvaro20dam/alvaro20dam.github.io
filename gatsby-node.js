const path = require(`path`)

// 1. Query all Markdown files and create a "slug" (a clean URL path) for each.
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  // Only process MarkdownRemark nodes
  if (node.internal.type === `MarkdownRemark`) {
    // A simple slug creator often used to generate URLs from file names.
    const fileNode = getNode(node.parent)
    const slug = fileNode.name
      .toLowerCase()
      .replace(/ /g, `-`)
      .replace(/[^\w-]+/g, ``)

    // Add the slug to the node's fields so we can query it later
    createNodeField({
      node,
      name: `slug`,
      value: `/${slug}/`, // e.g., /my-first-post/
    })
  }
}

// 2. Query the slugs and create the actual pages.
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Path to the React component template for rendering a single post
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)

  const result = await graphql(`
    query GetMarkdownSlugs {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  // Create blog post pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    createPage({
      // The URL path for this page
      path: post.node.fields.slug,
      // The React component to render the page
      component: blogPostTemplate,
      // Data passed to the component, accessible via $slug in the page query
      context: {
        slug: post.node.fields.slug,
      },
    })
  })
}
