import React from "react";

function Icon({icon, text, color}) {
  return (
    <>
      <div className="flex items-center gap-5 my-2 hover:scale-110 duration-300">
        <div
          className={`bg-amber-400/90  text-2xl w-[50px] h-[50px] flex justify-center items-center rounded-full`}>
          {icon}
        </div>
        <div className=" text-lg text-black dark:text-white">{text}</div>
      </div>
    </>
  );
}

export default Icon;
