import { useAppSelector } from "@/redux/hooks";
import React, { Dispatch, SetStateAction } from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

interface PropsType {
  setShowCart: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ setShowCart }: PropsType) => {
  const cartCount = useAppSelector((state) => state.cartReducer.length);

  return (
    <div className="px-10 pt-4 bg-white top-0">
      <div>
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold text-blue-700">ECommerce</div>

          <div className="lg:flex hidden w-full max-w-[600px]">
            <input
              className=" border-2 border-blue-700  rounded-tl-2xl rounded-bl-2xl py-2 px-6 bg-white  w-full text-blue-700 outline-none"
              type="text"
              placeholder="Search for products..."
            />
            <div className="rounded-tr-2xl rounded-br-2xl  text-white text-[20px] grid place-items-center px-8 bg-blue-700 hover:bg-blue-800 cusrpoin">
              <BsSearch />
            </div>
          </div>

          <div className="flex gap-4 md:gap-8 items-center">
            <div className="md:flex hidden gap-3 place-items-center">
              <div className="rounded-full border-2 border-blue-700 text-blue-700 text-[25px] w-[40px] h-[40px] grid place-items-center">
                <AiOutlineUser />
              </div>
              <div className="text-gray-700">
                <p>Hello, Sign in</p>
                <p className="font-bold">Your Account</p>
              </div>
            </div>

            <div
              onClick={() => setShowCart(true)}
              className="text-blue-700 text-[32px] relative cursor-pointer">
              <AiOutlineShoppingCart />
              <div className="absolute top-[-15px] right-[-10px] bg-red-700 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center">
                {cartCount}
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-300 pt-4"></div>
      </div>
    </div>
  );
};

export default Navbar;
