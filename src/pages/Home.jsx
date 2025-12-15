import React from 'react'
import BannerSec from '../components/home/BannerSec'
import SecondSec from '../components/home/SecondSec'
import ThirdSec from '../components/home/ThirdSec'
import FourthSec from '../components/home/FourthSec'
import Stats from '../components/home/Stats'
import HomeCallToAction from '../components/home/HomeCallToAction'

const Home = () => {
  return (
    <>
    <BannerSec/>
    <SecondSec/>
    <ThirdSec/>
    <FourthSec/>
    <Stats/>
    <HomeCallToAction/>
    </>
  )
}

export default Home