import React,{useState}from 'react'
import './Home.css';
import Header from '../../Components/Navbar/Header/Header';
import Exploremenu from '../../Components/Explore-menu/Exploremenu';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import AppDownload from '../../Components/AppDownload/AppDownload';
export default function Home() {
  const [category,setCategory]=useState("All");
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}
