import { removeFromCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";

interface PropsType {
  id: string;
  img: string;
  title: string;
  price: number;
  quantity: number;
}

const CartProduct: React.FC<PropsType> = ({
  id,
  img,
  title,
  price,
  quantity,
}) => {
  const dispatch = useAppDispatch();
  
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200">
      <div className="flex items-center gap-4">
        <Image src={img} alt={title} width={80} height={80} className="object-cover rounded" />
        <div className="space-y-1">
          <h3 className="font-medium text-sm sm:text-base">{title}</h3>
          <p className="text-gray-600 text-xs sm:text-sm">
            {quantity} × ₹{price}.00
          </p>
        </div>
      </div>
      <RxCross1 className="cursor-pointer text-gray-600 hover:text-gray-800 transition" onClick={handleRemoveFromCart} />
    </div>
  );
};

export default CartProduct;
