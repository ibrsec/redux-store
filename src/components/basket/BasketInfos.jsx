import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { emptyBasket } from '../../store/productReducer';

const BasketInfos = () => { 
  const basketProducts = useSelector((state) => state.product.basket)
    const dispatch = useDispatch();

    const allPrices = basketProducts?.map(item => Number(item.product.price * item.quantity.toFixed(2)));
    const totalPrices = allPrices?.reduce((sum,current)=> sum + current,0).toFixed(2)
    console.log('allPrices', allPrices)
    console.log('totalPrices', totalPrices)

    console.log(basketProducts);
  return (
   
    <div className="basket-infos flex items-center justify-between mt-16 mb-28">
      <div className="total">
        <p className='text-3xl font-[400]'>Subtotal: {totalPrices}$</p>
      </div>
        <button className=" btn" onClick={() => dispatch(emptyBasket())} >Empty Cart</button>
    </div>
  )
}

export default BasketInfos;