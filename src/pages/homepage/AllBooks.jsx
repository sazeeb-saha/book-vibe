import React, { use } from "react";
import BooksCard from "../../ui/BooksCard";

const bookPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(bookPromise);
  console.log(books);
  return (
    <div className="container mx-auto">
      <h2>Books</h2>
      {books.map((book) => (
        <BooksCard key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default AllBooks;
