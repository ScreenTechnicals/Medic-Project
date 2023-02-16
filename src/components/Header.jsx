import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { TiSocialTwitter, TiSocialFacebook, TiSocialLinkedin, TiSocialPinterest } from "react-icons/ti";
import Link from 'next/link';

const Header = () => {
  return (
    <div className='w-screen bg-[#00245b] hidden justify-around items-center text-white md:flex'>
        <div className='flex md:text-sm text-[10px] items-center space-x-5'>
            <div className='flex items-center space-x-1'>
                <MdLocationOn className='text-[#00fbff]'/>
                <span>Triumph, Los Angeles, California, US</span>
            </div>
            <div className='flex items-center space-x-1'>
                <BiTimeFive className='text-[#00fbff]'/>
               <span> Mon - Sat 8.00 - 18.00. Sunday CLOSED</span>
            </div>
        </div>
        <div className='flex items-center space-x-5'>
            <div className='flex items-center'>
                <Link href={"/"}>
                    <button className='text-2xl relative top-[1px] p-1'><TiSocialFacebook /></button>
                </Link>
                <Link href={"/"}>
                    <button className='text-2xl relative top-[1px] p-1'><TiSocialTwitter /></button>
                </Link>
                <Link href={"/"}>
                    <button className='text-2xl relative top-[1px] p-1'><TiSocialPinterest /></button>
                </Link>
                <Link href={"/"}>
                    <button className='text-2xl relative top-[1px] p-1'><TiSocialLinkedin /></button>
                </Link>
            </div>
            <div>
                <Link href={"/"}>
                    <button className='px-5 uppercase text-sm py-5 bg-[#004aba] text-[#fff] tracking-widest font-semibold hover:bg-[#1f2f65] transition-all'>get a appointment</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header