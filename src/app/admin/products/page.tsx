import ProductForm from "@/components/admin-panel/ProductForm";
import React from "react";

const Products = () => {
  return (
    <div className="h-[calc(100vh-96px)] w-full grid place-items-center overflow-y-auto">
      <div className="bg-white w-[500px] rounded-lg p-6">
        <ProductForm />
      </div>
    </div>
  );
};

export default Products;
