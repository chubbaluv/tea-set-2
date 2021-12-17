/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="footer-container container">
      <p>
        <Link to="/">The Tea Set</Link>
      </p>
      <p>
        Copyright © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
)

export default Footer