import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout" // You will need to create a Layout component later

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    // Replace with your actual layout component and styles
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        {/* Render the HTML content of the Markdown */}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

// Query to get the content for the specific post
export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
