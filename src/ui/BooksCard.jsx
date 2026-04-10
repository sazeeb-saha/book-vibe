import React from "react";

const BooksCard = ({ book }) => {
  return (
    <div>
      {book.bookName}
      {book.bookId}
    </div>
  );
};

export default BooksCard;
