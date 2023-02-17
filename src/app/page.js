"use client";

import Image from 'next/image'
import Link from 'next/link';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { CiTrophy } from "react-icons/ci";
import { SlPeople } from "react-icons/sl";
import { GiHeartBeats, GiMedicinePills, GiMedicines } from "react-icons/gi";
import { IoBedSharp } from "react-icons/io5";
import { IoIosArrowDropright } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
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
      <div className="w-screen min-h-[60vh] bg-[url(/images/img2.jpg)] bg-cover bg-center relative">
        <div className='xl:w-[70%] text-center xl:text-start min-h-[60vh] bg-[#091a32ed] xl:bg-[#00245b] xl:absolute xl:top-24 xl:right-0 text-white p-10'>
          <p className={saira.className + " uppercase lg:text-xl"}>about medical</p>
          <h2 className={saira.className + " md:text-5xl text-xl pb-5 font-semibold"}>Powered By Over 1,503 Patients Trust Us With Their Sweet Love.</h2>
          <div className='flex items-center justify-center lg:flex-row flex-col'>
            <div>
              <div className="flex w-full justify-center lg:w-[300px] h-[150px] items-center border-[#00aaff] border-b lg:border-r p-5 space-x-4">
                <div className='text-8xl'><CiTrophy /></div>
                <div>
                  <p className={saira.className + ' text-5xl font-bold'}>205</p>
                  <p className={saira.className + ' text-xl'}>Award Win</p>
                </div>
              </div>
              <div className="flex w-full justify-center lg:w-[300px] h-[150px] items-center border-[#00aaff] border-b lg:border-b-0 lg:border-r p-5 space-x-4">
                <div className='text-7xl'><SlPeople /></div>
                <div>
                  <p className={saira.className + ' text-5xl font-bold'}>354</p>
                  <p className={saira.className + ' text-xl'}>Qualified Staff</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex w-full justify-center lg:w-[300px] h-[150px] items-center border-[#00aaff] border-b lg:border-r p-5 space-x-4">
                <div className='text-7xl'><GiHeartBeats /></div>
                <div>
                  <p className={saira.className + ' text-5xl font-bold'}>124</p>
                  <p className={saira.className + ' text-xl'}>Mechanics</p>
                </div>
              </div>
              <div className="flex w-full justify-center lg:w-[300px] h-[150px] items-center border-[#00aaff] border-b lg:border-b-0 lg:border-r p-5 space-x-4">
                <div className='text-7xl'><IoBedSharp /></div>
                <div>
                  <p className={saira.className + ' text-5xl font-bold'}>1500</p>
                  <p className={saira.className + ' text-xl'}>Beds</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex w-full justify-center lg:w-[300px] h-[150px] items-center border-[#00aaff] border-b p-5 space-x-4">
                <div className='text-7xl'><AiOutlineLike /></div>
                <div>
                  <p className={saira.className + ' text-5xl font-bold'}>8580</p>
                  <p className={saira.className + ' text-xl'}>Happy Patients</p>
                </div>
              </div>
              <div className="flex w-[300px] h-[150px] items-center p-5 space-x-4">
                <div className='text-8xl'><GiMedicinePills /></div>
                <div>
                  <p className={saira.className + ' text-5xl font-bold'}>357</p>
                  <p className={saira.className + ' text-xl'}>Suppliers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen min-h-[60vh] bg2 lg:pt-32 pt-10 px-10">
        <p className={saira.className + " text-xl uppercase"}>MEET OUR EXPERIENCED TEAM</p>
        <h1 className={saira.className + " text-4xl font-semibold uppercase"}>Our Dedicated Doctors Team</h1>
        <p>We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievement of our staff, We are all work together to help our all patients for recovery</p>
        <div className='w-full flex items-center justify-center py-10 flex-wrap'>
          <Link href={"/"}>
            <button className='w-[200px] group shadow-xl m-5 border rounded-xl relative overflow-hidden'>
              <Image src={"/images/doctor_01.jpg"} width={"250"} height={"200"}/>
            <div className="p-5">
                <p className="text-sm text-center text-gray-500">Senior Dr. at Delmont</p>
                <p className='text-xl text-center font-bold'>Dr. John Doe</p>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#000f5c94] scale-0 transition-all rounded-full group-hover:rounded-none group-hover:scale-100 flex items-center justify-center">
                <IoIosArrowDropright className="text-6xl text-white" />
            </div>
            </button>
          </Link>
          <Link href={"/"}>
            <button className='w-[200px] group shadow-xl m-5 border rounded-xl relative overflow-hidden'>
              <Image src={"/images/doctor_02.jpg"} width={"250"} height={"200"}/>
            <div className="p-5">
                <p className="text-sm text-center text-gray-500">Senior Dr. at Delmont</p>
                <p className='text-xl text-center font-bold'>Dr. John Doe</p>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#000f5c94] scale-0 transition-all rounded-full group-hover:rounded-none group-hover:scale-100 flex items-center justify-center">
                <IoIosArrowDropright className="text-6xl text-white" />
            </div>
            </button>
          </Link>
          <Link href={"/"}>
            <button className='w-[200px] group shadow-xl m-5 border rounded-xl relative overflow-hidden'>
              <Image src={"/images/doctor_03.jpg"} width={"250"} height={"200"}/>
            <div className="p-5">
                <p className="text-sm text-center text-gray-500">Senior Dr. at Delmont</p>
                <p className='text-xl text-center font-bold'>Dr. John Doe</p>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#000f5c94] scale-0 transition-all rounded-full group-hover:rounded-none group-hover:scale-100 flex items-center justify-center">
                <IoIosArrowDropright className="text-6xl text-white" />
            </div>
            </button>
          </Link>
          <Link href={"/"}>
            <button className='w-[200px] group shadow-xl m-5 border rounded-xl relative overflow-hidden'>
              <Image src={"/images/doctor_01.jpg"} width={"250"} height={"200"}/>
            <div className="p-5">
                <p className="text-sm text-center text-gray-500">Senior Dr. at Delmont</p>
                <p className='text-xl text-center font-bold'>Dr. John Doe</p>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#000f5c94] scale-0 transition-all rounded-full group-hover:rounded-none group-hover:scale-100 flex items-center justify-center">
                <IoIosArrowDropright className="text-6xl text-white" />
            </div>
            </button>
          </Link>
          <Link href={"/"}>
            <button className='w-[200px] group shadow-xl m-5 border rounded-xl relative overflow-hidden'>
              <Image src={"/images/doctor_01.jpg"} width={"250"} height={"200"}/>
            <div className="p-5">
                <p className="text-sm text-center text-gray-500">Senior Dr. at Delmont</p>
                <p className='text-xl text-center font-bold'>Dr. John Doe</p>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#000f5c94] scale-0 transition-all rounded-full group-hover:rounded-none group-hover:scale-100 flex items-center justify-center">
                <IoIosArrowDropright className="text-6xl text-white" />
            </div>
            </button>
          </Link>

        </div>
      </div>

    </main>
  )
}
