import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
  <nav className='bg-black border-b border-white/10 px-8 py-4'>
    <div className='max-w-7xl mx-auto flex items-center justify-between'>
      <Link href="/" className='text-xl font-light tracking-tight'>
        LinkTree
      </Link>
      
      <ul className='flex gap-8 items-center font-light text-sm'>
        <Link href="/"><li className='hover:text-orange-500 transition-colors'>Templates</li></Link>
        <Link href="/"><li className='hover:text-blue-500 transition-colors'>Marketplace</li></Link>
        <Link href="/"><li className='hover:text-orange-500 transition-colors'>Pricing</li></Link>
      </ul>

      <div className="flex gap-3">
        <button className='px-5 py-2 text-sm font-light hover:text-blue-400 transition-colors'>
          Log in
        </button>
        <button className='px-5 py-2 bg-orange-500 text-white text-sm font-light rounded-full hover:bg-orange-600 transition-colors'>
          Sign up free
        </button>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
