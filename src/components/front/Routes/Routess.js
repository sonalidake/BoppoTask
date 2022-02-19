import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import Signup from '../Signup/Signup';
// import data from '../components/back/Data/Data/data';

// const person=[
//   {
//     id: '1',
//     name: 'Beats Headphone',
//     price: 990,
//     image: './pics/img1.jpg'
// },
// {
//     id: '2',
//     name: 'sol Headphone',
//     price: 991,
//     image: './pics/img2.jpg'
// }
// ]



const Routess = ({ productItems, cartItems, handleAddProduct, handleCartClearance, handleRemoveProduct }) => {
  // const {productItems} = data;


  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Products productItems={productItems} handleAddProduct={handleAddProduct} />} />
        {/* <Route exact path='/' element={<Products productItems={person} handleAddProduct={handleAddProduct} />} /> */}

        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/cart'
          element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}
            handleCartClearance={handleCartClearance} />} />


      </Routes>
    </div>
  )
}

export default Routess