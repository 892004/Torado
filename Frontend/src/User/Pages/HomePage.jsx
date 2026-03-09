import React from 'react'
import Hero from '../Components/Hero/Hero'
import Services from '../Components/Homepageservices/Services'
import NewCollection from '../Components/NewCollection/NewCollection'
import Category from '../Components/Categories/Category'
import ExploreCollection from '../Components/ExploreCollection/ExploreCollection'
import BottomCard from '../Components/BottomCard/BottomCard'
import FeedBack from '../Components/Feedback/FeedBack'
import FeaturedProducts from '../Components/FeaturedProducts/FeaturedProducts'
import Instagram from '../Components/Instagram/Instagram'
import Signup from '../Components/Signup/Signup'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <NewCollection />
      <Category />
      <ExploreCollection />
      <BottomCard />
      <FeedBack />
      <FeaturedProducts />
      <Instagram />
      <Signup />
    </div>
  )
}

export default HomePage