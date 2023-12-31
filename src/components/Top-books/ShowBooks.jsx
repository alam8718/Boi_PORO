import React from "react";
import {FaStar} from "react-icons/fa";

function ShowBooks({List}) {
  return (
    <>
      <div className="flex justify-evenly flex-wrap gap-10">
        {List.map((book) => (
          <div className="flex flex-col gap-4">
            <div>
              <img
                src={book.img}
                className="w-[150px] h-[250px] rounded-xl"
                alt="top book image "
              />
            </div>
            <div>
              <h1 className="font-semibold">{book.title}</h1>
              <p className="text-sm">{book.author}</p>
              <div className="flex gap-2 items-center">
                <FaStar className="text-amber-400" />
                {book.rating}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ShowBooks;
