"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ImSpinner2 } from "react-icons/im";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);


   const router = useRouter();

  const register = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const options = {
      method: 'POST',
      body: new URLSearchParams({username: email, password: password})
    };
    
    await fetch('http://subhranshuchoudhury-33371.portmap.io:33371/register', options)
      .then(response => response.json())
      .then(response => {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
router.push('/dashboard');
      })
      .catch(err => console.error(err));

      setLoading(false);
  };
  return (
    <div className="w-screen h-[70vh] rounded-md flex justify-center items-center p-5">
      <form
        onSubmit={register}
        className="w-[300px] px-5 pt-5 py-10 bg-white border shadow-xl"
      >
        <Image
          src={"/gifs/login2.gif"}
          width={200}
          height={200}
          alt=""
          priority={true}
          className="mx-auto"
        />
        <div className="space-y-5 relative">
          <label
            htmlFor="email"
            className="block absolute top-2 left-2 bg-white text-sm"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border px-3 py-1 rounded-md text-xl outline-none focus:border-[#8000ff]"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required
          />
        </div>
        <div className="space-y-5 relative">
          <label
            htmlFor="password"
            className="block absolute top-2 left-2 bg-white text-sm"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full border px-3 py-1 rounded-md text-xl outline-none focus:border-[#8000ff]"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
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
              <span>Registering </span>
              <ImSpinner2 className="text-2xl animate-spin" />
            </button>
          </div>
        ) : (
          <div className="mt-5">
            <button className="w-full text-xl bg-[#002677] hover:bg-[#000] transition-all  text-white p-2 rounded-md">
              <span>Register</span>
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Page;
