import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import suggestedData from '../data.js/suggested_product_data';
import { Button } from 'react-bootstrap';
import { FaMinus, FaPlus } from 'react-icons/fa6';

const Details = ({ addCart }) => {

    const { categoryName, productId } = useParams();



    const category = suggestedData.find(
        (cat) => cat.Category === categoryName
    );


    const product = category?.Products.find(
        (prod) => prod.id === Number(productId)
    );


    if (!product) {
        return <p>Product not found</p>;
    }

    const [count, setCount] = useState(1);

    const price = product.price;

    const [subTotal, setSubTotal] = useState(price);

    useEffect(() => {
        setSubTotal(count * price);
    }, [count, price]);





    return (
        <div>

            <div className='grid grid-cols-2 mt-10'>
                <div className='px-2'>
                    <img src={product.img} className='ml-10 w-dull h-120 bg-gray-200 p-10' />
                </div>
                <div className='px-2'>
                    <h2 className='text-4xl uppercase'>{product.title} </h2>
                    <p className='font-normal text-lg pt-5'> {product.description}</p>
                    <p className='font-semibold text-md pt-5'>Rs. {product.price}</p>

                    <p className='font-semibold text-xl pt-5'>Sub Total : {subTotal}</p>

                    <div className='detailActions mt-10'>
                        <div className='grid grid-cols-[20%_80%] '>
                            <div className='px-2 text-center'>
                                <ul className=' incDicBx flex justify-between border-1 rounded-xl'>
                                    <li onClick={() => setCount(prev => (prev > 1 ? prev - 1 : 1))}><span className='dic cursor-pointer'><FaMinus /></span></li>
                                    <li><span>{count}</span></li>
                                    <li onClick={() => setCount(count + 1)}><span className='inc cursor-pointer'><FaPlus /></span></li>
                                </ul>
                            </div>
                            <div className='px-2'><Button onClick={()=>addCart(product,count)} className='text-center addCart p-2 rounded-xl border-1 cursor-pointer transition duration-200 text-black btn-default  w-full'>Add to Cart</Button>
                            </div>
                        </div>

                        <div className='px-2 w-full'><Button className='text-center  p-2 rounded-xl border-1 mt-4 w-full cursor-pointer text-white   hover:bg-amber-500 bg-amber-600'>Buy it Now</Button></div>


                    </div>

                </div>


            </div>

        </div>
    )
}

export default Details
