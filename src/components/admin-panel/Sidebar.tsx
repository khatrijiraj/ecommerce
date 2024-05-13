"use client";

import { MdDashboard, MdManageAccounts } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoAnalytics, IoSettings } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    title: "DashBoard",
    icon: <MdDashboard />,
    href: "/admin/dashboard",
  },
  {
    title: "Products",
    icon: <RiShoppingCartLine />,
    href: "/admin/products",
  },
  {
    title: "Accounts",
    icon: <MdManageAccounts />,
    href: "#",
  },
  {
    title: "Transactions",
    icon: <GrTransaction />,
    href: "#",
  },
  {
    title: "Analytics",
    icon: <IoAnalytics />,
    href: "#",
  },
  {
    title: "Setting",
    icon: <IoSettings />,
    href: "#",
  },
];

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <div className="bg-white w-[200px] min-h-screen p-4 shrink-0">
      <div className="flex items-center gap-4">
        <h2 className="text-[20px] font-semibold">Raj Khatri</h2>
      </div>
      <ul className="space-y-4 mt-6">
        {menus.map((menu) => (
          <Link
            key={menu.title}
            href={menu.href}
            className={`flex gap-2  item-center p-4 rounded-md cursor-pointer  hover:bg-[#4285F4]/90 hover:text-white ${
              pathName === menu.href ? "bg-[#005aeb] text-white" : "bg-gray-200"
            }`}>
            <div className="text-[20px] ">{menu.icon}</div>
            <p>{menu.title}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
