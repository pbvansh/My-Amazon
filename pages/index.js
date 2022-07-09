import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import ProductsFeed from '../components/productsFeed'
import dynamic from 'next/dynamic'

export default function Home({products}) {
  return (
   <div className='bg-gray-100'>
    <Head>
      <title>
        My-Amazon
      </title>
    </Head>
     {/* header */}
     <Header/>
     <main className='max-w-screen-2xl mx-auto'>
      {/* Banner */}
      <Banner/>
      {/* Product Feed */}
      <ProductsFeed products={products}/>
     </main>
   </div>
  )
}

export async function getServerSideProps(context){

  const products = await fetch('https://fakestoreapi.com/products').then(
    (res)=>res.json()
  ).catch((err)=>console.log(err))

  return{
    props:{
        products
    }
  }
}
