import React from "react";
import {FaStar} from "react-icons/fa";
import book1 from "../../assets/books/book2.jpg";
import book2 from "../../assets/books/book1.jpg";
import book3 from "../../assets/books/book3.jpg";

const BookList = [
  {
    id: 1,
    img: book1,
    title: "Who's there",
    rating: 5.0,
    author: "Someone",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, fugiat?",
  },
  {
    id: 2,
    img: book2,
    title: "His Life",
    rating: 4.5,
    author: "John",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, fugiat?",
  },
  {
    id: 3,
    img: book3,
    title: "Lost boys",
    rating: 4.7,
    author: "Lost Girl",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, fugiat?",
  },
  {
    id: 4,
    img: book2,
    title: "His Life",
    rating: 4.4,
    author: "Someone",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, fugiat?",
  },
  {
    id: 5,
    img: book1,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, fugiat?",
  },
  {
    id: 6,
    img: book3,
    title: "Lost boys",
    rating: 4.7,
    author: "Lost Girl",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, fugiat?",
  },
];

const BestBooks = () => {
  return (
    <>
      <div className="dark:bg-black">
        <div className="container py-20 ">
          {/* header selection  */}
          <div className="max-w-[400px] mx-auto text-center mb-20">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-900 dark:text-white">
              Trending Books
            </p>
            <h1 className="text-3xl font-bold ">Best Books</h1>
            <p className="text-xs text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              neque repellat in ad, suscipit nostrum. Optio error libero cumque
              pariatur debitis voluptatem fugit!
            </p>
          </div>
          {/* card selection  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
            {/* card  */}
            {BookList.map((book) => (
              <div
                key={book.id}
                className="rounded-xl max-w-[300px] group  hover:text-white bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary shadow-xl relative duration-500  ">
                <div className="p-4">
                  <img
                    src={book.img}
                    className="h-[250px] group-hover:scale-110 duration-500  mx-auto "
                    alt="book image"
                  />
                </div>
                <div className="text-center p-4 ">
                  <div className=" w-full flex items-center justify-center ">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                  <h1 className="font-bold text-xl py-2 text-black dark:text-white">
                    {book.title}
                  </h1>
                  <h1 className="text-sm text-gray-400 font-semibold line-clamp-2 group-hover:text-white  ">
                    {book.desc}
                  </h1>
                  <button className="my-4 px-4 py-1 rounded-full bg-blue-400">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestBooks;
