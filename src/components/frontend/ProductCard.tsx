import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import Image from "next/image";
import toast from "react-hot-toast";
import {
  AiFillStar,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";

interface PropsType {
  id: string;
  img: string;
  category: string;
  title: string;
  price: number;
}

const ProductCard = ({ id, img, category, title, price }: PropsType) => {
  const dispatch = useAppDispatch();
  const addProductToCart = () => {
    const payLoad = {
      id,
      img,
      title,
      price,
      quantity: 1,
    };

    dispatch(addToCart(payLoad));
    toast.success("Added to cart");
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white">
      <div className="text-center borber-b border-gray-700">
        <Image src={img} alt={title} width={300} height={300} />
      </div>

      <div className="py-4">
        <p className="text-gray-500 text-[14px] font-medium">{category}</p>
        <h2 className="font-medium">{title}</h2>
      </div>
      <div className="flex text-yellow-500 items-center">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
        <p className="text-gray-600 text-[14px] ml-2">(3 Reviews)</p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <h2 className="text-2xl font-bold text-gray-700">₹{price}</h2>
        <div
          onClick={addProductToCart}
          className="rounded-full flex gap-2 items-center bg-blue-700 text-white px-4 py-2 cursor-pointer hover:bg-blue-800">
          <AiOutlineShoppingCart />
          Add to cart
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
