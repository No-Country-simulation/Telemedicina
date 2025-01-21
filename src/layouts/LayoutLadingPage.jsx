import { Outlet } from "react-router-dom"
import CustomFooter from "../components/CustomFooter"


const LayoutLadingPage = () => {
  return (
    <div className=" mx-auto min-h-screen flex flex-col max-w-screen-2xl">
      <h2>Navbar</h2>
      <main className="bg-green-400 flex-1">
        <Outlet/>
      </main>
     <CustomFooter/>
    </div>
  )
}

export default LayoutLadingPage