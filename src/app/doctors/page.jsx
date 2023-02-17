"use client";

import React, { useEffect, useState } from "react";
import { IoIosArrowDropright, IoMdClose } from "react-icons/io";
import { Saira } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { ImSpinner2 } from "react-icons/im";
import { v4 } from "uuid";

const saira = Saira({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const Page = () => {
  const [search, setSearch] = useState("");
  const [doctors, setDoctors] = useState("");

  useEffect(() => {
    axios
      .get("http://subhranshuchoudhury-33371.portmap.io:33371/doctors")
      .then((res) => {
        setDoctors(res.data);
        setLoadingDocts(false);
      });
  }, []);

  const [loadingDocts, setLoadingDocts] = useState(true);

  return (
    <div className="w-screen py-5 px-10">
      <div className="flex items-center justify-end relative">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Here"
          className="w-full border outline-none py-3 px-5 rounded-full"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          required
        />
        {search.length ? (
          <button
            className="absolute text-3xl right-3"
            onClick={() => {
              setSearch("");
            }}
          >
            <IoMdClose />
          </button>
        ) : null}
      </div>
      <div className="w-full flex items-center justify-center py-10 flex-wrap">
        {loadingDocts ? (
          <ImSpinner2 className="animate-spin text-4xl" />
        ) : (
          doctors?.map((doctor) => {
            return (
              <Link href={`/doctors/${doctor?.username}`} key={v4()}>
                <button className="w-[200px] group shadow-xl m-5 border rounded-xl relative overflow-hidden">
                  <Image
                    src={"/images/doctor_01.jpg"}
                    width={"250"}
                    height={"200"}
                    alt=" "
                  />
                  <div className="p-5">
                    <p className="text-sm text-center text-gray-500">
                      {/* {doctor?.} */}
                    </p>
                    <p className="text-xl text-center font-bold">
                      {doctor?.name}
                    </p>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#000f5c94] scale-0 transition-all rounded-full group-hover:rounded-none group-hover:scale-100 flex items-center justify-center">
                    <IoIosArrowDropright className="text-6xl text-white" />
                  </div>
                </button>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Page;
