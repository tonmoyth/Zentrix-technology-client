import React, {useState} from "react";
import { Helmet } from "react-helmet-async";

// react icons
import {FaHeart, FaRegHeart, FaStar} from "react-icons/fa";
import {FiMinus, FiPlus} from "react-icons/fi";
import {IoCartOutline} from "react-icons/io5";


function Product({product}) {
    console.log(product)
    const [rating, setRating] = useState(5);
    const [isFavorite, setIsFavorite] = useState(false);
    const [count, setCount] = useState(0);


    const handleIncrement = () => {
        setCount(prevValue => prevValue + 1);
    }

    const handleDecrement = () => {
        setCount(prevValue => prevValue - 1);
    }

    const handleInputValueChange = (e) => {
        setCount(Number(e.target.value));
    }


  return (
    <>
    <Helmet>
        <title>Product</title>
     
      </Helmet>
       <div className="relative border dark:border-slate-700 w-full  border-gray-300 rounded-md p-5">

            {/* favorite icon */}
            <FaHeart onClick={() => setIsFavorite(false)}
                     className={` ${isFavorite ? "opacity-100 scale-[1] z-10" : "opacity-0 scale-[0.7] z-[-1]"} text-[1.4rem] absolute top-3 dark:text-slate-400 text-red-500 right-3 cursor-pointer transition-all duration-300`}/>
            <FaRegHeart onClick={() => setIsFavorite(true)}
                        className={`${isFavorite ? "opacity-0 scale-[0.7] z-[-1]" : "opacity-100 scale-[1] z-10"} text-[1.4rem] absolute top-3 dark:text-slate-400 right-3 text-gray-600 cursor-pointer transition-all duration-300`}/>


            {/* product image */}
            <img alt="product/image" src="https://i.ibb.co.com/p0CjNLD/Link-11-png.png"
                 className="w-[150px] mt-2 mx-auto"/>

            {/* product details */}
            <div className="mt-8">

                {/* rating area */}
                <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, index) => {
                        const starRating = index + 1;
                        return (
                            <FaStar
                                key={starRating}
                                className={`cursor-pointer ${
                                    starRating <= rating ? "text-yellow-400" : "text-gray-300"
                                }`}
                                size={16}
                                onClick={() => setRating(starRating)}
                            />
                        );
                    })}
                </div>

                <h3 className="text-[1.1rem] dark:text-[#abc2d3] font-medium mt-1.5">{product?.productName}</h3>

                <div className="flex items-center gap-[10px]">
                    <p className="text-[1rem] font-semibold mt-1 text-[#0FABCA]">{product?.productPrice}</p>
                    <del className="text-[1rem] font-normal mt-1 text-gray-500 ">$80.50</del>
                </div>

                <div className="flex items-center w-full justify-between mt-4">

                    <div className="flex items-center dark:border-slate-700 border border-gray-200 rounded-md">
                        <button
                            className="bg-gray-100 p-[9px] rounded-l-md dark:text-[#abc2d3] dark:bg-slate-900 text-gray-600 text-[1.1rem]"
                            onClick={handleDecrement}><FiMinus/></button>
                        <input type="number" value={count}
                               className="w-[50px] py-[4px] dark:bg-transparent dark:text-[#abc2d3] outline-none text-gray-600 focus:ring-0 border-none text-center text-[1.1rem]"
                               onInput={handleInputValueChange}/>
                        <button
                            className="bg-gray-100 p-[9px] rounded-r-md dark:text-[#abc2d3] dark:bg-slate-900 text-gray-600 text-[1.1rem]"
                            onClick={handleIncrement}><FiPlus/></button>
                    </div>

                    <button
                        className="py-2 px-4 bg-[#0FABCA] text-white rounded-md flex items-center gap-[0.5rem] text-[0.9rem] hover:bg-[#0195af] transition-all duration-200">
                        <IoCartOutline className="text-[1.3rem]"/>
                    </button>
                </div>
            </div>
        </div>
     
    </>
  )
}

export default Product
