import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from 'react-currency-formatter';
import {useRecoilState} from 'recoil'
import { basketItemAtom } from "../atoms/basketAtom";

const BasketItem = ({id, title, price, description, category, image, rat,hasPrime}) => {

    const [items,setItems] = useRecoilState(basketItemAtom)

    const addItem =() =>{
        setItems([...items,{id, title, price, description, category, image, rat,hasPrime}])
    }
    
    const removeItem = () =>{
        const index = items.findIndex((item)=>item.id === id )
        let newItem =[...items];
        if(index >=0){
            newItem.splice(index,1)
        }else{
            console.warn(`Cant remove product (id : ${id}) as its not in`)
        }
        setItems(newItem)
    }

    return (
        <div className="grid grid-cols-5">
            <Image
                src={image}
                height={200}
                width={200}
                objectFit="contain"
            />

            {/* middle */}

            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {
                        Array(rat)
                        .fill()
                        .map((_,i)=>(
                            <StarIcon className="h-5 w-5 text-yellow-400"/>
                        ))
                    }
                </div>
                <p className="line-clamp-3 text-sm my-">{description}</p>
                <Currency quantity={price} currency="INR"/>
                {
                    hasPrime && (
                        <div className="flex items-center space-x-2">
                            <img
                                className="w-12"
                                loading="lazy"
                                src="https://links.papareact.com/fdw"
                                alt=""
                                
                            />
                            <p className="text-sm text-gray-500">FREE Next-day Delivery</p>
                        </div>    
                    )
                }
            </div>

            {/* right Add/Remove buttons */}

            <div className="flex flex-col space-y-2 justify-self-end">
                <button className="btn" onClick={addItem}>Add to Basket</button>
                <button className="btn" onClick={removeItem}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default BasketItem
