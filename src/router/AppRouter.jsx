import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from "../components/Navbar";
import Basket from '../pages/Basket';
import NotFound from '../pages/NotFound';

import { Provider } from 'react-redux'
import {store} from "../store/store"; 
import ProductDetail from '../components/home/ProductDetail';

const AppRouter = () => {
  return (
    <BrowserRouter>

<Provider store={store}>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<NotFound />} />




    </Routes>
    </Provider>
    </BrowserRouter>
  )
}

export default AppRouter