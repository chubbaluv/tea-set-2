/** @jsx jsx */
import { jsx } from "theme-ui"

const Header = ({ children }) => (
  <header
    className="site-header"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="header-container container">
      {children}
    </div>
  </header>
)

export default Header
