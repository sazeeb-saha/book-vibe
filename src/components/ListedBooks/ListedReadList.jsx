import React, { useContext } from "react";
import { BookContext } from "../../context/BookProvider";

import ListCard from "../../ui/ListCard";

const ListedReadList = ({ sortingType }) => {
  const { storeBooks } = useContext(BookContext);

  let filteredReadList = storeBooks;

  if (sortingType === "pages") {
    filteredReadList = [...storeBooks].sort(
      (a, b) => a.totalPages - b.totalPages,
    );
  } else if (sortingType === "rating") {
    filteredReadList = [...storeBooks].sort((a, b) => a.rating - b.rating);
  }

  if (storeBooks.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex justify-center items-center mt-10">
        <h2 className="font-bold text-3xl">No Read List Data Found</h2>
      </div>
    );
  }

  return (
    <div>
      {filteredReadList.map((book, ind) => (
        <ListCard key={ind} book={book} />
      ))}
    </div>
  );
};

export default ListedReadList;
