import React from "react"
import { getData } from "../Context/DataContext"
import { useEffect } from "react"
import FilterSection from "../components/FilterSection"
import Loading from '../assets/Loading4.webm'
import ProductCard from "../components/ProductCard"
import { useState } from "react"
import Pagination from "../components/Pagination"
import notFound from '../assets/notFound.json'
import Lottie from 'lottie-react'
import MobileFilter from '../components/MobileFilter'


const Products = () => {
  const { data, fetchAllProducts } = getData()
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("ALL")
  const [brand, setBrand] = useState("ALL")
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [page, setPage] = useState(1)
  const [openFilter,setOpenFilter]=useState(false)
  useEffect(() => {
    fetchAllProducts()
    window.scrollTo(0, 0) // Scroll to top when component mounts
  }, [])

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
    setPage(1) // Reset page to 1 when category changes
    setOpenFilter(false)
  }
  const handleBrandChange = (e) => {
    setBrand(e.target.value)
    setPage(1) // Reset page to 1 when brand changes
    setOpenFilter(false)
  }
  const pageHandler = (selectedPage) => {
    setPage(selectedPage)
    window.scrollTo(0,0)
    // fetchAllProducts(selectedPage)
  }
  const filteredData = data?.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "ALL" || item.category === category) &&
    (brand === "ALL" || item.brand === brand) &&
    item.price >= priceRange[0] && item.price <= priceRange[1]


  )
  const dynamicPage = Math.ceil(filteredData?.length / 8)



  return (
    <div>
      <div className='max-w-6xl mx-auto px-4 px-4 mb-10'>
        <MobileFilter openFilter={openFilter} setOpenFilter={setOpenFilter} search={search} setSearch={setSearch} brand={brand}
                  setBrand={setBrand} priceRange={priceRange} setPriceRange={setPriceRange} category={category} setCategory={setCategory} handleCategoryChange={handleCategoryChange} handleBrandChange={handleBrandChange} />
        {
          data?.length > 0 ? (
            <>

              <h1 className='text-2xl font-semibold mt-10'>Products</h1>
              <p className='text-gray-500 text-sm'>Showing {filteredData?.length} results</p>
              <div className='flex gap-8'>
                <FilterSection search={search} setSearch={setSearch} brand={brand}
                  setBrand={setBrand} priceRange={priceRange} setPriceRange={setPriceRange} category={category} setCategory={setCategory} handleCategoryChange={handleCategoryChange} handleBrandChange={handleBrandChange} />
                {
                  filteredData?.length > 0 ? (
                    <div className='flex flex-col justify-center item-center'>
                      <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-7 mt-10'>
                        {
                          filteredData?.slice(page * 8 - 8, page * 8).map((product, index) => {
                            return <ProductCard key={index} product={product} />
                          })
                        }
                      </div>
                      <Pagination pageHandler={pageHandler} page={page} dynamicPage={dynamicPage} />
                    </div>
                  ) : (
                    <div className='flex justify-center items-center md:h-[600px] md:w-[900px] mt-10'>
                      {/* <lottie animationData={notFound}
                        classID='w-[500px]' /> */}
                        Not Found

                    </div>
                  )
                }




              </div>


            </>
          ) : (
            <div className='flex items-center justify-center h-[400px]'>
              <video muted autoPlay loop>
                <source src={Loading} type='video/webm' />
              </video>

            </div>
          )
        }

      </div>

    </div>
  )
}

export default Products