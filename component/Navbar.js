import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
  <nav className='sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl'>
    <div className='mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4'>
      <Link href="/" className='text-2xl font-semibold tracking-tight text-white'>
        LinkTree
      </Link>

      <ul className='hidden items-center gap-8 text-sm font-light text-white/80 md:flex'>
        <li><Link href="/" className='transition-colors hover:text-orange-400'>Templates</Link></li>
        <li><Link href="/" className='transition-colors hover:text-blue-400'>Marketplace</Link></li>
        <li><Link href="/" className='transition-colors hover:text-orange-400'>Pricing</Link></li>
      </ul>

      <div className="flex gap-3">
        <button className='rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-white/90 transition-all hover:border-blue-400 hover:text-white'>
          Log in
        </button>
        <button className='rounded-full bg-orange-400 px-5 py-2 text-sm font-medium text-black shadow-lg shadow-orange-500/30 transition-all hover:bg-orange-500'>
          Sign up free
        </button>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
