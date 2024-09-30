import React from 'react'
import HomeHeader from '../component/home/HomeHeader'
import HomeBody from '../component/home/HomeBody'
import HomeFooter from '../component/home/HomeFooter'

const HomeLayout = () => {
  return (
    <div>
      <HomeHeader/>
      <HomeBody/>
      <HomeFooter/>
    </div>
  )
}

export default HomeLayout
