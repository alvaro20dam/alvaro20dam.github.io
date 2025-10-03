import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <h1>Blog Posts</h1>
      {posts.map(({ node }) => (
        <div key={node.id}>
          {/* Link to the post using the slug we generated in gatsby-node.js */}
          <Link to={node.fields.slug}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <small>{node.frontmatter.date}</small>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

// GraphQL Query to fetch all posts
export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

export default IndexPage
