import { Outlet } from "react-router-dom"
import CustomFooter from "../components/CustomFooter"
import NavBar from "../components/navbar"

const LayoutLadingPage = () => {
  return (
    <div className="mx-auto min-h-screen flex flex-col">
      <NavBar/>
      <main className="flex-1">
        <Outlet/>
      </main>
     <CustomFooter/>
    </div>
  )
}

export default LayoutLadingPage