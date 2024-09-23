import React,{useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Placeorder from './Pages/Placeorder/Placeorder'
import Cart from './Pages/Cart/Cart'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'


export default function App() {
  const[login,setLogin]=useState(false); 
  return (
  <>
  {login?<Login setLogin={setLogin}/>:<></>}
     <  div className="app">
      <Navbar setLogin={setLogin}/>
       <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>
       </Routes>
       </div>
       <Footer/></>
  )
}
