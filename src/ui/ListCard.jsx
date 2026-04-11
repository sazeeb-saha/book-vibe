import React from "react";
import { CiUser } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineUpdate } from "react-icons/md";

const ListCard = ({ book }) => {
  return (
    <div className="flex border border-gray-300 shadow-md rounded-2xl mb-3">
      <div className="bg-gray-100 p-6 rounded-2xl">
        <img className="h-43 rounded-2xl  " src={book.image} alt="" />
      </div>
      <div className="p-6 space-y-3">
        <h2 className="text-2xl font-bold">{book.bookName}</h2>
        <p>{book.author}</p>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-6">
            {book.tags.map((tag, ind) => (
              <div
                key={ind}
                className="badge bg-green-100 text-green-500 font-bold "
              >
                {tag}
              </div>
            ))}
          </div>

          <p className="flex items-center  gap-2">
            {" "}
            <MdOutlineUpdate />
            Year OF Publishing: {book.yearOfPublishing}
          </p>
        </div>
        <div className="flex items-center gap-6">
          <p className="flex items-center gap-2">
            <CiUser /> Publisher: {book.publisher}
          </p>
          <p className="flex items-center gap-2">
            {" "}
            <IoDocumentTextOutline /> Pages: {book.totalPages}
          </p>
        </div>
        <div className="flex items-center gap-6 border-t border-gray-200 pt-2.5 ">
          <p className="bg-blue-200 text-blue-500 p-3 rounded-full">
            Category: {book.category}
          </p>
          <p className="bg-yellow-100 text-red-300 p-3 rounded-full">
            Rating: {book.rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
