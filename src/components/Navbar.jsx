import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="w-screen pt-5 flex flex-col items-center justify-center bg-white z-[999] sticky top-0 left-0">
        <div>
            <Link href={"/"}>
                <button>
                    <Image src={"/images/logo.png"} width={"170"} height={"170"} alt='logo not loading' />
                </button>
            </Link>
        </div>
        <div className='w-screen flex items-center justify-evenly bg-[#f1faff]'>
            <Link href={"/"}>
                <button className='md:text-base text-xs hover:bg-[#005ae0] py-4 md:px-5 px-1 hover:text-white transition-all  uppercase font-light'>Home</button>
            </Link>
            <Link href={"/"}>
                <button className='md:text-base text-xs hover:bg-[#005ae0] py-4 md:px-5 px-1 hover:text-white transition-all  uppercase font-light'>Doctors</button>
            </Link>
            <Link href={"/"}>
                <button className='md:text-base text-xs bg-[#bfd9ff] py-4 md:px-5 px-1 hover:text-[#005ae0] transition-all  uppercase font-light'>Dashboard</button>
            </Link>
            <Link href={"/"}>
                <button className='md:text-base text-xs hover:bg-[#005ae0] py-4 md:px-5 px-1 hover:text-white transition-all  uppercase font-light'>Blogs</button>
            </Link>
            <Link href={"/"}>
                <button className='md:text-base text-xs hover:bg-[#005ae0] py-4 md:px-5 px-1 hover:text-white transition-all  uppercase font-light'>Help</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar