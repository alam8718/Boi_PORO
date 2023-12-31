import React from "react";
import library from "../../assets/website/library.jpg";
import {IoBookSharp} from "react-icons/io5";
import {CiDeliveryTruck} from "react-icons/ci";
import {MdPayment} from "react-icons/md";
import {BiSolidOffer} from "react-icons/bi";

import Icon from "../Common/Icon";
const Banner = () => {
  return (
    <>
      <div className="my-10 container h-[600px] ">
        <div className="h-full grid grid-cols-1 sm:grid-cols-2  gap-8">
          {/* image container  */}
          <div className="flex items-center ">
            <img src={library} className="shadow-2xl" alt="library image" />
          </div>

          {/* text container  */}
          <div className="flex flex-col gap-3 py-24">
            {/* texts  */}
            <div>
              <h1 className="text-4xl font-bold ">
                Library at your fingertips
              </h1>
              <p className="text-sm text-gray-400 ">
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
      </div>
    </>
  );
};

export default Banner;
