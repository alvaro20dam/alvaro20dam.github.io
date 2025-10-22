// src/components/navbar.js

import React from "react"
import { Link } from "gatsby"
import * as styles from "./navbar.module.css" // Import the new module

export default function Navbar() {
  return (
    <nav>
      {/* Use the imported class name */}
      <div className={styles.links}>
        {/* <Link to="/projects">Portfolio Projects</Link> */}
        <Link to="/about">About</Link>
        <Link to="/page-2">Page-2</Link>
        <Link to="/using-typescript">Page-TS</Link>
        <Link to="/using-ssr">ssr</Link>
      </div>
    </nav>
  )
}
