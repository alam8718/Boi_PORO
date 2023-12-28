import React from "react";
import logo from "../../assets/website/logo.png";
import {FaCaretDown} from "react-icons/fa";
import {MdOutlineShoppingCart} from "react-icons/md";
import DarkMode from "../../DarkMode";

function Navbar() {
  const menus = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Seller",
      link: "/#services",
    },
  ];
  const Dropdowns = [
    {
      name: "Trending Books",
      link: "/",
    },
    {
      name: "Best Selling",
      link: "/",
    },
    {
      name: "Authors",
      link: "/",
    },
  ];

  return (
    <div className="shadow-lg bg-white text-black dark:bg-[#212121] dark:text-white duration-300 py-3 sm:py-0">
      <div className="container">
        <div className="flex  justify-between ">
          {/* logo and title  */}
          <div className="flex justify-center items-center font-bold text-2xl sm:text-3xl gap-2 ">
            <a href="#">
              <img src={logo} width={40} alt="website logo" />
            </a>
            Books
          </div>
          {/* others  */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <DarkMode />
            </div>
            <ul className="sm:flex hidden justify-center items-center gap-4">
              {menus.map((menu) => {
                return (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="p-4 hover:text-primary font-semibold">
                      {menu.name}
                    </a>
                  </li>
                );
              })}
              {/* dropdown selection  */}
              <li className="group relative cursor-pointer">
                <a
                  href="#"
                  className="flex items-center h-[72px] gap-[2px] font-semibold">
                  Quick Links
                  <span className="transition duration-300 group-hover:rotate-180">
                    <FaCaretDown size={20} />
                  </span>
                </a>
                {/* dropdown links options  */}
                <div className="absolute   rounded-md hidden group-hover:block -left-9 z-[10] bg-white/20 text-black shadow-xl  ">
                  <ul>
                    {Dropdowns.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="hover:bg-purple-400/40 rounded-lg p-2 w-full m-1 font-semibold">
                          <a href={item.link}>{item.name}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            </ul>
            <div className="">
              <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-sky-400 to-sky-600 px-4 py-1 rounded-3xl hover:scale-110 transition-all duration-300 ">
                <p className="font-semibold text-white ">Order</p>
                <MdOutlineShoppingCart size={27} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
