import React from 'react'
import '../ExploreCollection/explorecollection.css'
import LeftCollection from './LeftCollection'
import RightCollection from './RightCollection'
import Collectioncard1 from '../../../assets/Images/products/product-20.jpg'
import Collectioncard2 from '../../../assets/Images/products/product-42.jpg'
import Collectioncard3 from '../../../assets/Images/products/product-43.jpg'
import Collectioncard4 from '../../../assets/Images/products/product-44.jpg'



const ExploreCards = [
    {
        id:1,
        img:Collectioncard1,
        heading:"Ring",
        price:"$150.00",
    },
    {
        id:2,
        img:Collectioncard2,
        heading:"Necklace",
        price:"$300.00"
    },
    {
        id:1,
        img:Collectioncard3,
        heading:"Earring",
        price:"$100.00"
    },
    {
        id:1,
        img:Collectioncard4,
        heading:"Bracelet",
        price:"$120.00"
    },
]

const ExploreCollection = () => {
  return (
    <section className="Explore-Collection h-screen w-full p-10">
        <h3 className='text-5xl font-bold text-[#2A2826] pb-10 px-3'>Explore Collection</h3>
        <div className='h-full w-full flex'>
        <LeftCollection cards={ExploreCards}/>
        <RightCollection />
        </div> 
    </section>
  )
}

export default ExploreCollection