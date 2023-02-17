"use client";

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from "react-hook-form";
import { ImSpinner2 } from 'react-icons/im';

function Page() {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [isDeatails, setIsDeatails] = useState(false);
useEffect(()=>{
 if (localStorage.getItem("details") !== undefined) {
  setIsDeatails(true);
 } 
})
    const onSubmit = async (data) => {
        setLoading(true);
    
        const options = {
          method: 'POST',
          body: new URLSearchParams({username: localStorage.getItem("email"), name: data.name, age: data.age, gender: data.gender, medical_history: data.medical_history, phone: data.phone})
        };
        
        await fetch('http://subhranshuchoudhury-33371.portmap.io:33371/register-details', options)
          .then(response => response.json())
          .then(response => {
            localStorage.setItem("details", JSON.stringify(data));
            localStorage.setItem("medical_his", data.medical_history);
          })
          .catch(err => console.error(err));
    
          setLoading(false);
    };
    const updateMh = async () => {
  
      const options = {
        method: 'POST',
        body: new URLSearchParams({medical_history: mh, username: localStorage.getItem("email")})
      };
      
      await fetch('http://subhranshuchoudhury-33371.portmap.io:33371/register-details', options)
        .then(response => response.json())
        .then(response => {
          localStorage.setItem("medical_his", mh);
        })
        .catch(err => console.error(err));
        setMh("");
  };

    const [mh, setMh] = useState("");




  return (
<div className="w-screen h-[70vh] rounded-md flex justify-center p-5">
    {
      isDeatails ? (
        <div>
          <div className="border shadow-xl w-[500px] p-10 rounded-xl">
            <h1 className="text-4xl font-bold">User Details</h1>
            <p>
              <span className='font-bold'>Name: </span>
              <span className='capitalize'>{JSON?.parse(localStorage.getItem("details")) !== undefined && JSON?.parse(localStorage.getItem("details"))?.name}</span>
            </p>
            <p>
              <span className='font-bold'>Phone: </span>
              <span className='capitalize'>{JSON?.parse(localStorage.getItem("details")) !== undefined && JSON?.parse(localStorage.getItem("details"))?.phone}</span>
            </p>
            <p>
              <span className='font-bold'>Age: </span>
              <span className='capitalize'>{JSON?.parse(localStorage.getItem("details")) !== undefined && JSON?.parse(localStorage.getItem("details"))?.age}</span>
            </p>
            <p>
              <span className='font-bold'>Sex: </span>
              <span className='capitalize'>{JSON?.parse(localStorage.getItem("details")) !== undefined && JSON?.parse(localStorage.getItem("details"))?.gender}</span>
            </p>
            <div className="space-y-5 relative">
          <label
            htmlFor="medical_history"
            className="block absolute top-2 left-2 bg-white text-sm"
          >
            Medical History
          </label>
          <textarea
            type="text"
            name="medical_history"
            id="medical_history"
            className="w-full border px-3 py-1 rounded-md text-xl outline-none focus:border-[#8000ff]"
            placeholder={localStorage.getItem("medical_his") !== undefined && localStorage.getItem("medical_his")}
            onChange={(e)=>{setMh(e.target.value)}}
            required
          />
        </div>
        {
          mh.length > 0 &&
          <div className="mt-5">
          <button className="w-full text-xl bg-[#002677] hover:bg-[#000] transition-all  text-white p-2 rounded-md" onClick={updateMh}>
            <span>Update</span>
          </button>
         </div>
        }
        </div>
        </div>
      ) :(
        <form onSubmit={handleSubmit(onSubmit)}
        className="w-[400px] px-5 pt-5 py-10 bg-white border shadow-xl"
      >
        <h1 className='text-3xl font-bold text-center'>Medical Status</h1>
        <div className="space-y-5 relative">
          <label
            htmlFor="name"
            className="block absolute top-2 left-2 bg-white text-sm"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full border px-3 py-1 rounded-md text-xl outline-none focus:border-[#8000ff]"
            {...register("name")}
            required
          />
        </div>
        <div className="space-y-5 relative">
          <label
            htmlFor="phone"
            className="block absolute top-2 left-2 bg-white text-sm"
          >
            Phone
          </label>
          <input
            type="phone"
            name="phone"
            id="phone"
            className="w-full border px-3 py-1 rounded-md text-xl outline-none focus:border-[#8000ff]"
            {...register("phone")}
            required
          />
        </div>
        <div className="space-y-5 relative">
          <label
            htmlFor="medical_history"
            className="block absolute top-2 left-2 bg-white text-sm"
          >
            Medical History
          </label>
          <textarea
            type="text"
            name="medical_history"
            id="medical_history"
            className="w-full border px-3 py-1 rounded-md text-xl outline-none focus:border-[#8000ff]"
            {...register("medical_history")}
            required
          />
        </div>
        <div className="space-y-5 relative">
          <label
            htmlFor="age"
            className="block absolute top-2 left-2 bg-white text-sm"
          >
            Age
          </label>
          <input
            type="text"
            name="age"
            id="age"
            className="w-full border px-3 py-1 rounded-md text-xl outline-none focus:border-[#8000ff]"
            {...register("age")}
            required
          />
        </div>
        <div className="space-y-5 relative">
          <label
            htmlFor="gender"
            className="block absolute top-2 left-2 bg-white text-sm"
          >
            Gender
          </label>
          <input
            type="text"
            name="gender"
            id="gender"
            className="w-full border px-3 py-1 rounded-md text-xl outline-none focus:border-[#8000ff]"
            {...register("gender")}
            required
          />
        </div>
        {loading ? (
          <div className="mt-5">
            <button
              type="button"
              disabled
              className="w-full text-xl bg-[#002677] hover:bg-[#000] transition-all space-x-4 text-white p-2 rounded-md flex items-center justify-center"
            >
              <span>Submiting </span>
              <ImSpinner2 className="text-2xl animate-spin" />
            </button>
          </div>
        ) : (
          <div className="mt-5">
            <button className="w-full text-xl bg-[#002677] hover:bg-[#000] transition-all  text-white p-2 rounded-md">
              <span>Submit</span>
            </button>
          </div>
        )}
      </form>
      )
    }
</div>
  )
}

export default Page