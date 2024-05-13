import { removeFromCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";

interface PropsType {
  id: string;
  img: string;
  title: string;
  price: string;
  quantity: string;
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
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image src={img} alt={title} width={80} height={80} />
        <div className="space-y-2">
          <h3 className="font-medium">{title}</h3>
          <p className="text-gray-600 text-[14px]">
            {quantity} * ${price}.00
          </p>
        </div>
      </div>

      <RxCross1 className="cursor-pointer" onClick={handleRemoveFromCart} />
    </div>
  );
};

export default CartProduct;
