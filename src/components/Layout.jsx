import '../index.css'

import { Outlet } from "react-router"
import Footer from "./Footer"

const Layout = () => {
  return (
    <div className="page">
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout