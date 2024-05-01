import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeCat } from '../../store/catReducer';

const Categories = () => {
const [categories,setCategories] = useState();
const dispatch =useDispatch();
    const getCategories = async() => {
        const url = "https://fakestoreapi.com/products/categories";
        try{
            const response = await axios.get(url);
            if(response.status !==200){
                throw new Error("not 200 categories")
            } 
            setCategories(response.data);
        }catch(error){
            console.log(error);
        }
    }
useEffect(()=> {
    getCategories()
},[]) 

  return (
    <section>
            <div className="categories flex items-center justify-center gap-5 flex-wrap my-5">
                {categories?.map(item => {
                  return  ( <div key={item} className=" flex items-center justify-center gap-1 cursor-pointer" onClick={() => dispatch(changeCat(item))}>
                        <input type="radio" name="categories" id={item} />
                        <label htmlFor={item}>{item}</label>
                    </div>)
                })}
                </div> 
        </section>
  )
}

export default Categories