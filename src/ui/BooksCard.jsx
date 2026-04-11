import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BooksCard = ({ book }) => {
  return (
    <Link to={`/bookDetails/${book.bookId}`}>
      <div className="card bg-base-100 p-6 shadow-md border border-gray-300">
        <figure className="p-6 bg-[#f8f8f8] rounded mb-4">
          <img
            className="h-55 rounded shadow-xl "
            src={book.image}
            alt={book.bookName}
          />
        </figure>
        <div className="card-body mb-4">
          <div className="flex items-center gap-6">
            {book.tags.map((tag, ind) => (
              <div
                key={ind}
                className="badge bg-green-100 text-green-500 font-bold mb-4"
              >
                {tag}
              </div>
            ))}
          </div>
          <h2 className="card-title text-xl font-bold mb-4">{book.bookName}</h2>
          <p className=" font-medium mb-4">{book.author}</p>
          <div className="card-actions text-xl font-medium justify-between pt-6 border-t border-dashed border-gray-300">
            <div>{book.category}</div>
            <div className="flex gap-2 items-center">
              {book.rating} <FaRegStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BooksCard;
