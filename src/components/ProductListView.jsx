import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../Context/CartContext'

const ProductListView = ({ product }) => {
    const navigate = useNavigate()
    const { addToCart } = useCart()

       
  
  

    return (
        <div className='space-y-4 mt-2 rounded-md'>
            <div className="bg-gray-100 flex flex-row items-center gap-4 p-4 rounded-lg shadow mb-4">
                <img src={product.image} 
                alt={product.title} 
                className="w-20 h-20 object-contain rounded cursor-pointer"
                onClick={() => navigate(`/products/${product.id}`)} />
                <div className='space-y-2'>
                    <h1 className='font-bold md:text-xl text-lg line-clamp-3 hover:text-red-400 md:w-full w-[220px]'>{product.title}</h1>
                    <p className='font-semibold flex items-center md:text-lg text-sm'>$<span className='md:text-4xl text-3xl'>{product.price}</span> ({product.discount}% off)</p>
                    <p className='text-sm'>FREE delivery <span className='font-semibold'>Fri, 18 Apr</span> <br />
                        Or fastest delivery <span className='font-semibold'>Tomorrow, 17 Apr</span></p>
                    <button onClick={() => addToCart(product)} className='bg-red-500 text-white px-3 py-1 rounded-md'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductListView
// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useCart } from '../Context/CartContext'

// const ProductListView = ({ product }) => {
//   const navigate = useNavigate()
//   const { addToCart } = useCart()

//   return (
//     <div className='space-y-4 mt-2 rounded-md hover:shadow-md transition-shadow duration-300'>
//       <div className='bg-gray-100 flex flex-col sm:flex-row gap-3 sm:gap-7 p-3 sm:p-4 rounded-md'>
//         {/* Product Image */}
//         <div className='flex-shrink-0 self-center sm:self-auto'>
//           <img
//             src={product.image}
//             alt={product.title}
//             className='h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 rounded-md cursor-pointer object-contain hover:scale-105 transition-transform'
//             onClick={() => navigate(`/products/${product.id}`)}
//           />
//         </div>

//         {/* Product Details */}
//         <div className='space-y-2 flex-1'>
//           {/* Title */}
//           <h1
//             className='font-bold text-base sm:text-lg md:text-xl line-clamp-2 hover:text-red-400 cursor-pointer'
//             onClick={() => navigate(`/products/${product.id}`)}
//           >
//             {product.title}
//           </h1>

//           {/* Price Section */}
//           <div className='flex flex-wrap items-baseline gap-2'>
//             <p className='font-semibold text-sm sm:text-base md:text-lg'>
//               $<span className='text-2xl sm:text-3xl md:text-4xl'>{product.price}</span>
//             </p>
//             {product.discount > 0 && (
//               <span className='bg-red-500 text-white text-xs sm:text-sm px-2 py-0.5 rounded-full'>
//                 {product.discount}% off
//               </span>
//             )}
//           </div>

//           {/* Delivery Info */}
//           <div className='text-xs sm:text-sm space-y-1'>
//             <p>
//               FREE delivery <span className='font-semibold'>Fri, 18 Apr</span>
//             </p>
//             <p>
//               Or fastest delivery <span className='font-semibold'>Tomorrow, 17 Apr</span>
//             </p>
//           </div>

//           {/* Action Buttons */}
//           <div className='flex flex-wrap gap-2 pt-2'>
//             <button
//               onClick={() => addToCart(product)}
//               className='bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 sm:py-1 rounded-md text-sm sm:text-base transition-colors'
//             >
//               Add to Cart
//             </button>
//             <button
//               onClick={() => navigate(`/products/${product.id}`)}
//               className='border border-gray-400 hover:bg-gray-200 px-3 py-1.5 sm:py-1 rounded-md text-sm sm:text-base transition-colors'
//             >
//               View Details
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductListView
