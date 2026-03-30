import React, { useState } from 'react'
import suggestedData from '../data.js/suggested_product_data'
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const Cart_popup = ({ show, setShow, cartItems, removeCart ,increaseQty , dicreaseQty ,totalValue ,checkoutHandler }) => {



  return (
    <>


      {show && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50 transition-opacity duration-300"
          style={{ backgroundColor: 'rgb(0 0 0 / 73%)' }}
        >
          <div
            className="bg-gray-200 w-96 rounded-xl p-6 transform transition-transform duration-300 scale-90 opacity-0 animate-popup"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h4 className='text-2xl font-semibold'>Shopping Cart</h4>
              <FaTimes
                className='cursor-pointer text-gray-600 hover:text-gray-800'
                onClick={() => setShow(false)}
              />
            </div>

            {/* Product list */}
            <div className='max-h-64 overflow-y-auto'>
              {cartItems.map((item, i) => (

                <ul key={i} className="flex items-center mt-4">
                  <li className='pr-2'>
                    <img
                      src={item.img}
                      alt={item.name}
                      className='w-20 h-20 object-cover bg-gray-300 p-1 rounded-sm'
                    />
                  </li>
                  <li>
                    <h6 className='font-medium'>{item.title} </h6>
                    <span>Rs: {item.price * item.quantity}</span><br />
                    <ul className='mt-4 incDicBx flex cartIncDic justify-between border-1 rounded-xl w-20'>
                      <li onClick={()=>dicreaseQty(item.id)}><span className='dic cursor-pointer'><FaMinus /></span></li>
                      <li><span>{item.quantity}</span></li>
                      <li onClick={()=>increaseQty(item.id)}><span className='inc cursor-pointer'><FaPlus /></span></li>
                    </ul>
                  </li>
                  <li className='flex-1'><FaTimes className='float-right cursor-pointer' onClick={() => removeCart(item.id)} /></li>
                </ul>

              ))}
            </div>

            {/* Total */}
            <div className='mt-4 font-semibold'>
              <p>Total Amount: Rs {totalValue}</p>

              <div className='w-full'>
                <Button onClick={()=>checkoutHandler(cartItems)} className='text-center  p-2 rounded-xl border-1 mt-4 w-full cursor-pointer text-white   hover:bg-amber-500 bg-amber-600'>Check Out</Button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Tailwind animation */}
      <style jsx>{`
        @keyframes popup {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-popup {
          animation: popup 0.3s forwards;
        }
      `}</style>
    </>
  )
}

export default Cart_popup;