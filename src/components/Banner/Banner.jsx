import React from "react";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[70vh] container mx-auto mt-20">
      <div className="hero-content flex-col lg:flex-row-reverse md:justify-between w-full">
        <img src={bannerImg} className="max-w-sm rounded-lg " />
        <div>
          <h1 className="text-5xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>

          <button className="btn btn-success mt-4">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
