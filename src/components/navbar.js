import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav>
      <div className="links">
        <Link
          to="/projects"
          style={{
            fontSize: `var(--font-sm)`,
            textDecoration: `none`,
            marginLeft: `20px`,
          }}
        >
          Portfolio Projects
        </Link>
        <Link
          to="/about"
          style={{
            fontSize: `var(--font-sm)`,
            textDecoration: `none`,
            marginLeft: `20px`,
          }}
        >
          About
        </Link>
        <Link
          to="/page-2"
          style={{
            fontSize: `var(--font-sm)`,
            textDecoration: `none`,
            marginLeft: `20px`,
          }}
        >
          Page-2
        </Link>
        <Link
          to="/using-typescript"
          style={{
            fontSize: `var(--font-sm)`,
            textDecoration: `none`,
            marginLeft: `20px`,
          }}
        >
          Page-TS
        </Link>
        <Link
          to="/using-ssr"
          style={{
            fontSize: `var(--font-sm)`,
            textDecoration: `none`,
            marginLeft: `20px`,
          }}
        >
          ssr
        </Link>
      </div>
    </nav>
  )
}
