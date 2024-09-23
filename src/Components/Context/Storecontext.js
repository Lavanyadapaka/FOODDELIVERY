import React,{createContext, useEffect, useState} from 'react';
import { food_list } from '../../assets/assets';
export const Storecontext=createContext(null);

const Storecontextprovider = (props) => {
  const [cartItems,setCartItems]=useState({});
  const addToCart=(itemId)=>{
    if (!cartItems[itemId]){
      setCartItems((e)=>({...e,[itemId]:1}))
    }
  
  else{
    setCartItems((e)=>({...e,[itemId]:e[itemId]+1}))
  }
}
const removeFromCart=(itemId)=>{
  setCartItems((e)=>({...e,[itemId]:e[itemId]-1}))
}
const getTotalCartAmount=()=>{
  let totalAmount=0;
  for(const item in cartItems){
    if(cartItems[item]>0){
      let itemInfo = food_list.find((product)=>product._id===item);
      totalAmount+=itemInfo.price*cartItems[item];
    }   
  }
  return totalAmount;
}

    const contextValue={
       food_list,
       cartItems,
       setCartItems,
       addToCart,
       removeFromCart,
       getTotalCartAmount
    }
  return (
    <div>
      <Storecontext.Provider value={contextValue}>
        {props.children}
      </Storecontext.Provider>
    </div>
  )
}

export default Storecontextprovider
