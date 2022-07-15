import Image from "next/image"
import { LocationMarkerIcon, MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router"
import { useRecoilValue } from "recoil"
import { basketItemAtom, basketItemCountAtom } from "../atoms/basketAtom"

const Header = () => {

  const {data:session} = useSession();
  const count = useRecoilValue(basketItemAtom)
  const route = useRouter()

  return (
    <header className="sticky top-0 z-50">
      {/* top nav*/}
      <div className="flex items-center bg-amazon_blue  py-2">
        <div  className=" relative flex flex-grow pt-2  items-center sm:flex-grow-0">
          <Image
            onClick={()=>route.push('/')}
            className="cursor-pointer"
            src={'https://links.papareact.com/f90'}
            height={35}
            width={140}
            objectFit="contain" />
        </div>
        <div className="hidden lg:inline-flex text-white text-sm m-1 mr-4 whitespace-nowrap items-end link space-x-2">
          <div>
              <LocationMarkerIcon className="h-6"/>
          </div>
          <div>
            <p>hello</p>
            <p className="font-bold">Select your address</p>
          </div>
        </div>
        <div className=" hidden sm:flex bg-yellow-400 rounded-md flex-grow items-center">
          <div className="h-10 p-1 rounded-l-md bg-gray-100 hover:bg-gray-200  text-xs">
            <select className=" h-full bg-transparent focus:outline-none">
              <option>All</option>
              <option>qwe</option>
              <option>asd</option>
              <option>ert</option>
            </select>
          </div>
          <input type="text" className="outline-none flex-grow flex-shrink p-2" />
          <SearchIcon className="h-5 w-5 mx-3" />
        </div>

        <div className="text-white text-sm flex space-x-6 whitespace-nowrap mx-4 items-center">
          <div onClick={!session ? signIn : signOut} className="link">
            <p>Hello { session ? ` ${session.user.name}` : 'Sign In'}</p>
            <p className="font-bold md:text-sm"> Account & Lists</p>
          </div>
          <div className="link">
            <p>
              Returns
            </p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div >
          <div onClick={()=>route.push('/basket')}  className=" link flex items-center relative">
            <span className="absolute flex top-0 -right-1 lg:right-10 h-4 w-4
              bg-yellow-400 items-center justify-center rounded-full font-bold text-black ">{count.length}</span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden lg:inline font-bold md:text-sm mt-3">Basket</p>
          </div>
        </div>
      </div>
      {/* bottom nav */}

      <div className="flex bg-amazon_blue-light whitespace-nowrap overflow-x-scroll scrollbar-hide text-white p-2 text-sm pl-5 items-center space-x-6">
        <p className="flex link items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
      <p className="link">
        Best Sellers
      </p>
      <p className="link">
        Mobiles
      </p>
      <p className="link">
        Customer Service
      </p>
      <p className="link">
        Today's Deals
      </p>
      <p className="link">
        Fashion
      </p>
      <p className="link">
        Electronics
      </p>
      <p className="link">
        Books
      </p>
      <p className="link">
        Prime
      </p>
      <p className="link">
        New Releases
      </p>
    </div>
    </header >
  )
}

export default Header
//
