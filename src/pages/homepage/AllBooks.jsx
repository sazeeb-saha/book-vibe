import React, { use } from "react";
import BooksCard from "../../ui/BooksCard";

const bookPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(bookPromise);

  return (
    <div className=" my-12 container mx-auto ">
      <h2 className="text-center text-3xl font-bold mb-5">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {" "}
        {books.map((book) => (
          <BooksCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
