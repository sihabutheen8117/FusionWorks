import { Outlet } from "react-router-dom"
import MainHeader from "../component/main/MainHeader"
import Mainnavigator from "../component/main/Mainnavigator"

const MainLayout = () => {
  return (
    <div>
      <MainHeader/>
      <div className="md:flex">
        <Mainnavigator/>
        <div className="md:m-2 md:w-[88%] w-full">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
