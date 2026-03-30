import React, { useState } from 'react'
import shoe from '../../assets/shoe.png'
import suggestedData from '../../data.js/suggested_product_data'

const Suggested_Product = () => {


    const [filterCategory, setFilterCategory] = useState("Casuals");

    const filteredProducts =
        filterCategory === "All Shoes"
            ? suggestedData.flatMap(categ => categ.Products)
            : suggestedData
                .filter(categ => categ.Category === filterCategory)
                .flatMap(categ => categ.Products);


    return (
        <div>
            <h4 className='text-3xl text-center font-semibold pt-10'>SUGGESTED FOR YOU</h4>

            <ul className='cursor-pointer suggested_cat flex items-center justify-center'>
                {

                    ["All Shoes", "Casuals", "Sports", "Sneakers", "Boots"].map((cat, i) => {
                        return (
                            <li key={i} onClick={() => setFilterCategory(cat)} className={`${filterCategory == cat ? "text-orange-400" : ""}`}>{cat}</li>
                        )
                    })

                }
            </ul>

            <div className='suggested_items'>
                <div className='grid grid-cols-4'>
                    {
                        filteredProducts.map((item, i) => {

                            return (


                                <div key={i} className='suggestedBox'>
                                    <ul className='flex items-center'>
                                        <li><img src={item.img} className='w-20' /></li>
                                        <li>
                                            <h6>{item.title}</h6>
                                            <span>Rs: {item.price}</span>
                                            <span>{item.btn}</span>
                                        </li>
                                    </ul>
                                </div>


                            )

                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Suggested_Product
