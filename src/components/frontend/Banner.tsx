import React from "react";

const Banner = () => {
  return (
    <div className="mt-8 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 py-12 px-4 sm:px-6 lg:px-8 h-[400px] flex items-center">
      <div className="mx-auto">
        <div className="lg:text-center">
          <p className="text-sm font-semibold text-white uppercase tracking-wide">
            Free shipping on all orders over ₹499
          </p>
          <p className="mt-2 text-4xl leading-10 font-extrabold text-white sm:text-5xl sm:leading-none lg:text-6xl">
            Spring Sale!
          </p>
          <p className="mt-4 text-sm font-semibold text-white uppercase tracking-wide">
            Get up to 50% off selected items. Limited time only.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="#"
              className="inline-block bg-gray-100 py-2 px-10 shadow-lg rounded-full text-lg font-semibold text-gray-800 hover:bg-gray-300">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
