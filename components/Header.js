import Image from "next/image"
import { LocationMarkerIcon, MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router"
import { useRecoilValue } from "recoil"
import { basketItemAtom, basketItemCountAtom } from "../atoms/basketAtom"

const Header = () => {

  const { data: session } = useSession();
  const count = useRecoilValue(basketItemAtom)
  const route = useRouter()

  return (
    <header className="sticky top-0 z-50">
      {/* top nav*/}
      <div className="flex items-center bg-amazon_blue  py-2">
        <div className=" relative flex flex-grow pt-2  items-center sm:flex-grow-0">
          <Image
            onClick={() => route.push('/')}
            className="cursor-pointer"
            src={'https://links.papareact.com/f90'}
            height={35}
            width={140}
            objectFit="contain" />
        </div>
        <div className="hidden lg:inline-flex text-white text-sm m-1 mr-4 whitespace-nowrap items-end link space-x-2">
          <div>
            <LocationMarkerIcon className="h-6" />
          </div>
          <div>
            <p>hello</p>
            <p className="font-bold">Select your address</p>
          </div>
        </div>
        <div className=" hidden sm:flex bg-yellow-400 rounded-md flex-grow items-center">
          <div className="h-10 p-1 rounded-l-md bg-gray-100 hover:bg-gray-200">
            <select className=" h-full bg-transparent focus:outline-none max-w-sm">
              <option selected="selected" value="search-alias=aps">All Categories</option>
              <option value="search-alias=alexa-skills">Alexa Skills</option>
              <option value="search-alias=amazon-devices">Amazon Devices</option>
              <option value="search-alias=fashion">Amazon Fashion</option>
              <option value="search-alias=nowstore">Amazon Fresh</option>
              <option value="search-alias=amazon-pharmacy">Amazon Pharmacy</option>
              <option value="search-alias=appliances">Appliances</option>
              <option value="search-alias=mobile-apps">Apps &amp; Games</option>
              <option value="search-alias=baby">Baby</option>
              <option value="search-alias=beauty">Beauty</option>
              <option value="search-alias=stripbooks">Books</option>
              <option value="search-alias=automotive">Car &amp; Motorbike</option>
              <option value="search-alias=apparel">Clothing &amp; Accessories</option>
              <option value="search-alias=collectibles">Collectibles</option>
              <option value="search-alias=computers">Computers &amp; Accessories</option>
              <option value="search-alias=todays-deals">Deals</option>
              <option value="search-alias=electronics">Electronics</option>
              <option value="search-alias=furniture">Furniture</option>
              <option value="search-alias=lawngarden">Garden &amp; Outdoors</option>
              <option value="search-alias=gift-cards">Gift Cards</option>
              <option value="search-alias=grocery">Grocery &amp; Gourmet Foods</option>
              <option value="search-alias=hpc">Health &amp; Personal Care</option>
              <option value="search-alias=kitchen">Home &amp; Kitchen</option>
              <option value="search-alias=industrial">Industrial &amp; Scientific</option>
              <option value="search-alias=jewelry">Jewellery</option>
              <option value="search-alias=digital-text">Kindle Store</option>
              <option value="search-alias=luggage">Luggage &amp; Bags</option>
              <option value="search-alias=luxury-beauty">Luxury Beauty</option>
              <option value="search-alias=dvd">Movies &amp; TV Shows</option>
              <option value="search-alias=popular">Music</option>
              <option value="search-alias=mi">Musical Instruments</option>
              <option value="search-alias=office-products">Office Products</option>
              <option value="search-alias=pets">Pet Supplies</option>
              <option value="search-alias=instant-video">Prime Video</option>
              <option value="search-alias=shoes">Shoes &amp; Handbags</option>
              <option value="search-alias=software">Software</option>
              <option value="search-alias=sporting">Sports, Fitness &amp; Outdoors</option>
              <option value="search-alias=specialty-aps-sns">Subscribe &amp; Save</option>
              <option value="search-alias=home-improvement">Tools &amp; Home Improvement</option>
              <option value="search-alias=toys">Toys &amp; Games</option>
              <option value="search-alias=under-ten-dollars">Under ₹500</option>
              <option value="search-alias=videogames">Video Games</option>
              <option value="search-alias=watches">Watches</option>
            </select>
          </div>
          <input type="text" className="outline-none flex-grow flex-shrink p-2" />
          <SearchIcon className="h-5 w-5 mx-3" />
        </div>

        <div className="text-white text-sm flex space-x-6 whitespace-nowrap mx-4 items-center">
          <div onClick={!session ? signIn : signOut} className="link">
            <p>Hello {session ? ` ${session.user.name}` : 'Sign In'}</p>
            <p className="font-bold md:text-sm"> Account & Lists</p>
          </div>
          <div className="link">
            <p>
              Returns
            </p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div >
          <div onClick={() => route.push('/basket')} className=" link flex items-center relative">
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
