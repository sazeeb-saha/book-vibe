const getAllReadListFromLocalDB = () => {
  const allReadList = localStorage.getItem("readList");
  if (allReadList) return JSON.parse(allReadList);
  return [];
};

const addAllReadListFromLocalDB = (book) => {
  const allReadBooks = getAllReadListFromLocalDB();
  const isAlreadyExist = allReadBooks.find((bk) => bk.bookId === book.bookId);
  if (!isAlreadyExist) {
    allReadBooks.push(book);
    localStorage.setItem("readList", JSON.stringify(allReadBooks));
  }
};

const getAllWishListFromLocalDB = () => {
  const allWishList = localStorage.getItem("wishList");
  if (allWishList) return JSON.parse(allWishList);
  return [];
};

const addAllWishListFromLocalDB = (book) => {
  const allBooks = getAllWishListFromLocalDB();
  const isAlreadyExist = allBooks.find((bk) => bk.bookId === book.bookId);
  if (!isAlreadyExist) {
    allBooks.push(book);
    localStorage.setItem("wishList", JSON.stringify(allBooks));
  }
};

export {
  getAllReadListFromLocalDB,
  addAllReadListFromLocalDB,
  getAllWishListFromLocalDB,
  addAllWishListFromLocalDB,
};
