import Link from 'next/link'
import React from 'react'
import Nav from './Nav'
import { Button } from './ui/button'
import MobileNav from './MobileNav'


const Header = () => {
    return (
      <header className='py-8  text-white'>
        <div className='container mx-auto flex justify-between items-center'>
          <Link href="/">
            <h1 className='text-4xl font-semibold'>
              Luke <span className='text-accent'>.</span>
            </h1>
          </Link>
  
          {/* this is for pc */}
          <div className="hidden lg:flex  xl:flex items-center gap-8">
            <Nav />
            <Link href="/contact">
              <Button>Hire me</Button>
            </Link>
          </div>
  
          {/* for phone */}
          <div className='xl:hidden'>
            <MobileNav/>
          </div>
        </div>
      </header> 
    )
  }
  
  export default Header