// src/pages/about.js

import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Accept the 'data' prop from the GraphQL query
const AboutPage = ({ data }) => {
  // 1. Prepare the image data for the GatsbyImage component
  const profileImage = getImage(data.file)

  // <-- MISSING CLOSING BRACE '}' GOES HERE
  // The function body of the AboutPage component starts here:
  return (
    <Layout>
      {/* This is a Gatsby convention for defining metadata */}
      <Seo title="About Me | Alvaro Gonzalez" />
      {/* === SECTION 1: The Core Introduction === */}
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "40px" }}
      >
        {/* 2. Render the image */}
        {profileImage && (
          <GatsbyImage
            image={profileImage}
            alt="Alvaro Gonzalez Headshot"
            style={{
              borderRadius: "50%", // Makes the image round
              marginRight: "30px",
            }}
          />
        )}

        {/* 3. The main heading should be next to the image */}
        <h1>Hello, I'm Alvaro.</h1>
      </div>
      <p>
        I'm a Data Scientist and Analyst focused on extracting actionable
        insights from complex datasets. My journey into data began with a strong
        interest in economic modeling and has evolved into a passion for
        building robust, deployable solutions.
      </p>
      <hr />
      {/* === SECTION 2: Professional Narrative (The 3 Whys) === */}
      <h2>What I Do</h2>
      <p>
        I specialize in the full data lifecycle: from cleaning and wrangling raw
        data to building predictive models using Python, SQL, and various ML
        libraries. I excel at transforming business questions into measurable
        data problems.
      </p>
      <h2>Why Data Science?</h2>
      <p>
        Data science, to me, is the intersection of logic, creativity, and
        impact. I love the challenge of turning uncertainty into
        knowledge—providing clear, data-driven answers that guide strategic
        decisions.
      </p>
      <h2>My Core Stack</h2>
      <p>
        <strong>Languages & Tools:</strong> Python (Pandas, Scikit-learn,
        NumPy), SQL, R.
        <br />
        <strong>Visualization:</strong> Matplotlib, Seaborn, Tableau/PowerBI.
        <br />
        <strong>Platform:</strong> Git/GitHub, Docker, cloud environments
        (AWS/Azure).
      </p>
      <hr />
      {/* === SECTION 3: Personal Touch / Call to Action === */}
      <h2>Let's Connect</h2>
      <p>
        When I'm not exploring datasets, you can find me hiking or learning new
        visualization techniques. Feel free to check out my{" "}
        <a href="/projects">Portfolio Projects</a> or
        <a href="/contact"> send me a message</a> to discuss a collaboration!
      </p>
    </Layout>
  )
}
// End of the AboutPage component function

export const query = graphql`
  query GetAboutImage {
    file(relativePath: { eq: "headshot-college.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`

export default AboutPage
