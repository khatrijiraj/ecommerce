"use client";
import Loader from "@/components/admin-panel/Loader";
import Login from "@/components/admin-panel/Login";
import Sidebar from "@/components/admin-panel/Sidebar";
import { useAppSelector } from "@/redux/hooks";
import { useSession } from "next-auth/react";

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isLoading = useAppSelector((store) => store.loadingReducer);
  const { data: session } = useSession();

  if (!session?.user) {
    return <Login />;
  }
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-full">
        {/* <NavBar /> */}
        <div className="bg-gray-100 p-8 h-screen overflow-y-scroll">
          {children}
        </div>
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default layout;
