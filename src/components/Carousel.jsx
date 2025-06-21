
import React, { useEffect } from 'react'
import {getData } from '../Context/DataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Category from './Category';
import { Link } from "react-router-dom";

const Carousel = () => {
    const { data, fetchAllProducts } = getData()
    console.log(data);

    useEffect(() => {
        fetchAllProducts()
    }, [])

    const SamplePrevArrow = (props) => {
        const {className, style, onClick} = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3}}>
                <AiOutlineArrowLeft className='arrows' style={{...style, display: "block", borderRadius:"50px", background:"#f53347" , color:"white" , position:"absolute", padding:"2px", left:"50px"}} />
            </div>
        )
    }
    const SampleNextArrow = (props) => {
        const {className, style, onClick} = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`}>
                <AiOutlineArrowRight className='arrows' style={{...style, display: "block", borderRadius:"50px", background:"#f53347" , color:"white" , position:"absolute", padding:"2px", right:"50px"}} />
            </div>
        )
    }

    var settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed:2000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover:false,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,
    };

    return (
        <div>
            <Slider {...settings}>
                {
                    data?.slice(0,7)?.map((item, index) => {
                        return <div key={index} className='bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10'>
                            <div className='flex flex-col md:flex-row gap-10 justify-center h-[600px] my-20 md:my-0 items-center px-4'>
                                <div className='md:space-y-6 space-y-3'>
                                    <h3 className='text-red-500 font-semibold font-sans text-sm'>Powering Your World with the Best in Electronics</h3>
                                    <h1 className='md:text-4xl text-xl font-bold uppercase line-clamp-2 md:line-clamp-3 md:w-[500px] text-white'>{item.title}</h1>
                                    <p className='md:w-[500px] line-clamp-3 text-gray-400 pr-7'>{item.description}</p>
                                    <Link to={`/products/${item.id}`}>
  <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2 w-full max-w-[200px] md:w-auto md:max-w-none">
    Shop Now
  </button>
</Link>
                                    {/* <button className='bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2'>Shop Now</button> */}
                                </div>
                                <div>
                                    <img src={item.image} alt={item.title} className='rounded-full w-[550px] hover:scale-105 transition-all shadow-2xl shadow-red-400'/>
                                </div>
                            </div>
                        </div>
                    })
                }              
            </Slider>
            <Category/>
        </div>
    )
}

export default Carousel
// import React, { useEffect, useState } from "react";
// import { getData } from "../Context/DataContext";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import Category from "./Category";

// const Carousel = () => {
//     const { data, fetchAllProducts } = getData();
//     const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//     useEffect(() => {
//         fetchAllProducts();
        
//         const handleResize = () => {
//             setWindowWidth(window.innerWidth);
//         };

//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     const SamplePrevArrow = (props) => {
//         const { className, style, onClick } = props;
//         return (
//             <div 
//                 onClick={onClick} 
//                 className={`arrows ${className}`} 
//                 style={{ 
//                     zIndex: 3,
//                     left: windowWidth < 768 ? '10px' : '50px',
//                     ...style 
//                 }}
//             >
//                 <AiOutlineArrowLeft className='arrows' style={{
//                     display: "block",
//                     borderRadius: '50px',
//                     background: '#f53347',
//                     color: 'white',
//                     padding: '2px',
//                     fontSize: windowWidth < 768 ? '16px' : '20px'
//                 }}/>
//             </div>
//         )
//     }

//     const SampleNextArrow = (props) => {
//         const { className, style, onClick } = props;
//         return (
//             <div 
//                 onClick={onClick} 
//                 className={`arrows ${className}`} 
//                 style={{ 
//                     zIndex: 3,
//                     right: windowWidth < 768 ? '10px' : '50px',
//                     ...style 
//                 }}
//             >
//                 <AiOutlineArrowRight className='arrows' style={{
//                     display: "block",
//                     borderRadius: '50px',
//                     background: '#f53347',
//                     color: 'white',
//                     padding: '2px',
//                     fontSize: windowWidth < 768 ? '16px' : '20px'
//                 }}/>
//             </div>
//         )
//     }

//     const settings = {
//         dots: false,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         pauseOnHover: false,
//         nextArrow: <SampleNextArrow to="next"/>,
//         prevArrow: <SamplePrevArrow to="prev"/>
//     };

//     return (
//         <div className="relative">
//             <Slider {...settings}>
//                 {data?.slice(0,7).map((item, index) => (
//                     <div key={index} className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
//                         <div className="flex flex-col md:flex-row gap-4 md:gap-10 justify-center h-auto md:h-[600px] items-center px-4 py-8 md:py-0">
//                             <div className="order-2 md:order-1 space-y-4 md:space-y-6 text-center md:text-left w-full md:w-auto px-4">
//                                 <h3 className='text-red-500 font-semibold font-sans text-sm'>
//                                     Powering your world with the Best Electronics
//                                 </h3>
//                                 <h1 className="text-2xl md:text-4xl font-bold uppercase line-clamp-2 w-full md:w-[500px] text-white">
//                                     {item.title}
//                                 </h1>
//                                 <p className="w-full md:w-[500px] line-clamp-3 text-gray-400 md:pr-7">
//                                     {item.description}
//                                 </p>
//                                 <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2 mx-auto md:mx-0">
//                                     Shop Now
//                                 </button>
//                             </div>
//                             <div className="order-1 md:order-2 w-full md:w-auto flex justify-center">
//                                 <img 
//                                     src={item.image} 
//                                     alt={item.title} 
//                                     className="rounded-full w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[550px] lg:h-[550px] object-cover hover:scale-105 transition-all shadow-2xl shadow-red-400"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </Slider>
//             <Category/>
//         </div>
//     );
// }

// export default Carousel;
