"use client";
import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch } from "@/redux/hooks";
import { makeToast } from "@/utils/helper";
import { UploadButton } from "@/utils/uploadthing";
import axios from "axios";
import Image from "next/image";
import React, { FormEvent, useState } from "react";

interface IPayload {
  imgSrc: null | string;
  fileKey: null | string;
  name: string;
  category: string;
  price: string;
}

const ProductForm = () => {
  const [payLoad, setPayLoad] = useState<IPayload>({
    imgSrc: null,
    fileKey: null,
    name: "",
    category: "",
    price: "",
  });

  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));
    axios
      .post("/api/add_product", payLoad)
      .then((res) => {
        makeToast("Product added successfully");
        setPayLoad({
          imgSrc: null,
          fileKey: null,
          name: "",
          category: "",
          price: "",
        });
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoading(false)));
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Image
        className="max-h-[200px] w-auto object-contain rounded-full"
        src={payLoad.imgSrc ? payLoad.imgSrc : "/placeholder.jpg"}
        width={800}
        height={500}
        alt="Product Image"
      />

      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log(res);
          setPayLoad({
            ...payLoad,
            imgSrc: res[0]?.url,
            fileKey: res[0].key,
          });
        }}
        onUploadError={(error: Error) => {
          console.log(`ERROR! ${error}`);
        }}
      />

      <div>
        <label className="block ml-1">Product Name</label>
        <input
          type="text"
          className="bg-gray-100 w-full px-4 py-2 border outline-blue-600 rounded-md"
          value={payLoad.name}
          onChange={(e) => setPayLoad({ ...payLoad, name: e.target.value })}
          required
          placeholder="Enter Product Name"
        />
      </div>
      <div>
        <label className="block ml-1">Category</label>
        <input
          type="text"
          className="bg-gray-100 w-full px-4 py-2 border outline-blue-600 rounded-md"
          value={payLoad.category}
          onChange={(e) => setPayLoad({ ...payLoad, category: e.target.value })}
          required
          placeholder="Enter Product Category"
        />
      </div>
      <div>
        <label className="block ml-1">Price</label>
        <input
          type="text"
          className="bg-gray-100 w-full px-4 py-2 border outline-blue-600 rounded-md"
          value={payLoad.price}
          onChange={(e) => setPayLoad({ ...payLoad, price: e.target.value })}
          required
          placeholder="Enter Product Price"
        />
      </div>
      <div className="flex justify-end">
        <button className="bg-[#005aeb] text-white hover:bg-[#4285F4]/90 rounded-md px-10 py-2">
            Add            
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
