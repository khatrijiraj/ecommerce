import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { makeToast } from "@/utils/helper";
import axios from "axios";
import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface PropsType {
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  setUpdateTable: Dispatch<SetStateAction<boolean>>;
}

const Popup = ({ setOpenPopup, setUpdateTable }: PropsType) => {
  const productData = useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();
  const [inputData, setInputData] = useState({
    name: productData.name,
    category: productData.category,
    price: productData.price,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));
    axios
      .put(`/api/edit_products/${productData._id}`, inputData)
      .then((res) => {
        makeToast("Product Updated Successfully!");
        setUpdateTable((prevState) => !prevState);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        dispatch(setLoading(false));
        setOpenPopup(false);
      });
  };
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[#00000070] grid place-items-center">
      <div className="bg-white w-[700px] py-8 rounded-lg text-center relative">
        <IoIosCloseCircleOutline
          className="absolute text-2xl right-0 top-0 m-4 cursor-pointer hover:text-red-600"
          onClick={() => setOpenPopup(false)}
        />

        <h2 className="text-2xl mt-3">Edit Product</h2>
        <form className="mt-6 w-fit space-y-4 mx-auto" onSubmit={handleSubmit}>
          <input
            type="text"
            className="border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit"
            placeholder="Name"
            value={inputData.name}
            onChange={(e) => {
              setInputData({ ...inputData, name: e.target.value });
            }}
          />
          <input
            type="text"
            className="border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit"
            placeholder="Category"
            value={inputData.category}
            onChange={(e) => {
              setInputData({ ...inputData, category: e.target.value });
            }}
          />
          <input
            type="text"
            className="border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit"
            placeholder="Price"
            value={inputData.price}
            onChange={(e) => {
              setInputData({ ...inputData, price: e.target.value });
            }}
          />
          <div className="flex justify-end">
            <button className="bg-[#005aeb] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50    block text-white px-8 py-2 rounded-full self-center">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
