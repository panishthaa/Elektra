import React from "react"
import { IoCartOutline } from 'react-icons/io5'
import { useNavigate } from "react-router-dom"
import { useCart } from "../Context/CartContext"

const   ProductCard = ({product}) => {
  const Navigate = useNavigate()
  const {addToCart, cartItem} = useCart()
   console.log(cartItem)
   
  // return(
  //   <div className="bg-white flex flex-row items-center gap-4 p-4 rounded-lg shadow mb-4">
  //       <img src={product.image} 
  //       alt="" className='bg-gray-100 aspect-square' 
  //       onClick={()=>Navigate(`/products/${product.id}`)}/>
  //       <h1 className='line-clamp-2 p-1 font-semibold'>{product.title}</h1>
  //       <p className='my-1 text-1g text-gray-800 font-bold'>${product.price}</p>
  //       <button  onClick={()=>addToCart(product)} className='bg-red-500 px-3 py-2 text-lg rouded-md text-white w-full cursor-pointer flex gap-2 items-center justify-center font-semibold '>
  //         <IoCartOutline className= 'w-6 h-6' /> Add to Cart </button>
   return (
    <div className="bg-white flex flex-row items-center gap-4 p-4 rounded-lg shadow mb-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-20 h-20 object-contain rounded bg-gray-100 cursor-pointer"
        onClick={() => Navigate(`/products/${product.id}`)}
      />
      <div className="flex-1">
        <h1 className="line-clamp-2 font-semibold text-base">{product.title}</h1>
        <p className="my-1 text-lg text-gray-800 font-bold">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-red-500 px-3 py-2 text-lg rounded-md text-white w-full cursor-pointer flex gap-2 items-center justify-center font-semibold"
        >
          <IoCartOutline className="w-6 h-6" /> Add to Cart
        </button>
      </div>
        
    </div>
  )
}

export default ProductCard