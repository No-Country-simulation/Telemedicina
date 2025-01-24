import { Outlet } from "react-router-dom"
import CustomFooter from "../components/CustomFooter"

const LayoutLadingPage = () => {
  return (
    <div className="mx-auto min-h-screen flex flex-col">
      <main className="flex-1">
        <Outlet/>
      </main>
     <CustomFooter/>
    </div>
  )
}

export default LayoutLadingPage