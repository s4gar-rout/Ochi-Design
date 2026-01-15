import React from 'react'
import logo1 from '../assets/Images/logo001.svg'
import logo2 from "../assets/Images/logo002.svg";
import logo3 from "../assets/Images/logo003.png";

const Card = () => {
  return (
    <>
      <div
        className="w-full h-[60vh] flex p-15 gap-5 border-t border-zinc-600"
      >
        <div className="w-1/2 bg-[#004D43] rounded-2xl flex items-center justify-center relative">
          <img src={logo1} alt="" />
          <button className="absolute px-5 py-1 rounded-full border border-[#CDEA68] text-[#CDEA68] left-4 bottom-5">
            &copy;2019-2025
          </button>
        </div>
        <div className="w-1/2 flex gap-5 relative">
          <div className="w-1/2 bg-[#212121] rounded-2xl flex items-center justify-center">
            <img src={logo2} alt="" />
            <button className="absolute px-5 py-1 rounded-full border border-[white] uppercase text-white left-4 bottom-5">
              rating 5.0 on clutch
            </button>
          </div>
          <div className="w-1/2 bg-[#212121] rounded-2xl flex items-center justify-center relative">
            <img className="w-[30%]" src={logo3} alt="" />
            <button className="absolute px-4 py-1 rounded-full border border-[white] text-white uppercase left-4 bottom-5">
              business bootcamp alumni
            </button>
          </div>
        </div>
      </div>
    </>
  );
} 

export default Card