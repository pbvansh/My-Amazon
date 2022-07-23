import Image from "next/image"
import Header from "../components/Header"
import { useRecoilValue } from 'recoil'
import { basketItemAtom } from "../atoms/basketAtom"
import BasketItem from "../components/BasketItem"
import { useSession } from "next-auth/react"


const Basket = () => {

  const Items = useRecoilValue(basketItemAtom)
  const { data: session } = useSession()

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left side */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src='https://links.papareact.com/ikj'
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {
                Items.length === 0
                  ? "Your Basket is Empty."
                  : "Shopping Basket"
              }
            </h1>

            {
              Items.map((item, i) => (
                <BasketItem
                  key={i}
                  idx={i}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                  rat={item.rat}
                  hasPrime={item.hasPrime}
                  qty={item.quantity}
                />
              ))
            }
          </div>
        </div>

        {/* right side */}
        <div>
          {

            Items.length > 0 && (
              <>
                <h1 className="text-lg font-semibold whitespace-nowrap">
                  Subtotal ({Items.length} item):
                  <span className="font-bold">1000</span>
                </h1>
                {/*               <input type='checkbox'>This order contains a gift</input> */}
                <button 
                 disabled = {!session}
                 className={`btn mt-2 ${!session &&'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                  {!session ? 'Sign in to Checkout' : 'Proceed to Buy'}
                </button>
              </>
            )
          }
        </div>
      </main>
    </div>
  )
}

export default Basket
