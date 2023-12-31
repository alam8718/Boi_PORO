import React from "react";
import {CiLocationArrow1} from "react-icons/ci";
import {IoArrowRedoSharp} from "react-icons/io5";
function Fotter() {
  const links = [
    {
      name: "Home",
      url: "#",
    },
    {
      name: "About",
      url: "#",
    },
    {
      name: "Contact",
      url: "#",
    },
    {
      name: "Blog",
      url: "#",
    },
  ];
  return (
    <div className="mt-10 container mx-auto px-10">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-1 items-center justify-center">
        <div className="w-full  md:w-[50%] flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl dark:text-amber-400">BOI PORO</h1>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            cumque fuga distinctio quas!
          </p>
          <address className="flex gap-3 items-center dark:text-white">
            <CiLocationArrow1 size={30} />
            <span className="text-sm">
              Apt. 840 99562 Medhurst Greens, Kovacekstad, FL 94195
            </span>
          </address>
          {/* social media  */}
          <div></div>
        </div>

        {/*  */}

        <div className="w-full flex sm:justify-center md:w-[50%]">
          <div>
            <h1 className="text-2xl dark:text-white">Important Links</h1>
            <ul>
              {links.map((link, index) => (
                <a
                  href={link.url}
                  key={index}
                  className=" relative flex items-center dark:text-gray-500 hover:scale-95 duration-300  ">
                  <IoArrowRedoSharp />
                  {link.name}
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fotter;
