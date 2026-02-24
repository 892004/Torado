import React from 'react'
import Hero from '../Components/Hero/Hero'
import Services from '../Components/Homepageservices/Services'
import NewCollection from '../Components/NewCollection/NewCollection'
import Category from '../Components/Categories/Category'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <NewCollection />
      <Category />
    </div>
  )
}

export default HomePage