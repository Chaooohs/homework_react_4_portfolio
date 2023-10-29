import '../index.css'

import { Outlet } from "react-router"
import Nav from "./Nav"
import Footer from "./Footer"

const Layout = () => {
  return (
    <div className="page">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout