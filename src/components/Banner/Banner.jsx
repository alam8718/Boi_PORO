import React from "react";
import library from "../../assets/website/library.jpg";
import playStore from "../../assets/website/play_store.png";
import app_store from "../../assets/website/app_store.png";
import BoardImg from "../../assets/website/board.png";

import {IoBookSharp} from "react-icons/io5";
import {CiDeliveryTruck} from "react-icons/ci";
import {MdPayment} from "react-icons/md";
import {BiSolidOffer} from "react-icons/bi";

import Icon from "../Common/Icon";
const Banner = () => {
  return (
    <>
      <div className=" mb-10 px-5  " data-aos="zoom-in" data-aos-duration="500">
        <div className=" container h-full grid grid-cols-1 sm:grid-cols-2  gap-8">
          {/* image container  */}
          <div className="flex items-center ">
            <img src={library} className="shadow-2xl" alt="library image" />
          </div>

          {/* text container  */}
          <div className="flex flex-col gap-3 py-20">
            {/* texts  */}
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl sm:text-4xl font-bold dark:text-white text-black ">
                Library at your fingertips
              </h1>
              <p className="text-sm text-gray-400  ">
                Lorem, ipsum dolor sit amet consectetur adipisicing assumenda
                fuga maiores quod non adipisci tempore sequi.
              </p>
            </div>
            {/* icons  */}
            <div>
              <div>
                <Icon
                  icon={<IoBookSharp />}
                  text="Quality Books"
                  color="green"
                />
                <Icon
                  icon={<CiDeliveryTruck />}
                  text="Fast Delivery"
                  color="orange"
                />
                <Icon
                  icon={<MdPayment />}
                  text="Easy Payment method"
                  color="amber"
                />
                <Icon
                  icon={<BiSolidOffer />}
                  text="Get Offers on Books"
                  color="purple"
                />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="relative mb-10 h-[200px] overflow-hidden flex justify-center items-center ">
          <img src={BoardImg} className=" w-full h-full object-cover" alt="" />
          <div className="absolute text-white flex flex-col justify-center items-center gap-4">
            <div className="text-2xl sm:text-4xl font-semibold">
              Read Books at your fingertips
            </div>
            <div className="flex justify-center items-center w-[150px] sm:w-[200px]">
              <img src={playStore} alt="" />
              <img src={app_store} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
