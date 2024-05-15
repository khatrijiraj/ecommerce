import { signIn } from "next-auth/react";
import React from "react";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="fixed inset-0 bg-blue-900 bg-opacity-90 flex items-center justify-center">
      <button
        type="button"
        onClick={() => signIn("google")}
        className="flex gap-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium text-md px-6 py-3 text-center rounded-full items-center md:w-2/3 lg:w-1/3 dark:focus:ring-blue-700">
        <FaGoogle />
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
