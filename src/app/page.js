"use client";

import Image from 'next/image'
import Link from 'next/link';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Saira } from '@next/font/google';



const saira = Saira({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
export default function Home() {
  return (
    <main className="w-screen">
      <div className="w-screen h-[30vh] md:h-[70vh] bg1 flex items-center justify-center text-center flex-col space-y-3">
          <p className='text-white lg:text-xl text-xs md:tracking-[30px] tracking-[10px] text-center'>
            <span>T</span>
            <span>R</span>
            <span>U</span>
            <span>S</span>
            <span>T</span>
          </p>
          <h1 className="lg:text-9xl md:text-8xl text-4xl font-light text-white ">We <span className='font-extrabold'>Care</span> We <span className='font-extrabold'>Cure</span></h1>
      </div>
      <div className="w-screen flex md:flex-row flex-col justify-center md:text-start text-center px-5 md:justify-around md:py-10 md:px-[100px] bg-[#fbfdff] py-10">
        <div className='md:w-[50%] space-y-4'>
          <p className={saira.className+" text-xl uppercase text-gray-400"}>our medical</p>
          <h1 className={saira.className+" md:text-5xl text-2xl font-semibold"}>We`re Setting the Standards in Research & Clinical Care</h1>
          <p className="text-gray-500 md:text-base text-sm">We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help. Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the USA with over 35 years of quality training and experience.</p>
          <div>
            <p className="text-2xl font-semibold">Delmont Special Features</p>
           <div className='flex items-center pt-4 md:flex-nowrap flex-wrap md:justify-start justify-center'>
           <div className='flex flex-wrap w-[300px]'>
              <div className='flex items-center space-x-2 mr-7 my-2 '>
                <BsFillArrowRightCircleFill className='text-[#1cb3ff]' />
                <span className='font-semibold'>Adult Trauma Center</span>
              </div>
              <div className='flex items-center space-x-2 mr-7 my-2'>
                <BsFillArrowRightCircleFill className='text-[#1cb3ff]' />
                <span className='font-semibold'>Birthing and Lactation Classes</span>
              </div>
              <div className='flex items-center space-x-2 mr-7 my-2'>
                <BsFillArrowRightCircleFill className='text-[#1cb3ff]' />
                <span className='font-semibold'>Dental and Oral Surgery</span>
              </div>
            </div>
            <div className='flex flex-wrap w-[300px]'>
              <div className='flex items-center space-x-2 mr-7 my-2 '>
                <BsFillArrowRightCircleFill className='text-[#1cb3ff]' />
                <span className='font-semibold'>Heart and Vascular Institute</span>
              </div>
              <div className='flex items-center space-x-2 mr-7 my-2'>
                <BsFillArrowRightCircleFill className='text-[#1cb3ff]' />
                <span className='font-semibold'>Plastic Surgery</span>
              </div>
              <div className='flex items-center space-x-2 mr-7 my-2'>
                <BsFillArrowRightCircleFill className='text-[#1cb3ff]' />
                <span className='font-semibold'>Plastic Surgery</span>
              </div>
            </div>
           </div>
          </div>
          <div className='pb-5'>
              <Link href={"/"}>
                <button className={saira.className+" text-xl uppercase bg-[#1cb3ff] text-white px-5 py-2 w-full rounded-md hover:bg-[#00245b] transition-all"}>Contact Us</button>
              </Link>
            </div>
        </div>
        <div className='md:w-[50%] flex items-center justify-center'>
            <Image src="/images/img1.jpeg" width={500} height={800} className="shadow-xl border rounded-xl" /> 
        </div>
      </div>

    </main>
  )
}
