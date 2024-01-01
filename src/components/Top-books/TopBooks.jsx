import React, {useState} from "react";
import {FaStar} from "react-icons/fa";
import book1 from "../../assets/books/book2.jpg";
import book2 from "../../assets/books/book1.jpg";
import book3 from "../../assets/books/book3.jpg";
import ShowBooks from "./ShowBooks";
import Headers from "../Common/Headers";

function TopBooks() {
  const [showAll, setShowAll] = useState(false);

  const HalfBooksList = [
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
  ];
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
    {
      id: 7,
      img: book3,
      title: "Lost boys",
      rating: 4.7,
      author: "Lost Girl",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, fugiat?",
    },
    {
      id: 8,
      img: book2,
      title: "His Life",
      rating: 4.4,
      author: "Someone",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, fugiat?",
    },
    {
      id: 9,
      img: book1,
      title: "Who's There",
      rating: 4.5,
      author: "Someone",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, fugiat?",
    },
    {
      id: 10,
      img: book3,
      title: "Lost boys",
      rating: 4.7,
      author: "Lost Girl",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, fugiat?",
    },
    {
      id: 11,
      img: book2,
      title: "His Life",
      rating: 4.4,
      author: "Someone",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, fugiat?",
    },
    {
      id: 12,
      img: book1,
      title: "Who's There",
      rating: 4.5,
      author: "Someone",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, fugiat?",
    },
    {
      id: 13,
      img: book3,
      title: "Lost boys",
      rating: 4.7,
      author: "Lost Girl",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, fugiat?",
    },
    {
      id: 14,
      img: book2,
      title: "His Life",
      rating: 4.4,
      author: "Someone",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, fugiat?",
    },
    {
      id: 15,
      img: book1,
      title: "Who's There",
      rating: 4.5,
      author: "Someone",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, fugiat?",
    },
  ];
  return (
    <>
      <div className="container mx-auto py-14 px-5">
        {/* header part  */}
        <Headers
          
          name={"Best Books"}
          in_h1={"Top Books"}
          in_p={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa iure, corporis"
          }
        />
        {/* books  */}
        <div>
          {showAll ? (
            <ShowBooks List={BookList} />
          ) : (
            <ShowBooks List={HalfBooksList} />
          )}
        </div>

        {/* button  */}
        <div className="w-full py-10 flex justify-center items-center ">
          <button
            onClick={() => setShowAll(!showAll)}
            className=" px-5 py-2 bg-primary text-white rounded-full">
            View All Books
          </button>
        </div>
      </div>
    </>
  );
}

export default TopBooks;
