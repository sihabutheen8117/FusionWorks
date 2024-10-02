import { Outlet } from "react-router-dom"
import MainHeader from "../component/main/MainHeader"
import Mainnavigator from "../component/main/Mainnavigator"

const MainLayout = () => {
  return (
    <div>
      <MainHeader/>
      <Mainnavigator/>
      <Outlet/>
    </div>
  )
}

export default MainLayout
