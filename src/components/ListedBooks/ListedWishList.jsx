import React, { useContext } from "react";
import { BookContext } from "../../context/BookProvider";
import ListCard from "../../ui/ListCard";

const ListedWishList = ({ sortingType }) => {
  const { wishList } = useContext(BookContext);

  let filteredWishList = wishList;

  if (sortingType === "pages") {
    filteredWishList = [...wishList].sort(
      (a, b) => a.totalPages - b.totalPages,
    );
  } else if (sortingType === "rating") {
    filteredWishList = [...wishList].sort((a, b) => a.rating - b.rating);
  }

  if (wishList.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex justify-center items-center mt-10">
        <h2 className="font-bold text-3xl">No Wish List Data Found</h2>
      </div>
    );
  }
  return (
    <div>
      {filteredWishList.map((book, ind) => (
        <ListCard key={ind} book={book} />
      ))}
    </div>
  );
};

export default ListedWishList;
