import React from "react";
import Headers from "../Common/Headers";
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  return (
    <>
      <div  className="my-10 px-5">
        <div className="container mx-auto">
          {/* header part  */}
          <div>
            <Headers
              name={"What our customers says"}
              in_h1={"Testimonials"}
              in_p={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa iure, corporis"
              }
            />
          </div>
          {/* carousal part ] */}
          <div className="py-10">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
