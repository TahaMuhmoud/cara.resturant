import React from 'react'
import BannerSec from './BannerSec'
import FeaturedProducts from './FeaturedProducts'
import Features from './Features'
import HomeBanner from './HomeBanner'
import NewArrivals from './NewArrivals'
import SignUpSec from '../Components/SignUpSec'
import Startup from './Startup'

export default function Home() {
  return (
    <div className=''>
      <Startup/>
      <Features/>
      <FeaturedProducts/>
      <HomeBanner/>
      <NewArrivals/>
      <BannerSec/>
    </div>
  )
}
