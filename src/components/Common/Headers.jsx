import React from "react";

function Headers({name, in_h1, in_p}) {
  return (
    <>
      <div
        data-aos="fade-in"
        data-aos-duration="500"
        className="max-w-[400px] mx-auto  text-center mb-20">
        <p className="text-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-900 dark:text-blue-600">
          {name}
        </p>
        <h1 className="text-3xl font-bold dark:text-amber-400">{in_h1}</h1>
        <p className="text-xs text-gray-400">{in_p}</p>
      </div>
    </>
  );
}

export default Headers;
