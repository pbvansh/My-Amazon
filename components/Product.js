import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useEffect, useState } from "react"
import Currency from 'react-currency-formatter'
import { useRecoilState, useRecoilValue } from "recoil";
import { basketItemAtom, basketItemCountAtom } from "../atoms/basketAtom";



const MIN_RAT = 1;
const MAX_RAT = 5;

const Product = ({ id, title, price, description, category, image, rating }) => {

    const [rat] = useState(
        Math.floor(Math.random() * (MAX_RAT - MIN_RAT + 1) + MIN_RAT)
    )
    const [hasPrime] = useState(Math.random() > 0.5);
    const [items,setItems] = useRecoilState(basketItemAtom)

    function incCount(){
        setItems([...items,{
            id, title, price, description, category, image,rat,hasPrime
        }])
    }

    return (
        <div key={id} className="relative flex flex-col p-10 bg-white m-5 z-20">
            
            <p className="absolute top-2 right-2 text-gray-400 text-xs italic">{category}</p>
            <Image
                src={image}
                height={200}
                width={200}
                objectFit="contain"
            />
            <h4 className="my-3">{title}</h4>
            <div className="flex text-yellow-400">
                {
                    Array(rat).fill().map((_, i) => (
                        <StarIcon key={i} className="h-5" />
                    ))
                }
            </div>
            <p className="text-sm my-2 line-clamp-2">{description}</p>
            <div className="mb-5">
                <Currency quantity={price} currency="INR" />
            </div>
            {
                hasPrime && (
                    <div className="flex items-center space-x-2 -mt-5">
                        <img className="w-12" src="https://links.papareact.com/fdw" />
                        <p className="text-sm text-gray-500 ">FREE Next-day Delivery</p>
                    </div>
                )
            }

            <button onClick={incCount} className="btn">Add to Basket</button>
        </div>
    )
}

export default Product
