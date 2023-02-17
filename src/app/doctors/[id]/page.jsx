"use client";

import React, { useEffect, useState } from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { MdLocationOn } from "react-icons/md";
import { Saira } from '@next/font/google';
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';

const saira = Saira({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const Page = ({params}) => {
    const id = params.id;
    const [doctorData, setDoctorData] = useState("");
    useEffect(()=>{
        axios.get(`http://subhranshuchoudhury-33371.portmap.io:33371/users/${id}`).then(res => setDoctorData(res.data));
    },[])

  return (
    <div className='w-screen '>
        <div className="bg-[url(/images/doc.jpg)] bg-cover bg-center w-screen h-[30vh] flex items-center justify-center text-white relative">
            <div className='absolute top-0 left-0 w-full h-full bg-[#0040ff39]'></div>
            <p className={saira.className + " md:text-6xl text-4xl z-[99] font-extrabold text-center"}>Orthopedics Specialist</p>
        </div>
        <div className="flex items-center md:flex-row flex-col justify-center py-10 px-5">
            <Image src={"/images/doc1.jpeg"} width={400} height={400} alt="" />
            <div className='md:p-10 p-5 shadow-xl border md:w-[50%] rounded-xl'>
                <div className='flex items-center justify-between md:flex-row flex-col md:text-left text-center py-5 border-b border-[#0040ff39] md:space-y-0 space-y-3'>
                    <div>
                        <p className={saira.className + ' md:text-3xl text-3xl font-bold'}>{doctorData?.name}</p>
                        <p className={saira.className + " md:text-base text-sm text-gray-400"}>Senior Dr. at Delmont</p>
                    </div>
                    <div>
                        <Link href={`/consult/${doctorData?.username}`}>
                            <button className='uppercase bg-[#007dbb] text-white  px-5 py-2 rounded-md'>make an appointment</button>
                        </Link>
                    </div>
                </div>
                <div className="pt-5">

                    <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-2">
                            <HiMail className="text-[#11d341]" />
                            <span className="font-semibold text-sm">Email :</span>
                        </span>
                        <span className='md:text-base text-xs'><a href="mailto:screentechnicals@gmail.com" className='hover:'>{doctorData?.username}</a></span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-2">
                            <MdLocationOn className="text-[#11d341]" />
                            <span className="font-semibold text-sm">Address :</span>
                        </span>
                        <span className='md:text-base text-xs'>{doctorData?.address || "Los Angeles, USA, Los Angeles, USA"}</span>
                    </div>
                </div>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Page