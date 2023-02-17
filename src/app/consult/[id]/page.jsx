"use client";

import axios, { all } from "axios";
import React, { useEffect, useState } from "react";
import { FcVideoCall } from "react-icons/fc";
import { IoSend } from "react-icons/io5";
import { v4 } from "uuid";
const Page = ({ params }) => {
  const id = params.id?.replace("%40", "@");
  console.log(id);
  const [doctorData, setDoctorData] = useState("");
  const [allmessages, setAllmessages] = useState("");

  useEffect(() => {
    axios
      .get(`http://subhranshuchoudhury-33371.portmap.io:33371/users/${id}`)
      .then((res) => {
        setDoctorData(res.data);
      });

      
        
      refreshMsg()

    
  }, []);

  const refreshMsg = () =>{
    setInterval(() => {
        console.log("Refreshing..");
        axios
      .get(
        `http://subhranshuchoudhury-33371.portmap.io:33371/chat/${id}/${localStorage
          .getItem("email")
          .replace("%40", "@")}`
      )
      .then((res) => setAllmessages(res.data));
    }, 5000);
  }

  const [msg, setMsg] = useState("");
  const sendMsg = async () => {
    const options = {
      method: "POST",
      body: new URLSearchParams({
        message: msg,
        doctor_email: doctorData?.username,
        patient_email: localStorage.getItem("email"),
        isdoctor: false,
        timestamp: new Date(),
      }),
    };

    await fetch(
      "http://subhranshuchoudhury-33371.portmap.io:33371/user-chat",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        setMsg("");
      })
      .catch((err) => console.error(err));
  };

//   console.log(allmessages);
// const url = `https://scaledrone.github.io/webrtc/index.html#${id+localStorage.getItem("email")}`;
const videoCallLink = async() => {

    window.open(`https://scaledrone.github.io/webrtc/index.html#${id+localStorage.getItem("email")}`,'_blank', 'toolbar=0,location=0,menubar=0,scrollbars=1,statusbar=1,menubar=0,resizable=1,width=800,height=500,left=100,top=50');
    const options = {
        method: "POST",
        body: new URLSearchParams({
          message: `https://scaledrone.github.io/webrtc/index.html#${id+localStorage.getItem("email")}`,
          doctor_email: doctorData?.username,
          patient_email: localStorage.getItem("email"),
          isdoctor: false,
          timestamp: new Date(),
        }),
      };
  
      await fetch(
        "http://subhranshuchoudhury-33371.portmap.io:33371/user-chat",
        options
      )
        .then((res) => res.json())
        .then((res) => {
          setMsg("");
        })
        .catch((err) => console.error(err));

}

  return (
    <div className="w-screen p-10">
      <div className="w-full py-5 px-20 flex justify-between items-center bg-[#fff] border shadow-xl rounded-xl">
        <p className="text-2xl font-bold">{doctorData?.name}</p>
        <button className="text-5xl" onClick={videoCallLink}>
          <FcVideoCall />
        </button>
      </div>
      <div className="w-full py-5 px-20 bg-[#fff] border shadow-xl space-y-4 rounded-xl h-[45vh] overflow-y-auto">
        {allmessages &&
          allmessages?.map((chat) => {
            if (chat?.isdoctor) {
              return (
                <div className="flex w-full" key={v4()}>
                  <div className="bg-[#0051ad] p-3 text-white rounded-b-xl rounded-r-xl">
                    {chat.message}
                  </div>
                </div>
              );
            } else {
              return (
                <div className="flex w-full justify-end" key={v4()}>
                  <div className="bg-[#0051ad] p-3 text-white rounded-b-xl rounded-r-xl">
                    {chat.message}
                  </div>
                </div>
              );
            }
          })}
      </div>
      <div className="w-full px-5 py-3 flex justify-end items-center bg-[#fff] border shadow-xl rounded-xl relative ">
        <input
          type="text"
          name="msg"
          id="msg"
          placeholder="Type Here"
          className="w-full px-4 py-2 border outline-none rounded-full"
          onChange={(e) => {
            setMsg(e.target.value);
          }}
          value={msg}
          required
        />
        <button className="absolute right-10 text-2xl" onClick={sendMsg}>
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default Page;
