import React from 'react'
import { Navbar } from "flowbite-react";
import Image from 'next/image';

const Header = () => {
  return (
    <div className='w-full  px-2 py-2  bg-white shadow-lg'>
      <Navbar
  fluid={true}
  rounded={true}
  className='text-white font-semibold'
>
  <Navbar.Brand  href="/">

    <Image
    width={50}
    height={50}
      src={'/layers.png'}
      className=" h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center ml-3 whitespace-nowrap text-lg font-semibold dark:text-white">
      ANOSHA JAVED SHEIKH
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      href="/"
      active={true}
    >
     <span className="text-lg font-semibold text-stone-800">
      Home
    </span>
      
    </Navbar.Link>
    <Navbar.Link href="/blogs">
     <span className="text-lg font-semibold text-stone-800">
     Blog
    </span>
     
    </Navbar.Link>
    <Navbar.Link href="/showSkill">
     <span className="text-lg font-semibold text-stone-800">
     Skills
    </span>
      
    </Navbar.Link>
    <Navbar.Link href="/projects">
     <span className="text-lg font-semibold text-stone-800">
     Projects
    </span>
      
    </Navbar.Link>
    <Navbar.Link href="/contact">
     <span className="text-lg font-semibold text-stone-800">
     Contact
    </span>
      
    </Navbar.Link>
    <Navbar.Link href="/loginadmin">
    
    <Image
    width={30}
    height={30}
      src={'/admin.png'}
      className=" h-6 sm:h-9"
      alt="anosha Logo"
    />
     
      
    </Navbar.Link>
    
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}

export default Header
