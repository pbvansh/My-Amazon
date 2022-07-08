import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'

export default function Home() {
  return (
   <div>
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
     </main>
   </div>
  )
}
