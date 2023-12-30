import React, {useState} from "react";
import book1 from "../../assets/books/book2.jpg";
import book2 from "../../assets/books/book1.jpg";
import book3 from "../../assets/books/book3.jpg";
import vector from "../../assets/website/blue-pattern.png";

const ImageList = [
  {
    id: 1,
    img: book1,
    title: "His Life will forever be Changed",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: book2,
    title: "Who's there",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: book3,
    title: "Lost Boy",
    description:
      "Lost Boy, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = () => {
  const [image, setImage] = useState(ImageList[0].img);
  const [title, setTitle] = useState(ImageList[0].title);
  const [description, setDescription] = useState(ImageList[0].description);

  const bgImage = {
    backgroundImage: `url(${vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };

  const onMouseEnter = (item) => {
    // console.log("i am clicked");
    setImage(item.img);
    setTitle(item.title);
    setDescription(item.description);
  };
  // const onMouseLeave = () => {
  //   setImage(ImageList[0].img);
  //   setTitle(ImageList[0].title);
  //   setDescription(ImageList[0].description);
  // };

  return (
    <>
      <div
        className="min-h-[500px] sm:min-h-[700px] flex justify-center items-center bg-gray-100 text-black  duration-300  dark:bg-[#212121] dark:text-white pb-10  "
        style={bgImage}>
        <div className="container ">
          <div className="grid grid-cols-1 gap-13 sm:grid-cols-2">
            {/* hero text section  */}
            <div className="flex flex-col justify-center gap-4 order-2 sm:order-1 text-center sm:text-left pt-12 sm:pt-0 ">
              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-semibold">
                {title}
                <p className="text-sm text-right bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary pr-5 font-semibold  ">
                  by Anonymous
                </p>
              </h1>
              <p className="text-sm">{description}</p>
              <div>
                <button className="px-4 py-2 bg-gradient-to-b from-primary to-secondary rounded-full text-white mt-4 hover:scale-110 duration-200  ">
                  Order Now
                </button>
              </div>
            </div>

            {/* hero image section  */}
            <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
              {/* main image  */}
              <div className=" flex justify-center items-center overflow-hidden ">
                <img
                  src={image}
                  alt=""
                  className="px-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[550px] sm:scale-125 object-contain mx-auto "
                />
              </div>
              {/* other books image  */}
              <div className="absolute bottom-0 md:-bottom-14  ">
                <div className="flex justify-around gap-2 sm:gap-5 ">
                  {ImageList.map((item) => (
                    <img
                      key={item.id}
                      onMouseEnter={() => onMouseEnter(item)}
                      // onMouseLeave={onMouseLeave}
                      src={item.img}
                      alt=""
                      className="w-[60px] sm:w-[70px] md:w-[100px] hover:scale-110 duration-300"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
