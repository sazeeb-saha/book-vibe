import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadList from "../../components/ListedBooks/ListedReadList";
import ListedWishList from "../../components/ListedBooks/ListedWishList";
import { MdArrowDropDown } from "react-icons/md";
import { useState } from "react";

const Books = () => {
  const [sortingType, setSortingType] = useState("");
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center mt-10 container bg-gray-100 p-5">
        <h2 className="text-3xl font-bold ">Books</h2>
      </div>
      <div className="flex justify-center items-center m-10">
        <div className="dropdown dropdown-start">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-success p-6 text-white font-bold text-xl m-1"
          >
            Sort By: {sortingType} <MdArrowDropDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setSortingType("pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => setSortingType("rating")}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ListedReadList sortingType={sortingType} />
        </TabPanel>
        <TabPanel>
          <ListedWishList sortingType={sortingType} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
