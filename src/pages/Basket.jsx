import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BasketProductCard from "../components/basket/BasketProductCard";
import BasketInfos from "../components/basket/BasketInfos";

const Basket = () => {
  const basketGlobal = useSelector((state) => state.product.basket);
  const products = useSelector((state) => state.product.products); 

  useEffect(()=>{
    localStorage.setItem("basketGlobal",JSON.stringify(basketGlobal))
  },[basketGlobal])


  return (
    <div className="container-box my-3 ">
      <div className="product-wrapper">
        {basketGlobal?.length > 0 ? (
          basketGlobal?.map((item) => <BasketProductCard item={item} />)
        ) : (
          <p className="text-lg text-red-500 text-center">
            There is no product in the cart
          </p>
        )}
      </div>

      <BasketInfos   />
    </div>
  );
};

export default Basket;
