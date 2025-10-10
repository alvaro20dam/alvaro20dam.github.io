import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function About() {
  return (
    <Layout>
      <h1>About Page</h1>
      <p>Lorem Ipsum</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
export const Head = () => <Seo title="About Page" />
