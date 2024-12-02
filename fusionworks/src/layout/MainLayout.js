import { Outlet } from "react-router-dom"
import MainHeader from "../component/main/MainHeader"
import Mainnavigator from "../component/main/Mainnavigator"

const MainLayout = () => {
  return (
    <div className="h-screen relative">
      {/* fixed top-0 right-0 left-0 z-50 */}
      <div className="fixed top-0 right-0 left-0 z-50">
        <MainHeader/>
      </div>
      
      <div className="">
        <div className="md:flex w-full">
        {/* fixed left-0 right-0 top-[4rem] z-10 md:z-0 bg-[#101A35] md:bg-transparen */}
          <div className="fixed left-0 top-[4rem]  md:bg-transparen bg-[#101A35] right-0 md:right-auto z-50">
            <Mainnavigator/>
          </div>
          <div className="md:m-2 md:w-[87%] w-full md:ml-[12.5rem] md:mt-[4.5rem] mt-[7rem] pb-16 md:pb-0">
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
