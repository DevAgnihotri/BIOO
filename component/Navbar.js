import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
  <nav className='bg-white text-black flex fixed justify-between top-12 gap-10 right-[5vw] p-6 w-[90vw] rounded-full z-50'>
         <Image className=' logo items-center'
         src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
         alt="Linktree Logo"
         width={120}
         height={120}
         style={{ height: 'auto' }}
         />
      <ul className='flex gap-10 items-center'>
        <li>Templates</li>
        <li>Marketplace</li>
        <li>Pricing</li>
      </ul>
        <div className="flex">
            <button className='flex bg-gray-50 hover:bg-gray-300 text-shadow-black px-4 ml-auto py-2 p-25 rounded'>Log in</button>
            <button className='flex bg-gray-900 hover:bg-black text-white px-4 py-2 p-25 rounded-full'>Sign Up free</button>
        </div>
  </nav>
  )
}

export default Navbar
