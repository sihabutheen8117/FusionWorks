import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div>
      inside main layout
      <Outlet/>
    </div>
  )
}

export default MainLayout
