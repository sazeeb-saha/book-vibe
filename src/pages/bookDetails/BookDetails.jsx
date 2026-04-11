import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookProvider";

const BookDetails = () => {
  const { bookPramId } = useParams();
  const books = useLoaderData();

  const expectedBook = books.find((book) => book.bookId === Number(bookPramId));
  const {
    author,
    bookId,
    bookName,
    category,
    image,
    publisher,
    totalPages,
    rating,
    review,
    tags,
    yearOfPublishing,
  } = expectedBook;

  const { handleMarkAsRead, handleWishList } = useContext(BookContext);

  return (
    <div className="card lg:card-side bg-base-100 shadow-sm container mx-auto flex  mt-12 ">
      <figure className="bg-[#f3f3f3] p-20 rounded-xl basis-1/2">
        <img src={image} alt={bookName} className="h-138 w-fit rounded-xl" />
      </figure>
      <div className="card-body basis-1/2">
        <div className="space-y-3 mb-6">
          <h2 className="card-title text-[40px]">{bookName}</h2>
          <p className="text-xl">By: {author}</p>
        </div>
        <p className="border-y text-xl border-gray-300 py-2 mb-6 flex items-center ">
          {category}
        </p>
        <div className=" space-y-6 border-b border-gray-300">
          <p className="">
            <span className="font-bold">Review: </span>
            {review}
          </p>
          <div className="flex   gap-6 mb-2  ">
            <span className="font-bold">Tag: </span>
            {tags.map((tag, ind) => (
              <div
                key={ind}
                className="badge bg-green-100 text-green-500 font-bold mb-4"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="flex  gap-10 my-6">
          <div className="opacity-65 font-medium space-y-3">
            <p>Number Of Pages:</p>
            <p>Publisher:</p>
            <p>Year Of publishing:</p>
            <p>Rating:</p>
          </div>
          <div className="font-semibold space-y-3 ">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>
        <div className="flex gap-2.5">
          <button
            className="btn btn-outline border-gray-300 "
            onClick={() => handleMarkAsRead(expectedBook)}
          >
            Mark As Read
          </button>
          <button
            className="btn btn-info text-white"
            onClick={() => handleWishList(expectedBook)}
          >
            Add To Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
