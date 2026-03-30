import React from 'react'
import suggestedData from '../data.js/suggested_product_data'
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'

const Category_List = () => {

    const { name } = useParams();

    const selectedCategory = suggestedData.find(
        (item) => item.Category === name
    );

    if(!selectedCategory){
        return(
            <div className="text-center py-20 text-gray-600">
                Category "{name}" does not exist.
            </div>
        );
    }

    

    const checkCategory = selectedCategory?.Products || [];

    const itemNavigate = useNavigate();

    const category = selectedCategory.Category;



   
    const handlerDetails = (item, title) => {
    const formattedTitle = encodeURIComponent(title.replace(/\s+/g, '-'));
    itemNavigate(`/${category}/${formattedTitle}/${item}`); // category + product id
};

  

    return (
        <div>

            <div className='grid grid-cols-4 gap-5 p-5'>

                {
                    checkCategory.length > 0 ? (
                        checkCategory.map((item, index) => (
                            <div key={index} className='suggestedBox border-2 rounded-2xl'>
                                <ul>
                                    <li>
                                        <img src={item.img} className='w-full rounded-md pl-10 pt-5 bg-gray-200' />
                                    </li>
                                    <li className='pt-4'>
                                        <h6 className='cursor-pointer' onClick={() => handlerDetails(item.id, item.title)}>{item.title}</h6>
                                        <span>Rs: {item.price}</span>
                                        <button className=' cursor-pointer float-right text-2xl default-color bg-gray-200 rounded-full p-3'>
                                            <FaShoppingCart />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ))
                    ) : (
                        <p>No products found for "{name}"</p>
                    )
                }
            </div>


        </div >
    )
}

export default Category_List
