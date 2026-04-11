import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [storeBooks, setStoreBooks] = useState([]);
  const [wishList, setWishList] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    const isBookExist = storeBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isBookExist) {
      toast.error("The Book is already Exist");
    } else {
      setStoreBooks([...storeBooks, currentBook]);
      toast.success(`${currentBook.bookName} is added`);
    }
  };
  const handleWishList = (currentBook) => {
    const isExistInReadList = storeBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistInReadList) {
      toast.error(`${currentBook.bookName} Is already added in Read List`);
      return;
    }

    const isBookExist = wishList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isBookExist) {
      toast.error("The Book is already Exist");
    } else {
      setWishList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} is added`);
    }
  };

  const data = {
    setStoreBooks,
    storeBooks,
    handleMarkAsRead,
    wishList,
    setWishList,
    handleWishList,
  };

  return (
    <div>
      <BookContext.Provider value={data}>{children}</BookContext.Provider>
    </div>
  );
};

export default BookProvider;
