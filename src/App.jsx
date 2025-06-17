import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"
import axios from "axios"
import Footer from "./components/Footer"
import SingleProduct from "./pages/SingleProduct"
import CategoryProduct from './pages/CategoryProduct'
import { useCart } from './Context/CartContext'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  const [openDropdown, setOpenDropdown] = useState(false)
  const [location, setLocation] = useState()
  const {cartItem,setCartItems} =useCart()
  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const { latitude, longitude } = pos.coords
      console.log(latitude, longitude);

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      try {
        const location = await axios.get(url)
        console.log(location);
        const exactlocation = location.data.address
        setLocation(exactlocation)
        setOpenDropdown(false)
        // console.log(exactlocation);







      } catch (err) {
        console.log(err);
      }
    })
  }
  useEffect(() => {
    getLocation()
  }, [])

  //load cart from local storage on initial render
  useEffect(() => {
       const storedCart = localStorage.getItem('cartItem')
       if(storedCart){
        setCartItems(JSON.parse(storedCart))
       }
  }, []);

  // save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItem' ,JSON.stringify(cartItem))
  }, [cartItem])


  return (

    <BrowserRouter>
      <Navbar location={location} getLocation={getLocation} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Products' element={<Products />}></Route>
          <Route path='/Products/:id' element={<SingleProduct />}></Route>
          <Route path='/Category/:category'element={<CategoryProduct/>}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Cart' element={<ProtectedRoute>
            <Cart location={location} getLocation={getLocation}/>
          </ProtectedRoute>}></Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App;