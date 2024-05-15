import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface IProduct {
  _id: string;
  imgSrc: string;
  fileKey: string;
  name: string;
  category: string;
  price: number;
}

const TrendingProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("api/get_products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("An error occurred while fetching data.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="container mx-auto text-center">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto text-center">{error}</div>;
  }

  return (
    <div className="container px-4 mt-8">
      <h2 className="text-3xl font-semibold mb-4">Trending Products</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((item) => (
          <ProductCard
            key={item._id}
            id={item._id}
            img={item.imgSrc}
            category={item.category}
            title={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
