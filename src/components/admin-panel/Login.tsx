import { signIn } from "next-auth/react";
import React from "react";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-[#00153a]  grid place-items-center">
      <button
        type="button"
        onClick={() => signIn("google")}
        className="flex gap-4 text-white bg-[#005aeb] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium text-md px-6 py-3 text-center rounded-full items-center dark:focus:ring-[#4285F4]/55">
        <FaGoogle />
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
