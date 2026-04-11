import React, { useContext } from "react";
import { BookContext } from "../../context/BookProvider";

const Books = () => {
  const { storeBooks } = useContext(BookContext);
  console.log(storeBooks);

  return <div>Books</div>;
};

export default Books;
