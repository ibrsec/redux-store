import React from 'react'  
import { useDispatch } from 'react-redux'
import { delBasket, minusBasket, plusBasket } from '../../store/productReducer';

const BasketProductCard = ({item}) => { 
  const {product,quantity} = item;
  const {id,name,category,description,image,price,title} = product;
 const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(delBasket(id)); 
    }
    const handlePlus = (id) => {
      dispatch(plusBasket(id)); ;
    }
    const handleMinus = (id) => {
      dispatch(minusBasket(id)); 
    }
  return (
    
    <div className=" h-[400px] max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
  <a href="#">
    <img className="rounded-t-lg h-[50%] w-[100%] object-contain" src={image} alt="" />
  </a>
  <div className="p-5">
    <span >
      <p className="mb-2 text-md  tracking-tight  dark:text-black line-clamp-1">
        {title}
      </p>
    </span>
    <div className='flex items-center gap-3 justify-between pe-8'>
 
    <button
      className="btn" 
      onClick={() => handleRemove(id)}
    >
      Remove
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </button>
    <div className='my-2 text-black text-lg '> {price}$</div>
    </div>
    <div className='text-black text-lg border px-4 py-2  flex items-center gap-2 w-[100px] justify-between mt-2'>
        <span className='cursor-pointer text-2xl' onClick={() => handleMinus(id)}>-</span>
        <span className='cursor-pointer'>{quantity}</span>
        <span className='cursor-pointer text-xl' onClick={() => handlePlus(id)}>+</span>
    </div>
  </div>
</div>

  )
}

export default BasketProductCard