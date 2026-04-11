import React, { useContext } from "react";
import { BookContext } from "../../context/BookProvider";

import ListCard from "../../ui/ListCard";

const ListedReadList = () => {
  const { storeBooks } = useContext(BookContext);
  return (
    <div>
      {storeBooks.map((book, ind) => (
        <ListCard key={ind} book={book} />
      ))}
    </div>
  );
};

export default ListedReadList;
