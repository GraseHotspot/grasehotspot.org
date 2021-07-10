import React from "react"
import { Link } from "gatsby"
const PageLink = ({ page }) => (
  <div>
    <Link to={page.frontmatter.permalink}>
      {page.frontmatter.title}
    </Link>
  </div>
)
export default PageLink