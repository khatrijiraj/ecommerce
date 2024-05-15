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
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="bg-white w-full md:w-[700px] py-8 rounded-lg text-center relative">
        <IoIosCloseCircleOutline
          className="absolute text-2xl right-0 top-0 m-4 cursor-pointer hover:text-red-600"
          onClick={() => setOpenPopup(false)}
        />

        <h2 className="text-2xl mt-3">Edit Product</h2>
        <form className="mt-6 space-y-4 mx-4 md:mx-auto md:w-4/5 lg:w-3/5" onSubmit={handleSubmit}>
          <input
            type="text"
            className="border block border-gray-500 outline-none px-4 py-2 rounded-lg w-full md:w-auto"
            placeholder="Name"
            value={inputData.name}
            onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
          />
          <input
            type="text"
            className="border block border-gray-500 outline-none px-4 py-2 rounded-lg w-full md:w-auto"
            placeholder="Category"
            value={inputData.category}
            onChange={(e) => setInputData({ ...inputData, category: e.target.value })}
          />
          <input
            type="text"
            className="border block border-gray-500 outline-none px-4 py-2 rounded-lg w-full md:w-auto"
            placeholder="Price"
            value={inputData.price}
            onChange={(e) => setInputData({ ...inputData, price: e.target.value })}
          />
          <div className="flex justify-end">
            <button className="bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-500 text-white px-8 py-2 rounded-full">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
