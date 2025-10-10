import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <h1>About Page</h1>
      <p>Lorem Ipsum</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
