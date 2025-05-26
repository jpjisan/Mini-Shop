import React from 'react'
import { Link } from 'react-router-dom'

function Card({product}) {
  const {id,image,rating, title, price, category} = product
  return (
    <Link to={`details/${id}`} className='block w-full sm:w-[50%] h-[70%] md:w-[30%] lg:w-[23%] xl:w-[20%] bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden'>
      <div className='flex flex-col h-full'>
        <div className="img-container h-48 overflow-hidden">
          <img 
            className='w-full h-full scale-90 object-full transition-transform duration-300 hover:scale-100' 
            src={image}
            alt="Product" 
          />
        </div>
        <div className='p-4 flex flex-col justify-between flex-grow'>
          <div>
            <h3 className='text-lg font-semibold text-gray-800 mb-2 line-clamp-2'>{title}</h3>
            <p className='text-sm text-gray-600 mb-2'>{category}</p>
          </div>
          <div className='flex justify-between items-center mt-2'>
            <p className='text-red-500 font-semibold'>Price: ${price}</p>
            <p className='text-yellow-500 font-semibold flex items-center'>
              <span className='text-yellow-400 mr-1'>★</span>
              {rating.rate}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card