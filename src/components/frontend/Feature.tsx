import { MdSupportAgent } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { TbDiscount, TbTruckDelivery } from "react-icons/tb";
import FeatureCard from "./FeatureCard";

const data = [
  {
    icon: <TbTruckDelivery className="text-4xl text-blue-600" />,
    title: "Free Delivery",
    desc: "On all items",
  },
  {
    icon: <RiRefund2Fill className="text-4xl text-green-600" />,
    title: "Return & Refund",
    desc: "Money back guarantee",
  },
  {
    icon: <TbDiscount className="text-4xl text-yellow-600" />,
    title: "Member Discount",
    desc: "On orders above ₹499.00",
  },
  {
    icon: <MdSupportAgent className="text-4xl text-red-600" />,
    title: "24/7 Support",
    desc: "Contact us: khatriraj030@gmail.com",
  },
];

const Feature = () => {
  return (
    <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((item) => (
          <FeatureCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Feature;
