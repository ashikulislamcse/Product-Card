import React from 'react'
import image1 from '../assets/watch.jpeg'
import image2 from '../assets/camera.jpeg'
import image3 from '../assets/Shoe.jpeg'
const ProductCard = () => {
  return (
    <div className='bg-gray-100 w-full min-h-screen gap-6 flex-wrap flex justify-center items-center'>
      <div className='w-60 p-2 bg-white rounded-xl transform trasition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 mb-4 md:mt-0'>
        <img src={image1} alt="Watch" className='h-40 object-cover rounded-xl'/>
        <div className='p-2'>
          <h2 className='font-bold text-lg mb-2'>Watch</h2>
          <span className='text-xl font-semibold'>৳. 1200 Taka</span>
          <div className='flex items-center gap-2'>
            <span className='text-sm line-through opacity-75'>৳. 1200 Taka</span>
            <span className='font-bold text-sm p-2 bg-amber-300 rounded-s-2xl text-gray-600'>Save 10%</span>
          </div>
        </div>
      </div>
      <div>
        <img src={image2} alt="Watch" />
      </div>
      <div>
        <img src={image3} alt="Watch" />
      </div>
    </div>
  )
}

export default ProductCard
