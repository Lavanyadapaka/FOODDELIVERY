import React,{useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { Storecontext } from '../Context/Storecontext';
const FoodItem = ({image,name,id,price,description}) => {
   const {cartItems,addToCart,removeFromCart}=useContext(Storecontext);
  return (
    <div className="food-item">
        <div className="food-item-image-container">
            <img className="food-item-image" src={image} alt=""/>
            {!cartItems[id]
            ?<img className="add" onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="no-img"/>:<div className="food-item-counter">
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="no-img"/>
               <p> {cartItems[id]} </p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="no-img"/>
            </div>
             }
            </div>
       
        <div className="food-item-info">
            <div className="food-item-name-rating">

            <p>{name}</p>
            <img src={assets.rating_starts} alt=""/>
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
      
    </div>
  )
}

export default FoodItem
